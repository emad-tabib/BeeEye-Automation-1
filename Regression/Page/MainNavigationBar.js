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
   .assert.elementPresent(MainNavigationBarSelectors.elements.Logo)
   
   //Navigation
   .waitForElementVisible(MainNavigationBarSelectors.elements.NavigationBar)
   .assert.elementPresent(MainNavigationBarSelectors.elements.NavigationBar)
    .pause(configrationReader.getPauseValue());
    }

//DASHBOARD
exports.DashboardNavigation = (browser) =>{
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(MainNavigationBarSelectors.elements.Dashboard)
    .assert.elementPresent(MainNavigationBarSelectors.elements.Dashboard)

      .click(MainNavigationBarSelectors.elements.Dashboard , function (result) {
        browser
        .waitForElementVisible(DashboardSelector.elements.SmallCard)
        .assert.elementPresent(DashboardSelector.elements.SmallCard)
      })
    .pause(configrationReader.getPauseValue());
    }

//FLOWS
exports.FlowsNavigation = (browser) =>{
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(FlowsSelector.elements.NavFlows)
    .assert.elementPresent(FlowsSelector.elements.NavFlows)

      .click(FlowsSelector.elements.NavFlows , function (result) {
        browser
        .waitForElementVisible(MainNavigationBarSelectors.elements.FlowTitle)
        .assert.elementPresent(MainNavigationBarSelectors.elements.FlowTitle)
      })
    .pause(configrationReader.getPauseValue());
    }

//PRODUCTION
exports.ProductionNavigation = (browser) =>{
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
   .waitForElementVisible(MainNavigationBarSelectors.elements.Production)
   .assert.elementPresent(MainNavigationBarSelectors.elements.Production)

      .click(MainNavigationBarSelectors.elements.Production , function (result) {
        browser
        .waitForElementVisible(MainNavigationBarSelectors.elements.ProductsCount)
        .assert.elementPresent(MainNavigationBarSelectors.elements.ProductsCount)
      })
    .pause(configrationReader.getPauseValue());
    }

//EXPLAIN
exports.ExplainNavigation = (browser) =>{
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(MainNavigationBarSelectors.elements.Explain)
    .assert.elementPresent(MainNavigationBarSelectors.elements.Explain)

      .click(MainNavigationBarSelectors.elements.Explain , function (result) {
        browser
        .waitForElementVisible(MainNavigationBarSelectors.elements.ExplainWrapper)
        .assert.elementPresent(MainNavigationBarSelectors.elements.ExplainWrapper)
      })
    .pause(configrationReader.getPauseValue());
    }