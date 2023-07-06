const { By, Key, until } = require('selenium-webdriver');
const { driver } = require('../utils/webdriver');

class LoginPage {
  constructor() {
    this.url = 'https://www.saucedemo.com/';
    this.usernameField = By.id('user-name');
    this.passwordField = By.id('password');
    this.loginButton = By.css('.btn_action');
    this.errorMessage = By.css('h3[data-test="error"]');
  }

  async open() {
    await driver.get(this.url);
  }

  async enterUsername(username) {
    await driver.findElement(this.usernameField).sendKeys(username);
  }

  async enterPassword(password) {
    await driver.findElement(this.passwordField).sendKeys(password);
  }

  async clickLogin() {
    await driver.findElement(this.loginButton).click();
  }

  async getErrorMessage() {
    await driver.wait(until.elementLocated(this.errorMessage));
    const errorElement = await driver.findElement(this.errorMessage);
    return errorElement.getText();
  }
}

module.exports = LoginPage;
