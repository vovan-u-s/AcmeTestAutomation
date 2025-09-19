import { expect, test } from '@playwright/test'
import { HomePage } from '../pages/homepageVOva'
import { LoginTestPage } from '../pages/loginPageVova'
test('homepage title test', async ({ page }) => {
    let newLoginTest = new LoginTestPage(page)
    await page.goto('https://demo.applitools.com/')
    await newLoginTest.loginTest('wqrqwer', 'fdgdfg')
    let newHomePage = new HomePage(page)
    newHomePage.expectedMessage('Your nearest branch closes in: 30m 5s')
})