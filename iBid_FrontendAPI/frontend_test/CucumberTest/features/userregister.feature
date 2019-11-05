Feature: <Feature Name>
<feature description>

  Scenario: <User Register
    Given Browse to web site  "E:\Agile project final\iBid\iBid_FrontendAPI/index.html"
    When user click to link register
    And user input username  "username"
    And user input password "password"
    Then click to reigister button
    And a notification  is displayed to user "Registration Sucessfully"