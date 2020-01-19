const MainNavigationBar = require("../../Page/MainNavigationBar");
const loginPage = require("../../Page/login");
const title = require("../../Page/Title");
const screenShotUtils = require("../../utils/screenShotUtils");
const logReport = require("mochawesome-screenshots/logReport");
const setup = require("../../utils/setup");
const {
    assert
} = require('chai')
const {
    expect
} = require('chai')

describe('Main Navigation Bar', function () {

   before(function (browser, done) {
    logReport.log(this, "Test Cases for Main Navigation Bar");
        console.log("Test Cases for Main Navigation Bar"); 
    done();

   });

   after(function (browser, done) {
    browser.end(function () {
        console.log("End Browser");
        done();
    });
});
  
beforeEach(function (browser, done) {
    logReport.log(this, "before each test case : open the site");
    setup.lunchBrowser(browser,'');
    logReport.log(this, "before each test case : Login with valid Information");
    loginPage.LoginWitValidInformation(browser);
    setup.lunchBrowser(browser, '/dashboard');
    logReport.log(this, "before each test case : Check The title of the Page");
    title.getTitle(browser);
    console.log("before each");
    done();
});

//Check Logo and Navigation Bar
it('Main Navigation Bar', function(browser) {
    setup.logTestDetails(this, "Check if Logo and Navigation Bar are display after the Login successfully")
    MainNavigationBar.MainNavigationBar(browser);
    screenShotUtils.takeScreenShot(this,browser,"This is the results for Logo and Navigation Bar if are exists");
    browser.end();
});

//Dashboard
it('DASHBOARD', function(browser) {
    setup.logTestDetails(this, "Try to Click on DASHBOARD Link and check if it takes you to correct screen")
    MainNavigationBar.DashboardNavigation(browser);
    screenShotUtils.takeScreenShot(this,browser,"This is the results after you click on DASHBOARD Link");
    browser.end();
});

//Flows
it('FLOWS', function(browser) {
    setup.logTestDetails(this, "Try to Click on FLOWS Link and check if it takes you to correct screen")
    MainNavigationBar.FlowsNavigation(browser);
    screenShotUtils.takeScreenShot(this,browser,"This is the results after you click on FLOWS Link");
    browser.end();
});


//Production
it('PRODUCTION', function(browser) {
    setup.logTestDetails(this, "Try to Click on PRODUCTION Link and check if it takes you to correct screen")
    MainNavigationBar.ProductionNavigation(browser);
    screenShotUtils.takeScreenShot(this,browser,"This is the results after you click on PRODUCTION Link");
    browser.end();
});


//Explain
it('EXPLAIN', function(browser) {
    setup.logTestDetails(this, "Try to Click on EXPLAIN Link and check if it takes you to correct screen")
    MainNavigationBar.ExplainNavigation(browser);
    screenShotUtils.takeScreenShot(this,browser,"This is the results after you click on EXPLAIN Link");
    browser.end();
});





});


