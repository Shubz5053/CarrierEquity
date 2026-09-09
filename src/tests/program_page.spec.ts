import { test, expect } from '@playwright/test';
import { ProgramPage } from '../pages/program.page'
import { BasePage } from '../pages/base.page';
import { getTodayDateYYYYMMDD, getTomorrowDateYYYYMMDD } from '../utils/dataobject';
import { getRandomNumber } from '../utils/randomnumber';
import { writeJson } from "../utils/jsonUtils";




test('Create Program', async ({ page }) => {
  const programpage = new ProgramPage(page);
  const basepage = new BasePage(page);
  await basepage.navigate("/employer/programs");
  await programpage.clickProgramsMenu();
  await programpage.clickAddProgram();
  const programName = 'Test Program :' + getRandomNumber(5);
  await programpage.enterProgramName(programName);
  writeJson("programData.json", { programName: programName });
  const todayDate = getTodayDateYYYYMMDD();
  const tomorrowDate = getTomorrowDateYYYYMMDD();
  await programpage.startDateInputField();
  await page.locator(`td[title='${todayDate}']`).click({ timeout: 2000 });
  await programpage.endDateInputField();
  await page.locator(`td[title='${tomorrowDate}']`).click({ timeout: 2000 });
  await programpage.enterProgramDescription("This is a test program description.");
  await programpage.clickSaveProgram();
  await expect(
    page.locator("//span[contains(text(),'Program added successfully')]")
  ).toBeVisible();
})

test('Verify Program', async ({ page }) => {
  const programpage = new ProgramPage(page);
  const basepage = new BasePage(page);
})

test('TC01 - Verify test passes', async () => {
  expect(1 + 1).toBe(2);
});

test('TC02 - Verify text', async () => {
  const message = 'Hello Playwright';
  expect(message).toBe('Hello Playwright');
});

test('TC03 - Verify array', async () => {
  const users = ['Shubham', 'Amit', 'Rahul'];
  expect(users).toContain('Shubham');
  expect(users.length).toBe(3);
});

