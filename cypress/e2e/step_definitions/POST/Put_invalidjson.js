import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';



Given('update posts with invalid parameter', () => {
  // You can define user data directly in this step
  

  // No need to use cy.wrap here
});

When('Send put update posts', () => {
  // Use your actual authorization token
  const authToken = '9a9e6ebd01e1ce42426fc985dca1f989d71ee645ef095d1f7a8438a6cead046d';

  // Send a POST request with the user data and authorization header
  cy.request({
    method: 'PUT',
    url: 'https://gorest.co.in/public/v2/users/7135',
    body: {
 
      
 
        "title": "boss",
         "body": "superman can be dead.",
         "cars": "BMW"
     
     
      
      }, // Use the userData from the higher scope
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }).as('user');
});

Then('Status code should be 400 Bad Request', () => {
  // Validate the response status code is 201
  cy.get('@user').its('status').should('equal', 400);
});
