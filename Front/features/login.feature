Feature: Login Functionality
  As a user
  I want to be able to login to the website
  So that I can access the restricted content

  Scenario: Successful login
    Given I am on the login page
    When I enter valid credentials
    And I click on the Login button
    Then I should be logged in successfully

  Scenario: Invalid login credentials
    Given I am on the login page
    When I enter invalid credentials
    And I click on the Login button
    Then I should see an error message