import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`I see {string} in the title`, (title) => {
    cy.title().should('include', title)
})

Then('the user is taken to the dashboard page', () => {
    cy.url().should('include', '/inventory.html')
    cy.contains("Products")
})