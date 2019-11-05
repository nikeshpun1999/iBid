Feature: <User Login Test>
<When user try to login to the system with registered username and password
then he must be able to view auction details>

  Scenario: <User Login>
    Given Browse to web site  "E:\Agile project final\iBid\iBid_FrontendAPI/index.html"
    When user click to link login
    And user input username  "username"
    And user input password "password"
    Then click to login button
    And user get an notification "Login Sucessfull"