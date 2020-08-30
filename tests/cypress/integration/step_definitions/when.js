import { When } from 'cypress-cucumber-preprocessor/steps'

import * as signIn from '../../pages/signInPage'

When('the user fills in the registration form {string}', (fixtureValue) => {
  cy.wait(2000)
  signIn.fillPersonalInfo(fixtureValue)
})

When('clicks on the register button', () => {
  signIn.submitForm()
})

When('the user clicks on create an account', () => {
  cy.get('#SubmitCreate').click()
})
