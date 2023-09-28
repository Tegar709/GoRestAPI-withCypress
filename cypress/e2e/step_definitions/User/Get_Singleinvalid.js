import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('Get list user with non-registered parameter id {int}', (id) => {
  cy.wrap({ id }).as('requestParams');
});

When('Send get single user invalid', () => {
  
  cy.get('@requestParams').then(({ id }) => {
    cy.request({
      method: 'GET',
      url: `https://gorest.co.in/public/v2/users/${id}`, 
      failOnStatusCode: false, 
    }).as('user');
  });
});

Then('Status code should be 404 Not Found', () => {
  cy.get('@user').its('status').should('equal', 404);
});

Then('Response body should be display error {string}', (errorMessage) => {
  cy.get('@user').its('body.message').should('equal', errorMessage);
});