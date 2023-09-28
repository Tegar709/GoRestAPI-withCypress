import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';



Given('Post create comments with valid', () => {
  // You can define user data directly in this step
  

  // No need to use cy.wrap here
});

When('Send post create comments', () => {
  // Use your actual authorization token
  const authToken = '56e42927d4573596b861f6a1988bdb6cc26b2ca82f75abf1b366ab1bd89baed9';

  // Send a POST request with the user data and authorization header
  cy.request({
    method: 'POST',
    url: 'https://gorest.co.in/public/v2/users',
    body: {
      
        "post": "testposting",
        "post_id":  "thisispostide",
        "name": "males",
        "email": "ehgar@gmail.com",
        "body": "thisismymesageformyselfgohohohoho"
    
    
  }, // Use the userData from the higher scope
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }).as('user');
});

Then('Status code should be 422 Unprocessable Entity', () => {
  // Validate the response status code is 422
  cy.get('@user').its('status').should('equal', 422);
});
