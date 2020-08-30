const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())

  return Object.assign({}, config, {
    fixturesFolder: 'tests/cypress/fixtures',
    integrationFolder: 'tests/cypress/integration',
    screenshotsFolder: 'tests/cypress/screenshots',
    videosFolder: 'tests/cypress/videos',
    supportFile: 'tests/cypress/support/index.js'
  })
}
