/// <reference types="node" />
import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  testDir: 'src/tests',
  retries: 0,
  workers: 2,
  timeout: 15000,

  use: {
    baseURL: "https://sit.careerequity.com/",
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },

  reporter: [
    ['line'],
    ['allure-playwright']
  ],

  projects: [
    {
      name: 'setup',
      testMatch: /auth\.setup\.ts/,
    },
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        storageState: 'auth/auth.json',
      },
      dependencies: ['setup'],
    },

    // Firefox
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        browserName: 'firefox',
        storageState: 'auth/auth.json',
      },
      dependencies: ['setup'],
    },
  ]
});