Feature: Get single user with non-registered parameter ID

  Scenario: Get Single User with Non-Registered ID
    Given Get list user with non-registered parameter id 1
    When Send get single user invalid
    Then Status code should be 404 Not Found
    Then Response body should be display error "Resource not found"