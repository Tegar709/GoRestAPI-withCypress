Feature: Create User API

    create user with valid json and path

    Scenario: Post create user with valid JSON
       Given Get list user with valid path
        When Send post create user
        Then Status code should be 201 Created
