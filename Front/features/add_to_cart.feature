Feature: Add to Cart Functionality
  As a user
  I want to be able to add items to the cart
  So that I can purchase them later

  Scenario: Add item to cart
    Given I am logged in to the website
    And I am on the product page
    When I click on the Add to Cart button for a specific item
    Then the item should be added to the cart

  Scenario: Remove item from cart
    Given I am logged in to the website
    And I have items in my cart
    When I click on the Remove button for a specific item
    Then the item should be removed from the cart
