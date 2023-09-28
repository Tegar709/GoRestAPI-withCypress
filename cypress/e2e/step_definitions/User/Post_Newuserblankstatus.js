import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('Post create user with invalid JSON', () => {
  // You can define user data directly in this step

  // No need to use cy.wrap here
});

When('Send post create user blank status', () => {
  // Use your actual authorization token
  const authToken = '56e42927d4573596b861f6a1988bdb6cc26b2ca82f75abf1b366ab1bd89baed9';

  // Send a POST request with the user data and authorization header
  cy.request({
    failOnStatusCode: false,
    method: 'POST',
    url: 'https://gorest.co.in/public/v2/users',
    body: {
      name: 'aarraaaa ',
      gender: 'male',
      email: 'mmm@gmail.com',
      status: '',
    },
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    // Allow non-200 status codes
  }).as('user');
});

Then('Status code should be 422 Unprocessable Entity', () => {
  // Validate the response status code is 422
  cy.get('@user').its('status').should('equal', 422);
});

