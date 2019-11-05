Feature: <Update user profile>
<User should be able to update his/her profile details after login to system>

  Scenario: <User details update>
    Given Browse to web site  "E:\Agile project final\iBid\iBid_FrontendAPI/index.html"
    When user click to link login
    And user input username "username"
    And user input password "password"
    And click to login button
    And redirected to  site  "E:\Agile project final\iBid\iBid_FrontendAPI/index.html"
    And User Browser to webpage link update profile
    When user input username "username"
    And User click to Edit profile button
    Then User must get notification "Sucessful"