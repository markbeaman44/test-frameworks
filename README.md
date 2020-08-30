# Test-Frameworks

## Project setup - To install cypress / Cucumber
```
npm install
Note: to install node.js, to use npm: https://nodejs.org/en/download/ 
```

### Run your cypress tests via GUI
```
npm run cypress:open
```

### Run your cypress tests via headless
```
npm run cypress:run
```

## Issues
```
Major Issue:
```
![alt text](https://ibb.co/syvjx2g) or url: https://ibb.co/syvjx2g
```
Had issues with cross origin error:
  It seems to be due to php web app with it adding #account-creation at end of url - confusing Cypress
  full url: http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation
  
  cypress recommends:
  https://docs.cypress.io/guides/references/error-messages.html#Cypress-detected-a-cross-origin-error-happened-on-page-load
  
  Found issue here:
  https://stackoverflow.com/questions/61977401/cypress-changes-the-url-and-it-breaks-the-app
  https://github.com/cypress-io/cypress/issues/7402

  solution:
  cypress version needs updating to 4.6.0
  Add below to cypress.json
  {
    "experimentalSourceRewriting": true
  }
```

```
Trival Issue:
```
![alt text](https://ibb.co/6v0f95m) or url: https://ibb.co/6v0f95m
```
I believe this to be a trival bug, as the error messages is getting the info from elements id
instead of the text e.g Address line 1 instead of address1

Its not enough to fail a automation test, as the error occurs and prevents user,
but worth noting to product owner or designers for rewording as customer facing application.
```
