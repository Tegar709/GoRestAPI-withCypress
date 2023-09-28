import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';



Given('Delete user with valid id', () => {
  
  

  
});

When('delete user', () => {
  // Use your actual authorization token
  const authToken = '56e42927d4573596b861f6a1988bdb6cc26b2ca82f75abf1b366ab1bd89baed9';

  // Send a POST request with the user data and authorization header
  cy.request({
    failOnStatusCode: false,
    method: 'DELETE',
    url: 'https://gorest.co.in/public/v2/posts/5222675',
    
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }).as('user');
});

Then('Status code should be 204 No Content', () => {
  cy.get('@User').its('status').should('equal', 204);;
});
