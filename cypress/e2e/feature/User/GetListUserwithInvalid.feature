Feature: Get list user with invalid path

    Get list user with valid path

    Scenario: Invalid Path
       Given Get list user with invalid path
        When Send get list user with invalid path
        Then Status code should be 404 Not Found

        