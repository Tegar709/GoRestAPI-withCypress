Feature: Delete unregistered id  

    Delete user with unregistered and valid path and

    Scenario: Delete user with unregistered ID
       Given Delete user with unregistered
        When delete user
        Then Status code should be 404 Not Found
