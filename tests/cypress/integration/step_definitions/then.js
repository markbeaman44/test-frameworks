import { Then } from 'cypress-cucumber-preprocessor/steps'

Then('the user validates the information is displayed: {string}, {string}, {string}, {string}',
    (name, location, description, image) => {
      cy.wait(1000)
      cy.get('.testinmony div:nth-of-type(1) .borderlayout #name').then((results) => {
        expect(results).to.have.text('Name: ' + name)
      })
      cy.get('.testinmony div:nth-of-type(1) .borderlayout #location').then((results) => {
        expect(results).to.have.text('Location: ' + location)
      })
      cy.get('.testinmony div:nth-of-type(1) .borderlayout #description').then((results) => {
        expect(results).to.have.text('Description: ' + description)
      })
      cy.get('.testinmony div:nth-of-type(1) div .profileimage').find("img").should('be.visible')
})
