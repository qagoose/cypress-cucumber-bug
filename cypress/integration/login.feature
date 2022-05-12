Feature: User login
    As a user I need to be able to log in
    So that I can access my data

    Scenario: User successfully logs in
        Given the user is on the login page
        When the user logs in with username "standard_user" and password "secret_sauce"
        Then the user is taken to the dashboard page

    Scenario: Unknown user details
        Given the user is on the login page
        When the user logs in with username "unknown_user" and password "secret_sauce"
        Then the user is shown the error message "Epic sadface: Username and password do not match any user in this service"
        And the user is still on the login page

