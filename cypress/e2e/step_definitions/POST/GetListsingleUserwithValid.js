import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('Get list posts with invalid parameter', () => {

});

When('Send get list posts', () => {
  cy.request('GET', 'https://gorest.co.in/public/v2/posts/7') 
    .as('user');
});

Then('Status code should be 404 Not Found', () => {
  cy.get('@user').its('status').should('equal', 404);
});