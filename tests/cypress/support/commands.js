
Cypress.Commands.add("menu", (pageValue) => {
    cy.contains(pageValue).click()
})
