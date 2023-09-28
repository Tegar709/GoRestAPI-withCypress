Feature: Get list comment

    Get list comment with valid path

    Scenario: Get list comment Valid path
       Given Get list comment with valid path
        When Send get list comment with valid path
        Then Status code should be 200 OK

        