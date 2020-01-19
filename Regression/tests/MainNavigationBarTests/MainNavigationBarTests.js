const MainNavigationBar = require("../Page/MainNavigationBar");
const loginPage = require("../Page/login");
const screenShotUtils = require("../utils/screenShotUtils");
const logReport = require("mochawesome-screenshots/logReport");
const setup = require("../utils/setup");
const {
    assert
} = require('chai')
const {
    expect
} = require('chai')

describe('Main Navigation Bar', function () {

   before(function (browser, done) {
    logReport.log(this, "Welcome to ITG default nightwatch template"); 
    console.log("Welcome to ITG default nightwatch template"); 
    done();

   });

   after(function (browser, done) {
    browser.end(function () {
        console.log("End Browser");
        done();
    });
});
  
beforeEach(function (browser, done) {
    setup.lunchBrowser(browser,'');
    loginPage.LoginWitValidInformation(browser);
    setup.lunchBrowser(browser, '/dashboard');
    console.log("before each");
    done();
});

afterEach(function (browser, done) {
    console.log("after each");
    done();
});

//Check Logo and Navigation Bar
it('Main Navigation Bar', function(browser) {
	logReport.log(this, "this is log");
    MainNavigationBar.MainNavigationBar(browser);
    screenShotUtils.takeScreenShot(this,browser,"this is the results");
    browser.end();
});

//Dashboard
it('DASHBOARD', function(browser) {
	logReport.log(this, "this is log");
    MainNavigationBar.DashboardNavigation(browser);
    screenShotUtils.takeScreenShot(this,browser,"this is the results");
    browser.end();
});

//Flows
it('FLOWS', function(browser) {
	logReport.log(this, "this is log");
    MainNavigationBar.FlowsNavigation(browser);
    screenShotUtils.takeScreenShot(this,browser,"this is the results");
    browser.end();
});


//Production
it('PRODUCTION', function(browser) {
	logReport.log(this, "this is log");
    MainNavigationBar.ProductionNavigation(browser);
    screenShotUtils.takeScreenShot(this,browser,"this is the results");
    browser.end();
});


//Explain
it('EXPLAIN', function(browser) {
	logReport.log(this, "this is log");
    MainNavigationBar.ExplainNavigation(browser);
    screenShotUtils.takeScreenShot(this,browser,"this is the results");
    browser.end();
});





});


