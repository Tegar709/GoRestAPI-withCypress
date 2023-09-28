Feature: Put Update posts post 

    i want update post with invalid parameter

    Scenario:  Update posts with  unexpected body json
       Given update posts with invalid parameter 
        When Send put update posts
        Then Status code should be 400 Bad Request
    
    
        