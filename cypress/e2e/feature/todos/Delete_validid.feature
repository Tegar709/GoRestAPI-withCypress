Feature: Delete valid id  

    Delete user with invalid json and valid path and

    Scenario: Delete user with valid ID
       Given Delete user with valid id
        When delete user
        Then Status code should be 204 No Content
