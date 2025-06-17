import { test, expect } from '@playwright/test';

interface Config {
  appUrl: string;
  appName: string;
}

const config: Config = {
  appUrl: process.env.APP_URL || 'default_url',
  appName: process.env.APP_NAME || 'default_name',
};



test('login', async ({ page }) => {
  await page.goto('https://login.microsoftonline.com/63759d9f-bfca-4f52-ae98-8f2f1d7bc173/oauth2/authorize?client_id=00000007-0000-0000-c000-000000000000&response_type=code%20id_token&scope=openid%20profile&state=OpenIdConnect.AuthenticationProperties%3DMAAAAL2WHx9JRBHwvlAAIkjGrEoXZ7rLAd-8ZkzfLw2bf_VSbDBC5XnKwI3mrIHyoVwbTgEAAAABAAAACS5yZWRpcmVjdFtodHRwczovL3RlY2h0d2VlZGllLmNybTExLmR5bmFtaWNzLmNvbS9tYWluLmFzcHg_YXBwaWQ9NjY1M2Y5ZmMtYjc0Yi1mMDExLTg3N2EtNjA0NWJkMGUyZmM2%26RedirectTo%3DMAAAAL2WHx9JRBHwvlAAIkjGrEq6JEB31HyeNwUuT6Wt167hczDITyTxvdZwBlwqzr4EsGh0dHBzOi8vdGVjaHR3ZWVkaWUuY3JtMTEuZHluYW1pY3MuY29tLw%253d%253d%26RedirectToForMcas%3Dhttps%253a%252f%252ftechtweedie.crm11.dynamics.com%252fmain.aspx%253fappid%253d6653f9fc-b74b-f011-877a-6045bd0e2fc6&response_mode=form_post&nonce=638857896232381564.ZTJmNjY4ZDgtMWNkZS00OWI5LThiNzYtYjQ0Njg0YzA4OTU5Yjk1MjJmYzktNDAwYi00ZjdkLTgwMDgtZmY2MWVjMjQ4OGJi&redirect_uri=https%3A%2F%2Flon--gbrcrmlivesg720.crm11.dynamics.com%2F&max_age=86400&claims=%7B%22id_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22CP1%22%5D%7D%7D%7D&x-client-SKU=ID_NET472&x-client-ver=8.3.0.0&sso_reload=true');
  await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).click();
  await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).fill('playwright-test@tweed.technology');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Enter the password for' }).click();
  await page.getByRole('textbox', { name: 'Enter the password for' }).fill('xxxxxxxxxx');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
});


test('open app', async ({ page }) => {
  await page.goto(config.appUrl);
  await expect(page.locator(`text=${config.appName}`).first()).toBeVisible();
});