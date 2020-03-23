/*const MainNavigationBar = require("../../Page/MainNavigationBar");
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

describe('Main Navigation Bar : Test if Logo is display or not , and check every Link in this Navigation Bar if navigates you the correct screen  ', function () {

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
        logReport.log(this, "Open the site");
        setup.lunchBrowser(browser, '');
        logReport.log(this, "Login with valid Information");
        loginPage.LoginWithValidInformation(browser);
        setup.lunchBrowser(browser, '/dashboard');
        logReport.log(this, "Check The title of the Page");
        title.getTitle(browser);
        console.log("before each");
        done();
    });

    afterEach(function (browser, done) {
        done();
    });

    //Check Logo and Navigation Bar
    it('Main Navigation Bar', function (browser) {
        setup.logTestDetails(this, "Check if Logo and Navigation Bar are display after the Login successfully")
        //Call MainNavigationBar function to check the Logo and check the Main Navigation Bar
        MainNavigationBar.MainNavigationBar(browser);
        //Take screenshot for the result
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for Logo and Navigation Bar if are exists");
        browser.end();
    });

    //Check the Dashboard Link
    it('DASHBOARD', function (browser) {
        setup.logTestDetails(this, "Try to Click on DASHBOARD Link and check if it takes you to correct screen")
        //Call DashboardNavigation function to check the Dashboard link and if it navigates you to the correct page
        MainNavigationBar.DashboardNavigation(browser);
        //Take screenshot for the result
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you click on DASHBOARD Link");
        browser.end();
    });

    //Check the Flows Link
    it('FLOWS', function (browser) {
        setup.logTestDetails(this, "Try to Click on FLOWS Link and check if it takes you to correct screen")
        //Call FlowsNavigation function to check the Flows link and if it navigates you to the correct page
        MainNavigationBar.FlowsNavigation(browser);
        //Take screenshot for the result
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you click on FLOWS Link");
        browser.end();
    });


    //Check the Production Link
    it('PRODUCTION', function (browser) {
        setup.logTestDetails(this, "Try to Click on PRODUCTION Link and check if it takes you to correct screen")
        //Call ProductionNavigation function to check the Production link and if it navigates you to the correct page
        MainNavigationBar.ProductionNavigation(browser);
        //Take screenshot for the result
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you click on PRODUCTION Link");
        browser.end();
    });


    //Check the Explain Link
    it('EXPLAIN', function (browser) {
        setup.logTestDetails(this, "Try to Click on EXPLAIN Link and check if it takes you to correct screen")
        //Call ExplainNavigation function to check the Explain link and if it navigates you to the correct page
        MainNavigationBar.ExplainNavigation(browser);
        //Take screenshot for the result
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you click on EXPLAIN Link");
        browser.end();
    });
});
*/