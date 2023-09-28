Feature: Create User API with blank name

    create user with invalid json with blank gender

    Scenario: Post create user with invalid JSON
       Given Get list user with valid path
        When Send post create user blank gender
        Then Status code should be 422 Unprocessable Entity
        
