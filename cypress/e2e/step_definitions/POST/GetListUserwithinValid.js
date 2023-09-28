import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('Get list posts with valid parameter', () => {

});

When('Send get list posts', () => {
  cy.request('GET', 'https://gorest.co.in/public/v2/posts?id=7135') 
    .as('user');
});

Then('Status code should be 200 OK', () => {
  cy.get('@user').its('status').should('equal', 200);
});