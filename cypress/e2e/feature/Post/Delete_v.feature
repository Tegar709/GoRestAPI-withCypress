Feature: Delete posts 

    Delete user with invalid json and valid path and

    Scenario: Delete posts with valid parameter id
       Given Delete posts with valid id
        When delete posts
        Then Status code should be 204 No Content
