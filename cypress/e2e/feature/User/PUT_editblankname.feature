Feature: Put update user with invalid JSON add empty name to request body and valid parameter id 

    update user with invalid json and valid path

    Scenario: PUT Edit user with invalid Json
       Given PUT Edit user with blank name
        When PUT edit user
        Then Status code should be 422 Unprocessable Entity
