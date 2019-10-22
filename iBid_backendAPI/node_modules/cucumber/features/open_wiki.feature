Feature: Can i open wiki in browser?
  I want to open wiki in browser.

  Scenario: Open browser and check wiki
    Given I have opened a browser
    When I browser wiki articles on "wiki"
    Then I have "19" wiki link