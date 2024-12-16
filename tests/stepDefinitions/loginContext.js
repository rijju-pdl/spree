const { Given, When, Then } = require("@cucumber/cucumber");

Given('the user {string} has navigated to the login page', function (string) {
  // Write code here that turns the phrase above into concrete actions
  console.log("solved1");
});

When('user {string} logs in with email {string} and password {string}', function (user, email, password) {
  // Write code here that turns the phrase above into concrete actions
  console.log(user, email, password)
});

Then('user {string} should be navigated to the admin panel dashboard', function (string) {
  // Write code here that turns the phrase above into concrete actions
  console.log("solved2")
});

When('user {string} tries to log in with following details:', function (string, dataTable) {
  // Write code here that turns the phrase above into concrete actions
  console.log("solved")
});

Then('error message {string} should be shown', function (string) {
  // Write code here that turns the phrase above into concrete actions
  console.log("solved2")
});
