# PlaywrightOnPowerPlatform

This repository contains end-to-end tests for a TodoMVC demo app using [Playwright](https://playwright.dev/).

## Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/itweedie/playwrightOnPowerPlatform.git
cd playwrightOnPowerPlatform
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Install Playwright Browsers

```sh
npx playwright install --with-deps
```

## Setting Up Environment Variables

To securely manage sensitive information like URLs, usernames, and passwords, create a `.env` file in the root of your project.

### Steps to Create the `.env` File

1. Create a file named `.env` in the root directory of your project.
2. Add the following variables to the `.env` file:

```properties
APP_URL=https://techtweedie.crm11.dynamics.com/main.aspx?appid=6653f9fc-b74b-f011-877a-6045bd0e2fc6
APP_NAME=MDA Playwright Testing
O365_USERNAME=
O365_PASSWORD=
O365_TENANT_ID=
```

### Using the `.env` File

The `.env` file is automatically loaded by the `dotenv` package, which is included in the project. These variables can be accessed in your test files using `process.env`. For example:

```typescript
const config = {
  appUrl: process.env.APP_URL || 'default_url',
  appName: process.env.APP_NAME || 'default_name',
  username: process.env.O365_USERNAME || 'default_username',
  password: process.env.O365_PASSWORD || 'default_password',
  tenantId: process.env.O365_TENANT_ID || 'default_tenant_id',
};
```

### Important Note

Make sure the `.env` file is added to your `.gitignore` to prevent sensitive information from being committed to your repository:

```plaintext
.env
```

For more details on environment variables, see [dotenv documentation](https://github.com/motdotla/dotenv).


## Running Tests

### Run All Tests (Headless by Default)

```sh
npx playwright test
```

### Run Tests in Non-Headless Mode

```sh
npx playwright test --headed
```

### Run a Specific Test File

```sh
npx playwright test tests/example.spec.ts
```

### Run Tests in a Specific Browser

```sh
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## Viewing Test Reports

After running tests, view the HTML report:

```sh
npx playwright show-report
```

Or open the generated report directly:

- [playwright-report/index.html](playwright-report/index.html)

## Recording New Tests

You can use Playwright's codegen tool to record new tests:

```sh
npx playwright codegen https://demo.playwright.dev/todomvc
```

This will open a browser window and generate code as you interact with the page. Save the generated code in the [`tests`](tests/) or [`tests-examples`](tests-examples/) directory.

## Running Tests in CI

Tests are automatically run in GitHub Actions on push and pull requests to `main` or `master` ([.github/workflows/playwright.yml](.github/workflows/playwright.yml)).


---

For more details, see [Playwright documentation](https://playwright.dev/docs/intro).

https://fakerapi.it/api/v2/custom?_quantity=1&customfield1=name&customfield2=dateTime&customfield3=phone&something=longText

