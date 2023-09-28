Feature: Get list posts 

    i want get list post with invalid parameter

    Scenario: Get list posts post with invalid parameter
       Given Get list posts with valid parameter 
        When Send get list posts
        Then Status code should be 404 Not Found
    
    
        