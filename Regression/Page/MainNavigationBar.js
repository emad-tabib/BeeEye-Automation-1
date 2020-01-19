const MainNavigationBarSelectors =require("../Selectors/MainNavigationBarSelectors");
const DashboardSelector =require("../Selectors/DashboardSelector");
const FlowsSelector =require("../Selectors/FlowsSelector");
const { assert } = require('chai').assert
const { expect } = require('chai')
const setup = require("../utils/setup");
const configrationReader = require("../utils/configrationReader");

//Check Logo and Main Navigation Bar
exports.MainNavigationBar = (browser) =>{
    var MainNavigationBar = browser.page.MainNavigationBarSelectors();
    MainNavigationBar
    .waitForElementVisible('body', 2000) // wait till page loads
    //Logo
   .waitForElementVisible(MainNavigationBarSelectors.elements.Logo)
   //Navigation
   .waitForElementVisible(MainNavigationBarSelectors.elements.NavigationBar)
    .pause(1000);
    }

//DASHBOARD
exports.DashboardNavigation = (browser) =>{
    var Dashboard = browser.page.MainNavigationBarSelectors();
    Dashboard
    .waitForElementVisible('body', 2000) // wait till page loads
    .waitForElementVisible(MainNavigationBarSelectors.elements.Dashboard)
      .click(MainNavigationBarSelectors.elements.Dashboard , function (result) {
        browser.waitForElementVisible(DashboardSelector.elements.SmallCard)
      })
    .pause(1000);
    }

//FLOWS
exports.FlowsNavigation = (browser) =>{
    var Flows = browser.page.MainNavigationBarSelectors();
    Flows
    .waitForElementVisible('body', 2000) // wait till page loads
    .waitForElementVisible(FlowsSelector.elements.NavFlows)
      .click(FlowsSelector.elements.NavFlows , function (result) {
        browser.waitForElementVisible(MainNavigationBarSelectors.elements.FlowTitle)
      })
    .pause(1000);
    }

//PRODUCTION
exports.ProductionNavigation = (browser) =>{
    var Production = browser.page.MainNavigationBarSelectors();
    Production
    .waitForElementVisible('body', 2000) // wait till page loads
   .waitForElementVisible(MainNavigationBarSelectors.elements.Production)
      .click(MainNavigationBarSelectors.elements.Production , function (result) {
        browser.waitForElementVisible(MainNavigationBarSelectors.elements.ProductsCount)
      })
    .pause(1000);
    }

//EXPLAIN
exports.ExplainNavigation = (browser) =>{
    var Explain = browser.page.MainNavigationBarSelectors();
    Explain
    .waitForElementVisible('body', 2000) // wait till page loads
    .waitForElementVisible(MainNavigationBarSelectors.elements.Explain)
      .click(MainNavigationBarSelectors.elements.Explain , function (result) {
        browser.waitForElementVisible(MainNavigationBarSelectors.elements.ExplainWrapper)
      })
    .pause(1000);
    }