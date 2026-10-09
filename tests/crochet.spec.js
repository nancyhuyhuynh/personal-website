import { test, expect } from '@playwright/test';

for (const width of [320, 600, 768]) {
  test(`crochet stays visible and keeps its speed while images load at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    let releaseImages;
    const imagesReady = new Promise(resolve => { releaseImages = resolve; });
    await page.route('**/assets/66da*.png', async route => {
      await imagesReady;
      await route.continue();
    });
    try {
      await page.goto('/about', { waitUntil: 'domcontentloaded' });
      const gallery = page.getByRole('region', { name: 'Crochet creations gallery' });
      const track = gallery.locator('.crochet-track');
      await gallery.scrollIntoViewIfNeeded();
      await expect(gallery).toHaveCSS('opacity', '1');
      await expect(gallery).toHaveCSS('height', '200px');
      const initialWidth = await track.evaluate(el => el.getBoundingClientRect().width);
      expect(initialWidth).toBeGreaterThan(4500);
      releaseImages();
      await expect.poll(() => gallery.locator('img').evaluateAll(images =>
        images.every(img => img.complete && img.naturalWidth > 0)
      )).toBe(true);
      const loadedWidth = await track.evaluate(el => el.getBoundingClientRect().width);
      expect(Math.abs(loadedWidth - initialWidth)).toBeLessThan(1);

      // Sample actual motion rather than only checking the CSS duration.
      const speed = await track.evaluate(async el => {
        const animation = el.getAnimations()[0];
        const startTime = animation.currentTime;
        const startX = new DOMMatrix(getComputedStyle(el).transform).m41;
        await new Promise(resolve => setTimeout(resolve, 500));
        const endX = new DOMMatrix(getComputedStyle(el).transform).m41;
        return (startX - endX) / ((animation.currentTime - startTime) / 1000);
      });
      expect(speed).toBeGreaterThan(75);
      expect(speed).toBeLessThan(85);
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(width);

      // Both halves must cover the viewport at the end of the seamless loop.
      await track.evaluate(el => {
        const animation = el.getAnimations()[0];
        animation.pause();
        animation.currentTime = animation.effect.getTiming().duration - 1;
      });
      const covered = await gallery.evaluate(el => {
        const viewport = el.getBoundingClientRect();
        const copy = el.querySelector('.crochet-carousel[aria-hidden]').getBoundingClientRect();
        return copy.left <= viewport.left + 1 && copy.right >= viewport.right;
      });
      expect(covered).toBe(true);
    } finally {
      releaseImages();
    }
  });
}

test('crochet remains visible and still with reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/about');
  const gallery = page.getByRole('region', { name: 'Crochet creations gallery' });
  await gallery.scrollIntoViewIfNeeded();
  await expect(gallery).toHaveCSS('opacity', '1');
  await expect(gallery.locator('.crochet-track')).toHaveCSS('animation-name', 'none');
});
