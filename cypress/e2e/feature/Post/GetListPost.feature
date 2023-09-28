Feature: Get list posts 

    i want get list post with valid parameter

    Scenario: Get list posts post with valid parameter
       Given Get list posts with valid parameter 
        When Send get list posts
        Then Status code should be 200 OK
    
 

        