import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

When('the user logs in with username {string} and password {string}', (username, password) => {
    cy.get("#user-name").type(username)
    cy.get("#password").type(password)
    cy.get("#login-button").click()
})

Then('the user is shown the error message {string}', (message) => {
    cy.contains(message)
})

Then('the user is still on the login page', () => {
    cy.url().should('eq', cy.config().baseUrl)
})