import { expect, Locator, Page } from '@playwright/test'
export class HomePage {

    titleMessage: Locator;
    constructor(page: Page) {
        this.titleMessage = page.locator('h6[id="time"]')

    }
    expectedMessage(ourMessage: string): void {
        expect(this.titleMessage).toHaveText(ourMessage)
    }
}