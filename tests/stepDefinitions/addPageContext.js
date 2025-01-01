const {expect} = require('@playwright/test');
const { Given, When, Then } = require("@cucumber/cucumber");
const util = require('util');

const {LoginPage} = require("../pageObjects/LoginPage");
const {AddPage} = require("../pageObjects/AddPage");

const loginPage = new LoginPage();
const addPage = new AddPage();

Given('user {string} has logged in to the admin panel with email {string} and password {string}', async function (user, email, password) {
    await loginPage.navigateToAdminLoginPage();
    await expect(page).toHaveURL('http://localhost:3000/admin/login');
    await loginPage.login(email, password);
    await page.waitForURL("http://localhost:3000/", { timeout: 5000 });
  });

When('user {string} adds a new page with the following details:', async function (user, pageDetails) {
 await addPage.navigateToPagesPage();
 const details = pageDetails.hashes();
 await addPage.addNewPage(details[0].title, details[0].pageType, details[0].langauge, details[0].metaTitle, details[0].slug, details[0].metaDescription)
})

Then('the new page {string} should be listed in the pages list', async function (createdPage) {
  await page.click(addPage.sidebarPageSelector);
  const createdPageSelector =  util.format(addPage.createdPageSelector,createdPage);
  await expect(page.locator(createdPageSelector)).toHaveText(createdPage);
})