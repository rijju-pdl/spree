Feature: Login
    As an admin
    I want to login to the webiste's admin panel
    So that I can manage my products

    Background:
        Given the user "admin" has navigated to the login page

        
    Scenario: login with valid credentials
        When  user "admin" logs in with email "admin@admin.com" and password "admin123456"
        Then user "admin" should be navigated to the admin panel dashboard


    Scenario Outline: login with invalid credentials
        When user "admin" tries to log in with following details:
           | email   | password   |
           | <email> | <password> |
        Then  error message "<errorMessage>" should be shown
        Examples:
           | email           | password    | errorMessage               |
           | admin@admin.com | abc@123     | Invalid email or password. |
           | admin@admin.com |             | Invalid email or password. |
           | abc@gmail.com   | abc@123     | Invalid email or password. |
           |                 | abc@13      | Invalid email or password. |
           |                 |             | Invalid email or password. |
           |admin            | admin123456 | Invalid email or password. |