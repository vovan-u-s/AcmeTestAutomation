import { expect, Locator, Page } from '@playwright/test'
export class HomePage {

    titleMessage: Locator;
    totalBalance: Locator;
    constructor(page: Page) {
        this.titleMessage = page.locator('div[class="logo-label"]')
        this.totalBalance = page.locator('div[class="balance hidden-mobile"]')
    }
    async expectedMessage(ourMessage: string): Promise<void> {
        await expect(this.titleMessage).toHaveText(ourMessage)
    }
    async expectingBalance(ourBAlance:string):Promise<void>{
        await expect(this.totalBalance).toHaveText(ourBAlance)
    }
}


