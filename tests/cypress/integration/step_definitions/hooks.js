import { After } from "cypress-cucumber-preprocessor/steps"
// Cucumber before/after Section

After({ tags: "@success" }, () => {
  cy.menu('Sign out')
})
