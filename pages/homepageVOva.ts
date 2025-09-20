import { expect, Locator, Page } from '@playwright/test'
export class HomePage {

    titleMessage: Locator;
    totalTitle: Locator;
    constructor(page: Page) {
        this.titleMessage = page.locator('div[class="logo-label"]')
        this.totalTitle = page.locator('div[class="element-wrapper compact pt-4"] h6[class="element-header"]')
    }
    async expectedMessage(ourMessage: string): Promise<void> {
        await expect(this.titleMessage).toHaveText(ourMessage)
    }
    async expectingBalance(ourBAlance:string):Promise<void>{
        await expect(this.totalTitle).toHaveText(ourBAlance)
    }
}


