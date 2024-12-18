const {expect} = require('@playwright/test');
const { Given, When, Then } = require("@cucumber/cucumber");
const {LoginPage} = require("../pageObjects/LoginPage");
const {AddPage} = require("../pageObjects/AddPage");
const loginPage = new LoginPage();
const addPage = new AddPage();

Given('the user {string} has logged in to the admin panel with email {string} and password {string}', async function (user, email, password) {
    await loginPage.navigateToAdminLoginPage();
    await expect(page).toHaveURL('http://localhost:3000/admin/login');
    await loginPage.login(email, password);
    await page.waitForURL("http://localhost:3000/", { timeout: 5000 });
  });

When('the user {string} adds a new page with the following details:', async function (string, dataTable) {
 await addPage.navigateToNewPage();
//  #const pageDetails = dataTable.hashes();
})

Then('the new page should be listed in the pages list', function () {
console.log( 'pending')
})
