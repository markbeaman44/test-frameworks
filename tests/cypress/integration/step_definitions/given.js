import { Given } from "cypress-cucumber-preprocessor/steps"

import * as signIn from '../../pages/signInPage'

Given('the user navigates to the signup page', () => {
  cy.visit('/')
  cy.menu('Sign in')
})

Given('clicks on create an account', () => {
  const emailAddress = Math.random().toString(36).substring(3)
  signIn.createNewAccount(`${emailAddress}@gmail.com`)
})

Given('enters email address {string}', (emailAddress) => {
  cy.get('#email_create').type(emailAddress)
})