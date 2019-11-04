Feature: <Feature Name>
<feature description>

  Scenario: <User Login>
    Given Browse to web site  "file:///E:/Agile%20project%20final/iBid/iBid_FrontendAPI/index.html"
    When user click to link login
    And user input username "username"
    And user input password "password"
    Then click to login button
    And user get an notification "Login Sucessfull"