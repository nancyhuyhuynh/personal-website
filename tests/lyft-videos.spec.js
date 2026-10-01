import { test, expect } from '@playwright/test';

const durations = {
  'existing-milestone': 8.33,
  'separate-page': 7.63,
  drawer: 7.2,
  'expandable-list': 8.07,
  sparkle: 6.23,
  confetti: 6.4,
  'final-hub': 19.73,
  'share-badge': 8.77,
  'push-notification': 5.13,
};

test('Lyft recordings play their complete sequences and loop', async ({ page }) => {
  await page.goto('/projects/lyft');
  const videos = page.locator('.lyft-demo video');
  await expect(videos).toHaveCount(11);
  await expect.poll(() => videos.evaluateAll(elements => elements.every(v => v.readyState >= 2))).toBe(true);
  const metadata = await videos.evaluateAll(elements => elements.map(v => ({
    name: v.currentSrc.split('/').pop().split('.')[0], duration: v.duration,
  })));
  for (const { name, duration } of metadata) {
    expect(duration, name).toBeCloseTo(durations[name], 1);
  }
  // Play naturally beyond the old two-second cutoff, then through each loop boundary.
  await videos.evaluateAll(elements => Promise.all(elements.map(async v => {
    v.currentTime = 0;
    await v.play();
  })));
  await expect.poll(() => videos.evaluateAll(elements => elements.every(v => v.currentTime > 2.5 && !v.paused)), { timeout: 8000 }).toBe(true);
  await videos.evaluateAll(elements => elements.forEach(v => { v.currentTime = v.duration - 0.3; }));
  await expect.poll(() => videos.evaluateAll(elements => elements.every(v => v.currentTime < 2 && !v.paused && !v.error)), { timeout: 5000 }).toBe(true);
});

test('Lyft video controls respect reduced motion and allow manual playback', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/projects/lyft');
  const video = page.locator('.lyft-demo video').first();
  await expect(video).toHaveJSProperty('paused', true);
  await page.getByRole('button', { name: 'Play Existing milestone experience', exact: true }).click();
  await expect(video).toHaveJSProperty('paused', false);
  await page.getByRole('button', { name: 'Pause Existing milestone experience', exact: true }).click();
  await expect(video).toHaveJSProperty('paused', true);
});
