import { expect, test } from '@playwright/test'
import { HomePage } from '../pages/homepageVOva'
import { LoginTestPage } from '../pages/loginPageVova'
test('homepage title test', async ({ page }) => {
    let newLoginTest = new LoginTestPage(page)
    await page.goto('https://demo.applitools.com/')
    await newLoginTest.loginTest('wqrqwer', 'fdgdfg')
    let newHomePage = new HomePage(page)
    await newHomePage.expectedMessage('ACME')
    let ourText=await newHomePage.totalBalance.innerText()
    await newHomePage.expectingBalance('Total Balance $350 %7 View Statement')
    console.log(ourText)
})