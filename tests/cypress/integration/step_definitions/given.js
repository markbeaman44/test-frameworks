import { Given } from "cypress-cucumber-preprocessor/steps"

Given('the user logs into admin page', () => {
  cy.visit('/')
  cy.menu('Admin')
  cy.login('Mitchalvarezbeaman@gmail.com','Elie1234')
})

Given('gets the token', () => {
  cy.wait(2000)

  cy.get('#copiedToken').then(($info) => {
    cy.writeFile('tests/cypress/fixtures/token.json', {
      id: 1,
      token: $info.val()
    })
  })
})

Given('the user logs into admin page via mobile menu', () => {
  cy.visit('/')
  cy.mobileMenu('Admin')
  cy.login('Mitchalvarezbeaman@gmail.com','Elie1234')
})