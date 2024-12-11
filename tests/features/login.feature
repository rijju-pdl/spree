Feature: login
    As an admin
    I want to login to the website's admin panel
    So that i can manage my products

 Scenario: login with valid credentials
     Given user "admin" has navigated to the login page
     When user "admin" logs in with email "admin@admin.com" and password "admin123456"
     Then user "admin" should we navigated to the admin panel dashboard

Scenario:Login with invalid credential
    Given the user has navigated to the login page
    When the user login with email "admin@admin.com" and password "hi12345"
    Then the "Invalid Crediantials" message should be pop in the login page.
    