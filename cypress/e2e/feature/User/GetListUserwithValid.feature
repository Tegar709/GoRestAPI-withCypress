Feature: Get list user with valid path

    Get list user with valid path

    Scenario: Valid path
       Given Get list user with valid path
        When Send get list user with valid path
        Then Status code should be 200 OK

        