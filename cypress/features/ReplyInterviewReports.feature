  Feature: Testing Reply Interview Reports

  @ReplyInterview
  Scenario: Scenario 2 – Run report
    Given User is on Reply interview demo page
    And User login
    And Navigate to "Reports & Settings"
    And Search for the report "Project Profitability"
    When Navigate to "Reports & Settings"
    And Find "Project Profitability" report on the right side Last Viewed section
    And User click Run Report 
    Then User Verify report results are returned 
