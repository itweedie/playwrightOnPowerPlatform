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

let page; // Declare a variable to hold the browser page instance

// Perform login once before all tests
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage(); // Create a new browser page
  await page.goto('https://portal.office.com/'); // Navigate to the Office 365 login page

  // Enter the username in the login textbox
  await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).click();
  await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).fill(config.username);

  // Click the "Next" button and wait for navigation
  await Promise.all([
    page.waitForNavigation(),
    page.getByRole('button', { name: 'Next' }).click(),
  ]);

  // Enter the password in the password textbox
  await page.getByRole('textbox', { name: 'Enter the password for' }).click();
  await page.getByRole('textbox', { name: 'Enter the password for' }).fill(config.password);

  // Click the "Sign in" button and wait for navigation
  await Promise.all([
    page.waitForNavigation(),
    page.getByRole('button', { name: 'Sign in' }).click(),
  ]);

  // Confirm the "Stay signed in" prompt by clicking "Yes"
  await page.getByRole('button', { name: 'Yes' }).click();

  // Save the authentication state to a file
  await page.context().storageState({ path: '.auth/auth.json' });
});
