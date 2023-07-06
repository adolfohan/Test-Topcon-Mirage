const { By, Key, until } = require('selenium-webdriver');
const { driver } = require('../utils/webdriver');

class CartPage {
  constructor() {
    this.url = 'https://www.saucedemo.com/cart.html';
    this.cartItems = By.css('.cart_item');
    this.checkoutButton = By.css('.checkout_button');
    this.firstNameField = By.id('first-name');
    this.lastNameField = By.id('last-name');
    this.zipCodeField = By.id('postal-code');
    this.continueButton = By.css('.cart_button');
    this.finishButton = By.css('.cart_button');
    this.confirmationMessage = By.css('.complete-header');
  }

  async open() {
    await driver.get(this.url);
  }

  async getCartItemsCount() {
    const items = await driver.findElements(this.cartItems);
    return items.length;
  }

  async clickCheckout() {
    await driver.findElement(this.checkoutButton).click();
  }

  async enterFirstName(firstName) {
    await driver.findElement(this.firstNameField).sendKeys(firstName);
  }

  async enterLastName(lastName) {
    await driver.findElement(this.lastNameField).sendKeys(lastName);
  }

  async enterZipCode(zipCode) {
    await driver.findElement(this.zipCodeField).sendKeys(zipCode);
  }

  async clickContinue() {
    await driver.findElement(this.continueButton).click();
  }

  async clickFinish() {
    await driver.findElement(this.finishButton).click();
  }

  async getConfirmationMessage() {
    await driver.wait(until.elementLocated(this.confirmationMessage));
    const confirmationElement = await driver.findElement(this.confirmationMessage);
    return confirmationElement.getText();
  }
}

module.exports = CartPage;
