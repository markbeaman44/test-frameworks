import { Then } from 'cypress-cucumber-preprocessor/steps'

Then('the user is directed to the successful main page', () => {
  cy.wait(1000)
  cy.get('.logout').then((results) => {
    expect(results).to.contain('Sign out')
  })
}),
Then('validates the contact information is correct {string}', (fixtureValue) => {
  cy.get('a[title="Addresses"] > span').click()

  cy.readFile('tests/cypress/fixtures/' + fixtureValue).then((value) => { 
    cy.get('#center_column li:nth-child(2) > span:nth-child(1)').then((results) => {
      expect(results).to.contain(value.first_name)
    })
    cy.get('#center_column li:nth-child(2) > span:nth-child(2)').then((results) => {
      expect(results).to.contain(value.last_name)
    })
  })
}),
Then('the user will be provided with missing information error message', () => {
  cy.wait(1000)
  cy.get('.alert-danger > p').then((results) => {
    expect(results).to.contain('errors')
  })
}),
Then('the user will be provided with error message containing {string}', (errorMessage) => {
  cy.wait(1000)
  cy.get('#create_account_error > ol > li').then((results) => {
    expect(results).to.contain(errorMessage)
  })
})
