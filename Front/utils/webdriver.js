const { Builder, Capabilities } = require('selenium-webdriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

module.exports = { driver };
