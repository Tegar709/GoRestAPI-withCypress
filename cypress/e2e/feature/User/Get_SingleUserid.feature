Feature: Get single user with valid parameter ID


    Get single list user with valid id

  Scenario: Valid Get Single User with ID 5213556
    Given Get single user with valid parameter id 5213556
    When Send get single user valid
    Then Status code should be 200 OK
    And Response body id was id 5209052