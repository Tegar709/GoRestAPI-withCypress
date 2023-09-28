import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('Get list user with non-registered parameter id |%$', (id) => {
  cy.wrap({ id }).as('requestParams');
});

When('Get list user with non-registered parameter id |%$', () => {
  cy.get('@requestParams').then(({ id }) => {
    cy.request({
      method: 'GET',
      url: `https://gorest.co.in/public/v2/users/${id}`, 
      failOnStatusCode: false, 
    }).as('user');
  });
});

Then('Status code should be 404 Bad request', () => {
  cy.get('@user').its('status').should('equal', 404);
});

