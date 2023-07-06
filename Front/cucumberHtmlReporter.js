const cucumberHtmlReporter = require('cucumber-html-reporter');

// Specify the options for the HTML report
const options = {
  theme: 'bootstrap',
  jsonFile: './reports/cucumber_report.json', // Path to the generated Cucumber JSON report
  output: './reports/cucumber_report.html', // Path where the HTML report will be generated
  reportSuiteAsScenarios: true,
  launchReport: true,
};

// Generate the HTML report
cucumberHtmlReporter.generate(options);
