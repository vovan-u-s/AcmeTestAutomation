import { expect, Locator, Page } from '@playwright/test'
export class HomePage {

    titleMessage: Locator;
    constructor(page: Page) {
        this.titleMessage = page.locator('div[class="logo-label"]')

    }
    async expectedMessage(ourMessage: string): Promise<void> {
      await  expect(this.titleMessage).toHaveText(ourMessage)
    }
}