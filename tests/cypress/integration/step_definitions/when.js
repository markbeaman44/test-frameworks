import { When } from 'cypress-cucumber-preprocessor/steps'

import * as testimony from '../../pages/testimonyPage'

When('the user clicks on testimony page', () => {
  cy.menu('Testimony')
})

When('the user clicks on testimony page via mobile menu', () => {
  cy.mobileMenu('Testimony')
})

When('completes the testimony form: {string}, {string}, {string}, {string} with token',
    (name, location, description, image) => {
      testimony.clickToExpandTestimonyForm()
      testimony.fillTestimonyForm(name, location, description, image)
      testimony.submitTestimonyForm()
})
