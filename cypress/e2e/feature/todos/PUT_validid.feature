Feature: Put update user with valid JSON and valid parameter id

    update user with valid json and path

    Scenario: Put update user with valid ID
       Given PUT Edit user with valid id
        When PUT edit user
        Then Status code should be 200 OK
