import { chromium } from '@playwright/test';

const target = process.argv[2] || 'http://localhost:5173';
const prefix = process.argv[3] || '/tmp/nancy-react';
const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_EXECUTABLE_PATH || undefined,
});
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
page.on('pageerror', error => console.error(error.message));
await page.goto(target, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(1800);
await page.screenshot({ path: `${prefix}-desktop.png`, fullPage: true });
console.log('Desktop:', await page.evaluate(() => ({
  width: document.documentElement.scrollWidth,
  viewport: innerWidth,
  images: [...document.images].filter(i => i.complete && !i.naturalWidth).map(i => i.src),
  hero: document.querySelector('.home-header')?.getBoundingClientRect().toJSON(),
})));
await page.setViewportSize({ width: 390, height: 844 });
await page.goto(target, { waitUntil: 'networkidle' });
await page.waitForTimeout(1800);
await page.screenshot({ path: `${prefix}-mobile.png`, fullPage: true });
console.log('Mobile:', await page.evaluate(() => ({ width: document.documentElement.scrollWidth, viewport: innerWidth })));
await browser.close();
