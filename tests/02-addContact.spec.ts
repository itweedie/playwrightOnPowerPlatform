import { test, expect } from '@playwright/test';
import 'dotenv/config';

// Define the configuration interface and load values from environment variables
interface Config {
  appUrl: string; // URL of the application to test
  appName: string; // Name of the application to verify
  username: string; // Username for login
  password: string; // Password for login
  tenantId: string; // Tenant ID for the Office 365 account
}

// Load configuration values, falling back to defaults if environment variables are not set
const config: Config = {
  appUrl: process.env.APP_URL || 'default_url',
  appName: process.env.APP_NAME || 'default_name',
  username: process.env.O365_USERNAME || 'default_username',
  password: process.env.O365_PASSWORD || 'default_password',
  tenantId: process.env.O365_TENANT_ID || 'default_tenant_id',
};

// Test to verify the application is accessible and displays the correct name
test('add-contact', async ({ page }) => {
  await page.goto(config.appUrl); // Navigate to the application URL
  
  // Wait for a stable element that indicates the page is ready
  //await page.waitForLoadState('networkidle');

  // Use a more robust locator and increase timeout if needed
  const appTitle = page.locator(`text="${config.appName}"`).first();
  await expect(appTitle).toBeVisible({ timeout: 10000 });
  
  await expect(page.locator(`text=${config.appName}`).first()).toBeVisible(); // Verify the application name is visible
  await page.getByText('AddSpecificResource_16Contacts').click();
  await page.getByRole('menuitem', { name: 'New', exact: true }).click();
  await page.getByRole('button', { name: 'dismiss' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Chris');
  await page.getByRole('textbox', { name: 'First Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Test');
  await page.getByRole('textbox', { name: 'Email', exact: true }).click();
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill('Chris@test.com');
  await page.getByRole('menuitem', { name: 'Save & Close' }).click();
});