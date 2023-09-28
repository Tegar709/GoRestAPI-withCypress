Feature: Get list comment

    Get list comment with invalid path

    Scenario: Get list comment with Invalid Path
       Given Get list comment with invalid path
        When Send get list comment with invalid path
        Then Status code should be 404 Not Found

        