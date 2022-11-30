// here you can define custom Cypress commands,
// see more details at https://on.cypress.io/custom-commands

// log into the D-Installer as root
// TODO: optionally read the credentials from the environment
Cypress.Commands.add('login', (login = 'root', password = 'linux') => {
  // authenticate via API to make it faster
  cy.request({
    url: 'cockpit/login',
    auth: {
      // username: Cypress.env('credentials').username,
      // password: Cypress.env('credentials').password
      username: 'root',
      password: 'linux'
    }
  });
});

Cypress.Commands.add('main_page', () => {
  return cy.visit('/cockpit/@localhost/d-installer/index.html');
});
