import { expect, Locator, Page } from '@playwright/test'
export class HomePage {

    titleMessage: Locator;
    constructor(page: Page) {
        this.titleMessage = page.locator('div[class="logo-label"]')

    }
    expectedMessage(ourMessage: string): void {
        expect(this.titleMessage).toHaveText(ourMessage)
    }
}