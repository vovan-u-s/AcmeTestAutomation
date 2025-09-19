import { expect, Locator, Page } from '@playwright/test'
export class LoginTestPage {
    userName: Locator;
    password: Locator;
    signInButton: Locator;
    constructor(page: Page) {
        this.userName = page.locator('input[id="username"]')
        this.password = page.locator('input[id="password"]')
        this.signInButton = page.locator('a[id="log-in"]')

    }
    async loginTest(userName: string, password: string): Promise<void> {
        await this.userName.fill(userName)
        await this.password.fill(password)
        await this.signInButton.click()
    }

}