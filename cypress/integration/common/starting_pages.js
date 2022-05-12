import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('the user is on the login page', () => {
    cy.visit('/')
})