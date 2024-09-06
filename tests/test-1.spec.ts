import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('nepal');
  await page.getByRole('link', { name: 'Nepal Wikipedia https://en.' }).click();
  await page.getByRole('heading', { name: 'Nepal', exact: true }).locator('span').click();
});