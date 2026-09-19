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

test('menu highlight follows scrolling between Home and Projects', async ({ page }) => {
  await page.goto('/');
  const nav = page.getByRole('navigation');
  const home = nav.getByRole('link', { name: 'Home', exact: true });
  const projects = nav.getByRole('link', { name: 'Projects', exact: true });
  await expect(home).toHaveAttribute('aria-current', 'page');
  await projects.click();
  await expect(projects).toHaveAttribute('aria-current', 'page');
  await expect(home).not.toHaveClass(/w--current/);
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await expect(home).toHaveAttribute('aria-current', 'page');
  await expect(projects).not.toHaveClass(/w--current/);
  await expect(page).toHaveURL('/#projects');
  await page.evaluate(() => document.getElementById('projects').scrollIntoView({ behavior: 'instant' }));
  await expect(projects).toHaveAttribute('aria-current', 'page');
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

test('menu hides on downward scroll and returns on upward scroll or keyboard focus', async ({ page }) => {
  await page.goto('/');
  const menu = page.locator('header.navbar-2');
  await expect(menu).toHaveCSS('opacity', '1');
  await page.evaluate(() => window.scrollTo({ top: 500, behavior: 'instant' }));
  await expect(menu).toHaveCSS('opacity', '0');
  await expect(menu).not.toBeInViewport();
  await page.evaluate(() => window.scrollTo({ top: 350, behavior: 'instant' }));
  await expect(menu).toHaveCSS('opacity', '1');
  await expect(menu).toBeInViewport();
  await page.evaluate(() => window.scrollTo({ top: 600, behavior: 'instant' }));
  await expect(menu).toHaveCSS('opacity', '0');
  await menu.getByRole('link').first().focus();
  await expect(menu).toHaveCSS('opacity', '1');
  await expect(menu).toBeInViewport();
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

test('case study videos autoplay, loop, and hide native controls', async ({ page }) => {
  await page.goto('/projects/revvity');
  const videos = page.locator('video');
  await expect(videos).toHaveCount(3);
  for (const video of await videos.all()) {
    await video.scrollIntoViewIfNeeded();
    await expect(video).toHaveJSProperty('autoplay', true);
    await expect(video).toHaveJSProperty('loop', true);
    await expect(video).toHaveJSProperty('muted', true);
    await expect(video).toHaveJSProperty('controls', false);
    await expect.poll(() => video.evaluate(element => !element.paused)).toBe(true);
  }
});

test('Revvity screenshot galleries cycle through every Webflow media state', async ({ page }) => {
  await page.goto('/projects/revvity');

  const iterationFrames = page.locator('.swapping-media > [class^="media-"]');
  const modalFrames = page.locator('.swapping-media-8 > [class^="media-"]');
  await expect(iterationFrames).toHaveCount(12);
  await expect(modalFrames).toHaveCount(8);

  for (const frame of await iterationFrames.all()) {
    await expect(frame).toHaveCSS('display', 'block');
    await expect(frame).toHaveCSS('animation-name', 'revvity-swap-four');
    await expect(frame).toHaveCSS('animation-duration', '6s');
  }
  for (const frame of await modalFrames.all()) {
    await expect(frame).toHaveCSS('display', 'block');
    await expect(frame).toHaveCSS('animation-name', 'revvity-swap-eight');
    await expect(frame).toHaveCSS('animation-duration', '12s');
  }

  await expect(page.locator('.swapping-media').first().locator('.media-1')).toHaveCSS('animation-delay', '0s');
  await expect(page.locator('.swapping-media').first().locator('.media-4')).toHaveCSS('animation-delay', '-1.5s');
  await expect(page.locator('.swapping-media-8 > .media-1-8')).toHaveCSS('animation-delay', '0s');
  await expect(page.locator('.swapping-media-8 > .media-8-8')).toHaveCSS('animation-delay', '-1.5s');
});
