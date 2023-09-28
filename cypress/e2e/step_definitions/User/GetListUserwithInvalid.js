import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('Get list user with invalid path', () => {
  // No specific action needed for this step
});

When('Send get list user with invalid path', () => {
  // Send the GET request to an invalid path in your API
  cy.request({
    method: 'GET',
    url: 'https://gorest.co.in/public/v2/usersza', // Update with an invalid API endpoint
    failOnStatusCode: false, // Allow non-200 status codes
  }).as('user');
});

Then('Status code should be 404 Not Found', () => {
  cy.get('@user').its('status').should('equal', 404);
});
