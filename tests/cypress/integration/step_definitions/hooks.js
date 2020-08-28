import { Before, After } from "cypress-cucumber-preprocessor/steps"
// Cucumber before/after Section

Before({ tags: "@mobile" }, () => {
  cy.viewport('samsung-s10')
})

Before({ tags: "@desktop" }, () => {
  cy.viewport(1280, 880)
})

After({ tags: "@mobile" }, () => {
  cy.mobileMenu('Admin')
  cy.wait(1500)
  // Deleted all images and testimonys
  cy.get('.button-border').click({ multiple: true, timeout: 6000 })
  cy.logout()
  cy.wait(1500)
})

After({ tags: "@desktop" }, () => {
  cy.menu('Admin')
  cy.wait(1500)
  // Deleted all images and testimonys
  cy.get('.button-border').click({ multiple: true, timeout: 6000 })
  cy.logout()
  cy.wait(1500)
})