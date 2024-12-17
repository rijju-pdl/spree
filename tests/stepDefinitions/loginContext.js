const {expect} = require('@playwright/test');
const { Given, When, Then } = require("@cucumber/cucumber");
const {LoginPage} = require("../pageObjects/LoginPage")
const loginPage = new LoginPage();

Given('the user {string} has navigated to the login page',  async function (user) {
  await loginPage.navigateToAdminLoginPage();
  await expect(page).toHaveURL('http://localhost:3000/admin/login');
});

When('user {string} logs in with email {string} and password {string}', async function (user, email, password) {
  await loginPage.login(email, password);
});

Then('user {string} should be navigated to the admin panel dashboard', async function (user) {
  await page.waitForURL("http://localhost:3000/", { timeout: 5000 });
});
 
When('user {string} tries to log in with following details:', async function (user, dataTable) {
  const credentials = dataTable.hashes();
  for(const credential of credentials)
  {
    await loginPage.login(credential.email,credential.password);
  }
});

Then('error message {string} should be shown', async function (errorMessage) {
  const errMessage = await page.locator(loginPage.errorMessageSelector).textContent();
  await expect(errMessage).toEqual(errorMessage);
});

