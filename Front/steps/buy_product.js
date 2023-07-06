const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pages/LoginPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');
const ConfirmationPage = require('../pages/ConfirmationPage');
const assert = require('assert');

let loginPage;
let cartPage;
let checkoutPage;
let confirmationPage;

Given('I am logged in to the website', async () => {
  // Implement logging in to the website
  loginPage = new LoginPage();
  await loginPage.open();
  await loginPage.enterUsername('standard_user');
  await loginPage.enterPassword('secret_sauce');
  await loginPage.clickLogin();
});

And('I have items in my cart', async () => {
    // Implement adding items to the cart
    cartPage = new CartPage();
    await cartPage.open();
    await cartPage.addItemToCart('item1');
    await cartPage.addItemToCart('item2');
  });

When('I navigate to the cart page', async () => {
  // Implement navigating to the cart page
  cartPage = new CartPage();
  await cartPage.open();
});

And('I click on the Checkout button', async () => {
  // Implement clicking on the Checkout button
  await cartPage.clickCheckout();
});

And('I enter the shipping information', async () => {
  // Implement entering the shipping information on the Checkout page
  checkoutPage = new CheckoutPage();
  await checkoutPage.enterFirstName('Adolfo');
  await checkoutPage.enterLastName('Han');
  await checkoutPage.enterZipCode('46014');
});

And('I click on the Continue button', async () => {
  // Implement clicking on the Continue button
  await checkoutPage.clickContinue();
});

And('I click on the Finish button', async () => {
  // Implement clicking on the Finish button
  await checkoutPage.clickFinish();
});

Then('I should receive a confirmation of my purchase', async () => {
  confirmationPage = new ConfirmationPage();

  // Verify that the confirmation message is displayed
  const isConfirmationDisplayed = await confirmationPage.isConfirmationDisplayed();
  assert.ok(isConfirmationDisplayed, 'Purchase confirmation is not displayed');

  // Get the confirmation text and assert its content
  const confirmationText = await confirmationPage.getConfirmationText();
  assert.strictEqual(
    confirmationText,
    'Thank you for your order!',
    'Incorrect confirmation message'
  );
});
