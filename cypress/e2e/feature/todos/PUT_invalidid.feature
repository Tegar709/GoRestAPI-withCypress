Feature: Put update user with invalid parameter id

    update user with valid json and path

    Scenario: PUT Edit user with invalid id
       Given PUT Edit user with invalid id
        When PUT edit user
        Then Status code should be 404 Not Found
