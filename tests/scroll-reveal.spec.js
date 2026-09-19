import { test, expect } from '@playwright/test';

for (const [path, selector] of [
  ['/', '.case-study-card:last-child'],
  ['/about', '.grid-8.adventures > img:last-child'],
  ['/resume', '.grid-5 > :last-child'],
  ['/projects/revvity', '.case-study-body > .cs-container:last-child'],
  ['/projects/gradeeasy', '.case-study-body > .cs-container:last-child'],
  ['/projects/plooto', '.case-study-body > .cs-container:last-child'],
  ['/projects/radicalgary', '.case-study-body > .cs-container:last-child'],
]) {
  test(`${path} reveals below-fold content once on scroll`, async ({ page }) => {
    await page.goto(path);
    const target = page.locator(selector).last();
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

for (const path of ['/projects/revvity', '/projects/gradeeasy', '/projects/plooto', '/projects/radicalgary']) {
  test(`${path} offsets adjacent media reveals by 200ms`, async ({ page }) => {
    await page.goto(path);
    const group = page.locator('[data-stagger-reveal-active]').first();
    const items = group.locator(':scope > *');
    await expect(items.nth(1)).toHaveCSS('--reveal-delay', '200ms');
    await items.last().scrollIntoViewIfNeeded();
    await expect(items.last()).not.toHaveClass(/reveal-/);
  });
}

for (const path of ['/', '/about', '/resume', '/projects/revvity', '/projects/gradeeasy', '/projects/plooto', '/projects/radicalgary']) {
  test(`${path} does not animate the footer`, async ({ page }) => {
    await page.goto(path);
    await expect(page.locator('.footer .div-block-9')).not.toHaveClass(/reveal-/);
  });
}
