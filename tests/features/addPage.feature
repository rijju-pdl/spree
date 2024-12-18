Feature: Login
    As an admin
    I want to add new page to the website
    So that I can manage the website's products or contents

    Background:
        Given the user "admin" has logged in to the admin panel with email "admin@admin.com" and password "admin123456"
 
        
    Scenario: add new page
        When the user "admin" adds a new page with the following details:
             | title | pageType     | language |  metaTitle         |  slug    |  metaDescription                     |
             | abc   | Feature Page | English  | New Page Meta Title | new-page | This is a new page for Feature page |
        Then the new page should be listed in the pages list


