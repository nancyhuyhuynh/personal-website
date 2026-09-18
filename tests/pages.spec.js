import { test, expect } from '@playwright/test';
import { pageTitles } from '../src/routes.js';

for (const [route, title] of Object.entries(pageTitles)) {
  test(`${title}: direct links, reloads, and assets work under the repository path`, async ({ page }) => {
    const failures = [];
    page.on('pageerror', error => failures.push(error.message));
    page.on('response', response => {
      if (response.status() >= 400) failures.push(`${response.status()} ${response.url()}`);
    });
    const response = await page.goto(route.slice(1) || './');
    expect(response.status()).toBe(200);
    await expect(page).toHaveTitle(`${title} | Nancy Huynh`);
    await expect(page.getByRole('main')).toBeVisible();
    await expect(page.getByRole('status')).toHaveCount(0);
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all([...document.images].map(image => {
        image.loading = 'eager';
        return image.decode();
      }));
    });
    const paths = await page.evaluate(() => [...document.querySelectorAll('a[href], img[src], source[src], video[poster]')].map(el => el.href || el.src || el.poster));
    for (const path of paths) {
      if (path.startsWith('http://127.0.0.1:4174')) expect(new URL(path).pathname).toMatch(/^\/personal-website\//);
    }
    expect((await page.reload()).status()).toBe(200);
    await expect(page.getByRole('main')).toBeVisible();
    expect(failures).toEqual([]);
  });
}

test('project navigation, anchors, browser history, and video stay within the site', async ({ page }) => {
  await page.goto('./');
  await page.getByRole('navigation').getByRole('link', { name: 'About', exact: true }).click();
  await expect(page).toHaveURL(/\/personal-website\/about$/);
  await expect(page.getByRole('main')).toContainText('Product Designer');
  await page.getByRole('navigation').getByRole('link', { name: 'Projects', exact: true }).click();
  await expect(page).toHaveURL(/\/personal-website\/#projects$/);
  await expect(page.locator('#projects')).toBeInViewport();
  await page.getByRole('link', { name: 'Read the Revvity Health Science case study' }).click();
  await expect(page).toHaveURL(/\/personal-website\/projects\/revvity$/);
  expect((await page.reload()).status()).toBe(200);
  const video = page.locator('video').first();
  await video.scrollIntoViewIfNeeded();
  await video.evaluate(async element => { await element.play(); element.pause(); });
  expect(await video.evaluate(element => element.readyState)).toBeGreaterThanOrEqual(2);
  await page.goBack();
  await expect(page).toHaveURL(/\/personal-website\/#projects$/);
});

test('unknown URLs show a usable 404 page', async ({ page }) => {
  expect((await page.goto('missing-page')).status()).toBe(404);
  await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible();
  await page.getByRole('link', { name: 'Back to home' }).click();
  await expect(page).toHaveTitle('Home | Nancy Huynh');
  await expect(page).toHaveURL(/\/personal-website\/$/);
});
