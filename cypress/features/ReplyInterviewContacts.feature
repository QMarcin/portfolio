Feature: Testing Reply Interview Contacts

  @ReplyInterview
  Scenario: Scenario 1 - Create contact
    Given User is on Reply interview demo page
    And User login
    And Navigate to "Sales & Marketing" -> "Contacts"
    When Create new contact
    And Open created contact
    And Fill out main contact fields
    Then Verify data containing changed fields
