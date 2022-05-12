# Demonstration of Cypress + cypress-cucumber-preprocessor Issue on Browserstack

When this test suite is run using the `browserstack-cypress run` command the tests will fail due to "Step implementation missing for: the user is on the login page".

If the tests are run via `npx cypress run` they will pass successfully.

You will need to set auth details in `browserstack.json` to use browserstack-cypress.