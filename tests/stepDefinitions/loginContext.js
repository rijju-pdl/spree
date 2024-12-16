const {expect} = require('@playwright/test');
const { Given, When, Then } = require("@cucumber/cucumber");

const loginBtnLocator  = "(//input[@name='commit'])[1]"
const emailFieldLocator = "#spree_user_email"
const passwordFieldLocator = "#spree_user_password"
const errorLocator = ".alert-danger"

Given('the user {string} has navigated to the login page',  async function (user) {
  await page.goto("http://localhost:3000/admin/login");
  await expect(page).toHaveURL('http://localhost:3000/admin/login');
});

When('user {string} logs in with email {string} and password {string}', async function (user, email, password) {
  await page.fill(emailFieldLocator, email);
  await page.fill(passwordFieldLocator, password);
  await page.click(loginBtnLocator);
});

Then('user {string} should be navigated to the admin panel dashboard', async function (user) {
  await page.waitForURL("http://localhost:3000/", { timeout: 5000 });
});
 
When('user {string} tries to log in with following details:', async function (user, dataTable) {
 const credentials = dataTable.hashes();
 for(const credential of credentials)
 {
  {
    await page.locator(emailFieldLocator).fill(credential.email);
    await page.locator(passwordFieldLocator).fill(credential.password);
    await page.locator(loginBtnLocator).click();
    }
 }
});

Then('error message {string} should be shown', async function (errorMessage) {
  await expect(page.locator(errorLocator)).toHaveText(errorMessage);
});
