const MainNavigationBarSelectors = require("../Selectors/MainNavigationBarSelectors");
const DashboardSelector = require("../Selectors/DashboardSelector");
const FlowsSelector = require("../Selectors/FlowsSelector");
const {
  assert
} = require('chai').assert
const {
  expect
} = require('chai')
const setup = require("../utils/setup");
const configrationReader = require("../utils/configrationReader");

//Check Logo and Main Navigation Bar
exports.MainNavigationBar = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    //Logo
    .waitForElementVisible(MainNavigationBarSelectors.elements.Logo, 'Test is failed because the logo was not found in the Main Navigation Bar')
    .assert.elementPresent(MainNavigationBarSelectors.elements.Logo, 'Test is failed because the logo was not found in the Main Navigation Bar')

    //Navigation
    .waitForElementVisible(MainNavigationBarSelectors.elements.NavigationBar, 'Test is failed because the Navigation Bar was not found in the site')
    .assert.elementPresent(MainNavigationBarSelectors.elements.NavigationBar, 'Test is failed because the Navigation Bar was not found in the site')
    .pause(configrationReader.getPauseValue());
}

//DASHBOARD
exports.DashboardNavigation = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(MainNavigationBarSelectors.elements.Dashboard, 'Test is failed because the Dashboard Link was not found in the Main Navigation Bar')
    .assert.elementPresent(MainNavigationBarSelectors.elements.Dashboard, 'Test is failed because the Dashboard Link was not found in the Main Navigation Bar')

    .click(MainNavigationBarSelectors.elements.Dashboard, function (result) {
      browser
      //this to make sure that you are in Dashboard Page when you click on Dashboard Link
        .waitForElementVisible(DashboardSelector.elements.SmallCard, 'Test is failed After you click on Dashboard Link because the link does not take you to Dashboard Page')
        .assert.elementPresent(DashboardSelector.elements.SmallCard, 'Test is failed After you click on Dashboard Link because the link does not take you to Dashboard Page')
    })
    .pause(configrationReader.getPauseValue());
}

//FLOWS
exports.FlowsNavigation = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(FlowsSelector.elements.NavFlows, 'Test is failed because the Flows Link was not found in the Main Navigation Bar')
    .assert.elementPresent(FlowsSelector.elements.NavFlows, 'Test is failed because the Flows Link was not found in the Main Navigation Bar')

    .click(FlowsSelector.elements.NavFlows, function (result) {
      browser
        .waitForElementVisible(MainNavigationBarSelectors.elements.FlowTitle, 'Test is failed After you click on Flows Link because the link does not take you to Flows Page')
        .assert.elementPresent(MainNavigationBarSelectors.elements.FlowTitle, 'Test is failed After you click on Flows Link because the link does not take you to Flows Page')
    })
    .pause(configrationReader.getPauseValue());
}

//PRODUCTION
exports.ProductionNavigation = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(MainNavigationBarSelectors.elements.Production, 'Test is failed because the Production Link was not found in the Main Navigation Bar')
    .assert.elementPresent(MainNavigationBarSelectors.elements.Production, 'Test is failed because the Production Link was not found in the Main Navigation Bar')

    .click(MainNavigationBarSelectors.elements.Production, function (result) {
      browser
        .waitForElementVisible(MainNavigationBarSelectors.elements.ProductsCount, 'Test is failed After you click on Production Link because the link does not take you to Production Page')
        .assert.elementPresent(MainNavigationBarSelectors.elements.ProductsCount, 'Test is failed After you click on Production Link because the link does not take you to Production Page')
    })
    .pause(configrationReader.getPauseValue());
}

//EXPLAIN
exports.ExplainNavigation = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(MainNavigationBarSelectors.elements.Explain, 'Test is failed because the Explain Link was not found in the Main Navigation Bar')
    .assert.elementPresent(MainNavigationBarSelectors.elements.Explain, 'Test is failed because the Explain Link was not found in the Main Navigation Bar')

    .click(MainNavigationBarSelectors.elements.Explain, function (result) {
      browser
        .waitForElementVisible(MainNavigationBarSelectors.elements.ExplainWrapper, 'Test is failed After you click on Explain Link because the link does not take you to Explain Page')
        .assert.elementPresent(MainNavigationBarSelectors.elements.ExplainWrapper, 'Test is failed After you click on Explain Link because the link does not take you to Explain Page')
    })
    .pause(configrationReader.getPauseValue());
}