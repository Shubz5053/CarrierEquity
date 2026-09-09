import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { BasePage } from '../pages/base.page';
import user from '../testdata/user.json';
import fs from 'fs';

const employerFile = 'auth/employerauth.json';

if (!fs.existsSync('auth')) {
  fs.mkdirSync('auth');
}

test('login with valid user', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const basePage = new BasePage(page);
  await basePage.navigate("/sign-in");
  await loginPage.login(user.username, user.password);
  await page.waitForURL('/employer/jobs-page');
  await page.context().storageState({ path: employerFile });
});
