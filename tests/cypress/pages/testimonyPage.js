export default {
  clickToExpandTestimonyForm () {
    cy.get('#testimonyButton').click()
  },
  fillTestimonyForm (name, location, description, image) {
    cy.get('.form-group input:nth-child(2)').type(name)
    cy.get('.form-group input:nth-child(4)').type(location)
    cy.get('.form-group textarea:nth-child(6)').type(description)
    if (image !== 'no-image.png') {
      cy.uploadFile('#file', image)
    }
    cy.readFile('tests/cypress/fixtures/token.json').then((json) => {
      cy.get('label:nth-child(8) > input').type(json.token)
    })
  },
  submitTestimonyForm () {
    cy.get('input[type="submit"]').click()
    cy.wait(2000)
  }
}