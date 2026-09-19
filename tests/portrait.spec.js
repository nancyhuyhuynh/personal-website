import { test, expect } from '@playwright/test';

test('About portrait cycles automatically and hovering does not change it', async ({ page, isMobile }) => {
  await page.clock.install({ time: new Date('2026-01-01T00:00:00Z') });
  await page.goto('/about');
  const portrait = page.locator('.character-block');
  await expect(portrait).toBeVisible();
  await page.clock.pauseAt(await page.evaluate(() => Date.now() + 100));
  const visibleFrame = portrait.locator('img[src*="portrait"]:visible');
  await expect(visibleFrame).toHaveAttribute('src', /portrait1\.png/);
  for (const frame of [2, 3, 4, 5, 1]) {
    await page.clock.runFor(1500);
    await expect(visibleFrame).toHaveCount(1);
    await expect(visibleFrame).toHaveAttribute('src', new RegExp(`portrait${frame}\\.png`));
  }
  if (!isMobile) {
    await portrait.hover();
    await expect(visibleFrame).toHaveAttribute('src', /portrait1\.png/);
    await expect(portrait).toHaveCSS('transform', 'none');
    await page.clock.runFor(1500);
    await expect(visibleFrame).toHaveAttribute('src', /portrait2\.png/);
  }
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(visibleFrame).toHaveAttribute('src', /portrait1\.png/);
  await page.clock.runFor(3000);
  await expect(visibleFrame).toHaveAttribute('src', /portrait1\.png/);
});
