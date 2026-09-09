import { Page, Locator } from '@playwright/test';

export class ProgramPage {
  readonly page: Page;
  readonly programPage: Locator;
  readonly AddProgramButton: Locator;
  readonly programNameInput: Locator;
  readonly programDescriptionInput: Locator;
  readonly startDateInput: Locator;
  readonly endDateInput: Locator;
  readonly saveProgramButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.programPage = page.locator('a[href="/employer/programs"]');
    this.AddProgramButton = page.locator('//button[text()="+ Add New"]');
    this.programNameInput = page.locator("input[id='proAddEditName']");
    this.programDescriptionInput = page.locator("textarea[id='proDescription']");
    this.startDateInput = page.locator("input[placeholder='Start date']");
    this.endDateInput = page.locator("input[placeholder='End date']");
    this.saveProgramButton = page.locator("button[id='proSaveButton']");
  }

  async clickSaveProgram() {
    await this.saveProgramButton.click();
  }

  async startDateInputField() {
    await this.startDateInput.click({ force: true });
  }

  async endDateInputField() {
    await this.endDateInput.click({ force: true });
  }
  async clickProgramsMenu() {
    await this.programPage.click();
  }

  async clickAddProgram() {
    await this.AddProgramButton.click();
  }

  async enterProgramName(programName: string) {
    await this.programNameInput.fill(programName);
  }

  async enterProgramDescription(programDescription: string) {
    await this.programDescriptionInput.fill(programDescription);
  }

}