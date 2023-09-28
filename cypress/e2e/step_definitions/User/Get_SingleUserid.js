import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const userId = 5213556; 

Given('Get single user with valid parameter id 5213556', () => {

  ;
});

When('Send get single user valid', () => {
  
  cy.request({
    method: 'GET',
    url: `https://gorest.co.in/public/v2/users/5213556`, 
  }).as('user');
});

Then('Status code should be 200 OK', () => {
  cy.get('@user').its('status').should('equal', 200);
});

Then('Response body id was id 5209052', () => {
  // Check that the response body id matches the stored user ID
  cy.get('@user').its('body.id').should('equal', userId);
});
