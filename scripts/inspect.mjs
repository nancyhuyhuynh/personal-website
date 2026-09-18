import { chromium } from '@playwright/test';
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_EXECUTABLE_PATH });
for (const width of [1440, 390]) {
  for (const url of ['http://localhost:5173', 'https://nancyhuynh.webflow.io']) {
    const page = await browser.newPage({ viewport: { width, height: 1000 } });
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1800);
    console.log(url, width, await page.evaluate(() => Object.fromEntries(
      ['.nav-menu-4', '.home-header', '.headinglandingpage', '.header-text-image', '.characters', '.bg-colour-blur.head-left', '.bg-colour-blur.header-right'].map(selector => {
        const el = document.querySelector(selector), style = getComputedStyle(el);
        return [selector, { bounds: el.getBoundingClientRect().toJSON(), gap: style.gap, transform: style.transform, margin: style.margin, padding: style.padding }];
      })
    )));
    await page.close();
  }
}
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
await page.goto('http://localhost:5173/about', { waitUntil: 'networkidle' });
await page.screenshot({ path: '/tmp/nancy-about.png', fullPage: true });
await page.goto('http://localhost:5173/projects/revvity', { waitUntil: 'networkidle' });
await page.locator('video').first().scrollIntoViewIfNeeded();
console.log('Video', await page.locator('video').first().evaluate(async v => {
  v.load();
  const result = await Promise.race([v.play().then(() => 'playing').catch(e => e.message), new Promise(r => setTimeout(() => r('timeout'), 3000))]);
  return { result, state: v.readyState, error: v.error?.message, source: v.currentSrc, bounds: v.getBoundingClientRect().toJSON() };
}));
await page.screenshot({ path: '/tmp/nancy-video.png' });
await browser.close();
