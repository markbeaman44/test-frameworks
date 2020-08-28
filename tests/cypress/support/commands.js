// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
import 'cypress-file-upload'
// -- This is a parent command --
Cypress.Commands.add("login", (email, password) => {
    cy.get('#email').type(email)
    cy.get('#myInput').type(password)
    cy.get('input[value="Submit"]').click()
}),
Cypress.Commands.add("logout", () => {
    cy.get('input[value="Logout"]').click()
}),
Cypress.Commands.add("menu", (pageValue) => {
    cy.contains(pageValue).click()
}),
Cypress.Commands.add("mobileMenu", (pageValue) => {
    cy.get('.bm-burger-button').click()
    cy.contains(pageValue).click()
}),
Cypress.Commands.add("uploadFile", (cssSelector, fixtureFile) => {
    cy.get(cssSelector).attachFile(fixtureFile)
    // image must be in cypress/fixtures/
})
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
