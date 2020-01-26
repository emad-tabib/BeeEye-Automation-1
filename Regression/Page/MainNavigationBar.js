const MainNavigationBarSelectors =require("../Selectors/MainNavigationBarSelectors");
const DashboardSelector =require("../Selectors/DashboardSelector");
const FlowsSelector =require("../Selectors/FlowsSelector");
const { assert } = require('chai').assert
const { expect } = require('chai')
const setup = require("../utils/setup");
const configrationReader = require("../utils/configrationReader");

//Check Logo and Main Navigation Bar
exports.MainNavigationBar = (browser) =>{
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    //Logo
   .waitForElementVisible(MainNavigationBarSelectors.elements.Logo)
   //Navigation
   .waitForElementVisible(MainNavigationBarSelectors.elements.NavigationBar)
    .pause(configrationReader.getPauseValue());
    }

//DASHBOARD
exports.DashboardNavigation = (browser) =>{
    var Dashboard = browser.page.MainNavigationBarSelectors();
    Dashboard
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(MainNavigationBarSelectors.elements.Dashboard)
      .click(MainNavigationBarSelectors.elements.Dashboard , function (result) {
        browser.waitForElementVisible(DashboardSelector.elements.SmallCard)
      })
    .pause(configrationReader.getPauseValue());
    }

//FLOWS
exports.FlowsNavigation = (browser) =>{
    var Flows = browser.page.MainNavigationBarSelectors();
    Flows
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(FlowsSelector.elements.NavFlows)
      .click(FlowsSelector.elements.NavFlows , function (result) {
        browser.waitForElementVisible(MainNavigationBarSelectors.elements.FlowTitle)
      })
    .pause(configrationReader.getPauseValue());
    }

//PRODUCTION
exports.ProductionNavigation = (browser) =>{
    var Production = browser.page.MainNavigationBarSelectors();
    Production
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
   .waitForElementVisible(MainNavigationBarSelectors.elements.Production)
      .click(MainNavigationBarSelectors.elements.Production , function (result) {
        browser.waitForElementVisible(MainNavigationBarSelectors.elements.ProductsCount)
      })
    .pause(configrationReader.getPauseValue());
    }

//EXPLAIN
exports.ExplainNavigation = (browser) =>{
    var Explain = browser.page.MainNavigationBarSelectors();
    Explain
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(MainNavigationBarSelectors.elements.Explain)
      .click(MainNavigationBarSelectors.elements.Explain , function (result) {
        browser.waitForElementVisible(MainNavigationBarSelectors.elements.ExplainWrapper)
      })
    .pause(configrationReader.getPauseValue());
    }