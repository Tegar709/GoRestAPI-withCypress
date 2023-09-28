import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('Get list comment with valid path', () => {

});

When(' Send get list comment with valid path', () => {
  cy.request('GET', 'https://gorest.co.in/public/v2/comments') 
    .as('user');
});

Then('Status code should be 200 OK', () => {
  cy.get('@user').its('status').should('equal', 200);
});