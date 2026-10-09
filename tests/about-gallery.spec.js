import { test, expect } from '@playwright/test';

test('touch captions toggle even when the browser reports hover support', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'Requires touch input');
  await page.addInitScript(() => {
    const matchMedia = window.matchMedia.bind(window);
    window.matchMedia = query => {
      const result = matchMedia(query);
      if (query === '(hover: none)' || query === '(hover: hover)') {
        Object.defineProperty(result, 'matches', { value: query === '(hover: hover)' });
      }
      return result;
    };
  });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/about');
  for (const photo of await page.locator('.outside-photo').all()) {
    const caption = photo.locator('.outside-photo-caption');
    await photo.scrollIntoViewIfNeeded();
    await photo.tap();
    await expect(caption).toHaveCSS('opacity', '1');
    await photo.tap();
    await expect(caption).toHaveCSS('opacity', '0');
  }
});

test('gallery captions toggle with the keyboard', async ({ page, isMobile }) => {
  test.skip(isMobile, 'Desktop keyboard interaction');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/about');
  const photo = page.locator('.outside-photo--nara-deer');
  const caption = photo.locator('.outside-photo-caption');
  await photo.focus();
  await photo.press('Enter');
  await expect(caption).toHaveCSS('opacity', '1');
  await photo.press('Space');
  await expect(caption).toHaveCSS('opacity', '0');
});

test('gallery captions appear on hover or toggle on mobile tap', async ({ page, isMobile }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/about');
  for (const [name, text] of [
    ['museum-friends', '@ the MET'],
    ['banana-costumes', 'banana bar crawl'],
    ['kayaking', 'kayaking with Lyfterns'],
    ['activate-friends', 'activate with Lyfterns'],
    ['bamboo-forest', 'Arashiyama Bamboo Forest'],
    ['pagoda', 'Sensō-ji Temple'],
    ['tree-gathering', 'hide n seek @ Toronto Islands'],
    ['mahjong', 'mahjong!!'],
  ]) {
    const photo = page.locator(`.outside-photo--${name}`);
    const caption = photo.locator('.outside-photo-caption');
    await photo.scrollIntoViewIfNeeded();
    await expect(caption).toHaveText(text);
    await expect(caption).toHaveCSS('opacity', '0');
    if (isMobile) {
      await photo.tap();
      await expect(caption).toHaveCSS('opacity', '1');
      await expect(photo).toHaveAttribute('aria-pressed', 'true');
      await photo.tap();
      await expect(caption).toHaveCSS('opacity', '0');
      await expect(photo).toHaveAttribute('aria-pressed', 'false');
    } else {
      await photo.hover();
      await expect(caption).toHaveCSS('opacity', '1');
      await page.mouse.move(0, 0);
      await expect(caption).toHaveCSS('opacity', '0');
    }
  }
  await expect(page.locator('.outside-gallery button')).toHaveCount(9);
});

test('deer caption fades on hover or toggles with successive taps', async ({ page, isMobile }) => {
  await page.goto('/about');
  const photo = page.locator('.outside-photo--nara-deer');
  const caption = photo.locator('.outside-photo-caption');
  await photo.scrollIntoViewIfNeeded();
  await expect(photo).not.toHaveClass(/reveal-/);
  await expect(caption).toHaveCSS('opacity', '0');
  await expect(page.locator('.outside-gallery button')).toHaveCount(9);

  if (isMobile) {
    await photo.tap();
    await expect(caption).toHaveCSS('opacity', '1');
    await photo.tap();
    await expect(caption).toHaveCSS('opacity', '0');
  } else {
    await photo.hover();
    await expect(caption).toHaveCSS('opacity', '1');
    await photo.click();
    await page.mouse.move(0, 0);
    await expect(caption).toHaveCSS('opacity', '0');
  }

});

test('deer caption respects reduced motion', async ({ page, isMobile }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/about');
  const photo = page.locator('.outside-photo--nara-deer');
  await photo.scrollIntoViewIfNeeded();
  const caption = photo.locator('.outside-photo-caption');
  await expect(caption).toHaveCSS('transition-duration', '0s');
  if (!isMobile) {
    await photo.hover();
    await expect(caption).toHaveCSS('opacity', '1');
  } else {
    await photo.tap();
    await expect(caption).toHaveCSS('opacity', '1');
    await photo.tap();
    await expect(caption).toHaveCSS('opacity', '0');
  }
});
