import { test, expect } from '@playwright/test';

const pages = [
  ['/', 'Home'], ['/about', 'About'], ['/resume', 'Resume'],
  ['/projects/revvity', 'Revvity'], ['/projects/gradeeasy', 'GradeEasy'],
  ['/projects/plooto', 'Plooto'], ['/projects/radicalgary', 'RadiCalgary'],
];

for (const [path, title] of pages) {
  test(`${title} renders without errors, missing assets, or horizontal overflow`, async ({ page }) => {
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(path);
    await expect(page).toHaveTitle(`${title} | Nancy Huynh`);
    await expect(page.getByRole('main')).toBeVisible();
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all([...document.images].map(image => {
        image.loading = 'eager';
        return image.decode().catch(() => {});
      }));
    });
    const layout = await page.evaluate(() => ({
      broken: [...document.images].filter(image => !image.naturalWidth).map(image => image.src),
      width: document.documentElement.scrollWidth,
      viewport: window.innerWidth,
    }));
    expect(layout.broken).toEqual([]);
    expect(layout.width).toBeLessThanOrEqual(layout.viewport + 1);
    expect(errors).toEqual([]);
  });
}

test('navigation, project links, and browser history work', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('navigation').getByRole('link', { name: 'About', exact: true }).click();
  await expect(page).toHaveURL('/about');
  await expect(page.getByRole('main')).toContainText('Product Designer');
  await page.getByRole('navigation').getByRole('link', { name: 'Projects', exact: true }).click();
  await expect(page).toHaveURL('/#projects');
  await expect(page.locator('#projects')).toBeInViewport();
  await page.getByRole('link', { name: 'Read the Revvity Health Science case study' }).click();
  await expect(page).toHaveURL('/projects/revvity');
  await expect(page.getByRole('main')).toContainText('Overview');
  await page.goBack();
  await expect(page).toHaveURL('/#projects');
  await page.getByRole('navigation').getByRole('link', { name: 'Resume', exact: true }).click();
  await expect(page.getByRole('link', { name: /PDF/ })).toHaveAttribute('href', /drive.google.com/);
});

test('characters support keyboard movement and reset', async ({ page }) => {
  await page.goto('/');
  const sticker = page.getByRole('button', { name: 'Move illustrated character 1.', exact: false });
  await sticker.focus();
  await sticker.press('ArrowRight');
  await sticker.press('ArrowUp');
  await expect(sticker).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 10, -10)');
  await sticker.press('Escape');
  await expect(sticker).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)');
});

test('characters drag and project artwork changes on hover', async ({ page, isMobile }) => {
  test.skip(isMobile, 'Pointer hover is a desktop interaction.');
  await page.goto('/');
  const sticker = page.getByRole('button', { name: 'Move illustrated character 1.', exact: false });
  const bounds = await sticker.boundingBox();
  await page.mouse.move(bounds.x + bounds.width / 2, bounds.y + bounds.height / 2);
  await page.mouse.down();
  await page.mouse.move(bounds.x + bounds.width / 2 + 80, bounds.y + bounds.height / 2 - 40, { steps: 8 });
  await page.mouse.up();
  await expect(sticker).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 80, -40)');
  const cover = page.getByRole('link', { name: 'Explore Revvity Health Science' });
  await cover.hover();
  await expect(cover.locator('.top-card-image')).toHaveCSS('opacity', '0');
});

test('case study video has a working local source and native playback', async ({ page }) => {
  await page.goto('/projects/revvity');
  const video = page.locator('video').first();
  await video.scrollIntoViewIfNeeded();
  await video.evaluate(async element => {
    element.load();
    await element.play();
    element.pause();
  });
  expect(await video.evaluate(element => element.readyState)).toBeGreaterThanOrEqual(2);
});
