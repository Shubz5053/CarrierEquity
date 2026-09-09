import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base.page';

export class LoginPage extends BasePage {

  private username: Locator;
  private password: Locator;
  private loginButton: Locator;

  constructor(page: Page) {
    super(page);

    this.username = page.locator("input[id='email']");
    this.password = page.locator("input[id='password']");
    this.loginButton = page.locator('button[type="submit"]');
  }

  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }
}