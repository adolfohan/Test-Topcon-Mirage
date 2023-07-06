const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pages/LoginPage');
const ProductsPage = require('../pages/ProductsPage');
const CartPage = require('../pages/CartPage');
const assert = require('assert');

let loginPage;
let productsPage;
let cartPage;
let initialItemCount;
let addedItemName;

Given('I am logged in to the website', async () => {
  loginPage = new LoginPage();
  await loginPage.open();
  await loginPage.enterUsername('standard_user');
  await loginPage.enterPassword('secret_sauce');
  await loginPage.clickLogin();
});

And('I am on the product page', async () => {
  productsPage = new ProductsPage();
  await productsPage.open();
});

When('I click on the Add to Cart button for a specific item', async () => {
  // Get the name of the first item and click the Add to Cart button
  addedItemName = await productsPage.getFirstItemName();
  await productsPage.clickAddToCartButton();
});

Then('the item should be added to the cart', async () => {
  // Open the cart page
  cartPage = new CartPage();
  await cartPage.open();

  // Get the updated item count in the cart
  const updatedItemCount = await cartPage.getCartItemsCount();

  // Verify that the item count has increased by 1
  assert.strictEqual(updatedItemCount, initialItemCount + 1, 'Item was not added to the cart');

  // Verify that the added item is displayed in the cart
  const isItemDisplayed = await cartPage.isItemDisplayedInCart(addedItemName);
  assert.ok(isItemDisplayed, 'Added item is not displayed in the cart');
});

Given('I am logged in to the website', async () => {
    loginPage = new LoginPage();
    await loginPage.open();
    await loginPage.enterUsername('standard_user');
    await loginPage.enterPassword('secret_sauce');
    await loginPage.clickLogin();
  });

When('I have items in my cart', async () => {
  // Add multiple items to the cart
  await productsPage.addMultipleItemsToCart(3);
});

When('I click on the Remove button for a specific item', async () => {
  // Get the name of the first item in the cart and click the Remove button
  addedItemName = await cartPage.getFirstItemName();
  await cartPage.clickRemoveButton();
});

Then('the item should be removed from the cart', async () => {
  // Get the updated item count in the cart
  const updatedItemCount = await cartPage.getCartItemsCount();

  // Verify that the item count has decreased by 1
  assert.strictEqual(updatedItemCount, initialItemCount - 1, 'Item was not removed from the cart');

  // Verify that the removed item is no longer displayed in the cart
  const isItemDisplayed = await cartPage.isItemDisplayedInCart(addedItemName);
  assert.ok(!isItemDisplayed, 'Removed item is still displayed in the cart');
});
