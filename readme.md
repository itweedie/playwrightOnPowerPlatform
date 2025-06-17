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