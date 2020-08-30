export default {
  createNewAccount(emailAddress) {
    cy.get('#email_create').type(emailAddress)
    cy.get('#SubmitCreate').click()
  },
  fillPersonalInfo (fixtureValues) {
    // Using cypress fixtures for dummy data
    cy.readFile('tests/cypress/fixtures/' + fixtureValues).then((value) => {

      if (value.title === "Mr") {
        cy.get('[type="radio"]').check('1')
      } else if (value.title === "Mrs") {
        cy.get('[type="radio"]').check('2')
      }
      if (value.first_name !== "") { 
        cy.get('#customer_firstname').type(value.first_name)
      }
      if (value.last_name !== "") { 
        cy.get('#customer_lastname').type(value.last_name)
      }
      if (value.password !== "") { 
        cy.get('#passwd').type(value.password)
      }
      if (value.date_birth !== "") { 
        const birthDate = value.date_birth.split('/')
        cy.get('#days').select(birthDate[0]) 
        cy.get('#months').select(birthDate[1]) 
        cy.get('#years').select(birthDate[2])
      }
      if (value.company !== "") {
        cy.get('#company').type(value.company)
      }
      if (value.address !== "") {
        cy.get('#address1').type(value.address)
      }
      if (value.address_2 !== "") {
        cy.get('#address2').type(value.address_2)
      }
      if (value.city !== "") {
        cy.get('#city').type(value.city)
      }
      if (value.country !== "") {
        cy.get('#id_country').select(value.country)
      }
      if (value.state !== "") {
        cy.get('#id_state').select(value.state)
      }
      if (value.zip !== "") {
        cy.get('#postcode').type(value.zip)
      }
      if (value.additional_info !== "") {
        cy.get('#other').type(value.additional_info)
      }
      if (value.telephone !== "") {
        cy.get('#phone').type(value.telephone)
      }
      if (value.mobile !== "") {
        cy.get('#phone_mobile').type(value.mobile)
      }
    })
  },
  submitForm  () {
    cy.get('#submitAccount').click()
    cy.wait(1000)
  }
}