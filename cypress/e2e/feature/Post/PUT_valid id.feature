Feature: Put Update posts post 

    i want update post with valid parameter

    Scenario:  Update posts with valid parameter id
       Given update posts with valid parameter 
        When Send put update posts
        Then Status code should be 200 OK
    
    
        