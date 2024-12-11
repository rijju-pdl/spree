Feature:Login
    As an admin
    I want to login to the webiste's admin panel
    So that i can access to the home page

 Scenario: login with valid credentials
     Given  user "admin" has navigated to the login page
     When  user "admin" logs in with email "admin@admin.com" and password "admin123456"
     Then user "admin" should we navigated to the admin panel dashboard.

Scenario:login with invalid credentials
    Given user "admin" has navigated to the login page
    When the user "admin" login with email "admin@admin.com" and password "hi12345"
    Then the "Invalid Crediantials" message should be pop in the login page.
    