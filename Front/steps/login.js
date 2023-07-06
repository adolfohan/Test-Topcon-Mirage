const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pages/LoginPage');

let loginPage;

Given('I am on the login page', async () => {
  loginPage = new LoginPage();
  await loginPage.open(); // Open the login page
});

When('I enter valid credentials', async () => {
  await loginPage.enterUsername('standard_user'); // Enter a valid username
  await loginPage.enterPassword('secret_sauce'); // Enter a valid password
});

When('I click on the Login button', async () => {
  await loginPage.clickLogin(); // Click on the Login button
});

Then('I should be logged in successfully', async () => {
  // Check if the user is logged in successfully by verifying a specific element on the next page
  const loggedInElement = await driver.findElement(By.css('.logged-in-user'));
  const loggedInUsername = await loggedInElement.getText();
  assert.strictEqual(loggedInUsername, 'Welcome, valid_user', 'User is not logged in successfully');
  loggedIn = true;
});

Given('I am on the login page', async () => {
  loginPage = new LoginPage();
  await loginPage.open(); // Open the login page
});

When('I enter invalid credentials', async () => {
  await loginPage.enterUsername('invalid_user'); // Enter an invalid username
  await loginPage.enterPassword('wrong_password'); // Enter an invalid password
});

Then('I should see an error message', async () => {
  // Check if an error message is displayed on the login page
  const errorMessage = await loginPage.getErrorMessage();
  assert.strictEqual(errorMessage, 'Epic sadface: Username and password do not match any user in this service');
});
