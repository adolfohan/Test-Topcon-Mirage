const { Before, After } = require('@cucumber/cucumber');
const { driver } = require('../utils/webdriver');

Before(async () => {
    // Perform setup tasks before the scenarios
    await driver.manage().window().maximize(); // Maximize the browser window
    await driver.manage().setTimeouts({ implicit: 5000 }); // Set the implicit wait timeout
  });

After(async () => {
  await driver.quit();
});
