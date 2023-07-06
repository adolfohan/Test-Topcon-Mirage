const { setDefaultTimeout, BeforeAll } = require('@cucumber/cucumber');

// Set the default timeout for steps
setDefaultTimeout(60 * 1000);

// Load the step definitions
require('./steps/login');
require('./steps/add_to_cart');
require('./steps/buy_product');

// Execute the hooks
require('./support/hooks');
