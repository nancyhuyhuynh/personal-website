import { test, expect } from '@playwright/test';

for (const [path, selector] of [
  ['/', '.case-study-card:last-child'],
  ['/about', '.grid-8.adventures > img:last-child'],
  ['/resume', '.grid-5 > :last-child'],
]) {
  test(`${path} reveals below-fold content once on scroll`, async ({ page }) => {
    await page.goto(path);
    const target = page.locator(selector);
    await expect(target).toHaveCSS('opacity', '0');
    await target.scrollIntoViewIfNeeded();
    await expect(target).toHaveCSS('opacity', '1');
    await expect(target).not.toHaveClass(/reveal-/);
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await expect(target).toHaveCSS('opacity', '1');
    await expect(page.locator('body')).toHaveJSProperty('scrollWidth', await page.evaluate(() => window.innerWidth));
  });
}

test('reduced motion leaves content visible across page navigation', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  for (const name of ['About', 'Resume', 'Home']) {
    await page.getByRole('navigation').getByRole('link', { name, exact: true }).click();
    await expect(page).toHaveTitle(`${name} | Nancy Huynh`);
    await expect(page.locator('.reveal-pending, .reveal-running')).toHaveCount(0);
  }
});
