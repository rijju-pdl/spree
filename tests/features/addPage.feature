Feature: login
    As an admin
    I want to add new page to the website
    So that I can manage the website's contents

        
    Scenario: add new page
        Given user "admin" has logged in to the admin panel with email "admin@admin.com" and password "admin123456"
        When  user "admin" adds a new page with the following details:
             | title | pageType     | language |  metaTitle          |  slug    |  metaDescription                    |
             | abc   | Feature Page | English  | New Page Meta Title | new-page | This is a new page for Feature page |
        Then the new page "abc" should be listed in the pages list


