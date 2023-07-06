Feature: Buy Product Functionality
  As a user
  I want to be able to buy items from the cart
  So that I can complete the purchase

  Scenario: Complete the purchase
    Given I am logged in to the website
    And I have items in my cart
    When I navigate to the cart page
    And I click on the Checkout button
    And I enter the shipping information
    And I click on the Continue button
    And I click on the Finish button
    Then I should receive a confirmation of my purchase
