import { test, expect } from '@playwright/test';
import 'dotenv/config';

test.use({ storageState: '.auth/auth.json' }); // Load the saved authentication state

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
test('open app', async ({ page }) => {
  await page.goto(config.appUrl); // Navigate to the application URL
  await expect(page.locator(`text=${config.appName}`).first()).toBeVisible(); // Verify the application name is visible
});