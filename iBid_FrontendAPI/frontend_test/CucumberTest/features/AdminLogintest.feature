Feature: <Admin Login>
<When user enter username and password as "admin". Then
user is redirected to Admin dashboard.>

  Scenario: <Admin Login Test>
    Given Browse the website "E:\Agile project final\iBid\iBid_FrontendAPI/index.html"
    When login link is clicked
    And user enter username  "admin"
    And user enter password "admin"
    And clicked to Login  button
    Then User is redirected to admin dashboard "file:///E:/Agile%20project%20final/iBid/iBid_FrontendAPI/admin_dashboard.html"