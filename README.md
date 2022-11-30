
# Experimental End-to-End Tests for the D-Installer

This is a testing repository with integrations tests for the
[D-Installer](https://github.com/yast/d-installer) project.

![Cypress running D-Installer tests](doc/d-installer-cypress.png)

## Cypress

These tests use the [Cypress](https://www.cypress.io/) testing framework.

## Installation

Checkout this repository and run this command in it:

```shell
npm install
```

## Editing the Tests

- `cypress.config.js` - 
- `cypress/support/e2e.js`
- `cypress/support/commands.js`
- `cypress/e2e/\*.cy.js`

## Running the Tests

### Setting the Target

CYPRESS_BASE_URL=https://192.168.1.12:9090

### Interactive Session

```
npx cypress open
```

### Command Line Session

```
npx cypress run
```

```
npx cypress run --browser chrome
```

```
npx cypress run --browser chrome --spec cypress/e2e/login.cy.js
```

##

## Cypress Documentation

## Links

- https://www.youtube.com/watch?v=5XQOK0v_YRE
- https://docs.cypress.io/guides/references/best-practices
- https://github.com/cypress-io/cypress-realworld-app
- 