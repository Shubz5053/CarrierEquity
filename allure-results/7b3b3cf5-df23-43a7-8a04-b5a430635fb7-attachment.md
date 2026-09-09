# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth.setup.ts >> login with valid user
- Location: src\tests\auth.setup.ts:13:5

# Error details

```
Test timeout of 6000ms exceeded.
```

```
Error: page.waitForURL: Test timeout of 6000ms exceeded.
=========================== logs ===========================
waiting for navigation to "/employer/jobs-page" until "load"
============================================================
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - main [ref=e5]:
    - generic [ref=e12]:
      - link "Login as employer" [ref=e14] [cursor=pointer]:
        - /url: /
        - img "Login as employer" [ref=e15]
      - separator [ref=e16]
      - generic [ref=e17]:
        - button "Google sign-in Login with Google" [ref=e19] [cursor=pointer]:
          - img "Google sign-in" [ref=e20]
          - text: Login with Google
        - button "Google sign-in Login with LinkedIn" [ref=e22] [cursor=pointer]:
          - img "Google sign-in" [ref=e23]
          - text: Login with LinkedIn
      - generic [ref=e25]: or login with email
      - generic [ref=e26]:
        - generic [ref=e27]:
          - generic [ref=e28]: Email Address*
          - textbox "Enter Email" [ref=e29]: sujatamuley001@yopmail.com
        - generic [ref=e30]:
          - generic [ref=e31]: Password*
          - link "Forgot Password?" [ref=e33] [cursor=pointer]:
            - /url: /forgotpassword
          - generic [ref=e34]:
            - textbox "Enter Password" [ref=e35]: Admin@123
            - img "eye-invisible" [ref=e37] [cursor=pointer]:
              - img [ref=e38]
        - button "Login Now" [active] [ref=e42] [cursor=pointer]
        - link "New User? Create an Account" [ref=e44] [cursor=pointer]:
          - /url: /sign-up-new
        - separator [ref=e45]
        - generic [ref=e46]:
          - text: By login in to your account, you agree to Career Equity's
          - link "Terms of Service" [ref=e47] [cursor=pointer]:
            - /url: /terms-conditions
          - text: and
          - link "Privacy Policy" [ref=e48] [cursor=pointer]:
            - /url: /privacy-policy
          - text: .
  - generic [ref=e58]:
    - paragraph [ref=e59]: © 2023 by The CareerEquity. All rights reserved
    - list [ref=e60]:
      - listitem [ref=e61]:
        - link "Contact Us" [ref=e62] [cursor=pointer]:
          - /url: /Contactus
      - listitem [ref=e63]:
        - link "Cookie policy" [ref=e64] [cursor=pointer]:
          - /url: /cookies-policy
      - listitem [ref=e65]:
        - link "Disclaimer" [ref=e66] [cursor=pointer]:
          - /url: /disclaimer
      - listitem [ref=e67]:
        - link "Privacy Policy" [ref=e68] [cursor=pointer]:
          - /url: /privacy-policy
      - listitem [ref=e69]:
        - link "Terms of Services" [ref=e70] [cursor=pointer]:
          - /url: /terms-conditions
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { LoginPage } from '../pages/login.page';
  3  | import { BasePage } from '../pages/base.page';
  4  | import user from '../testdata/user.json';
  5  | import fs from 'fs';
  6  | 
  7  | const authFile = 'auth/user.json';
  8  | 
  9  | if (!fs.existsSync('auth')) {
  10 |   fs.mkdirSync('auth');
  11 | }
  12 | 
  13 | test('login with valid user', async ({ page }) => {
  14 |   const loginPage = new LoginPage(page);
  15 |   const basePage = new BasePage(page);
  16 |   await basePage.navigate("/sign-in");
  17 |   await loginPage.login(user.username, user.password);
> 18 |   await page.waitForURL('/employer/jobs-page');
     |              ^ Error: page.waitForURL: Test timeout of 6000ms exceeded.
  19 |   await page.context().storageState({ path: authFile });
  20 | });
  21 | 
```