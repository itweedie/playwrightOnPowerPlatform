
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Enable inspector
  await page.pause();

  await page.goto('https://demo.playwright.dev/todomvc');
})();

