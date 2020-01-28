const DashboardPage = require("../../Page/Dashboard");
const login = require("../../Page/login");
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

describe('Dashboard Page : Test if these section are display or not: Best Flow(GINI) , System Statistics , Top Flows , Platform Staistics , Recent Viewed Flows', function () {

    before(function (browser, done) {
        logReport.log(this, "Test Cases for Dashboard Page");
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
        setup.lunchBrowser(browser, '');
        logReport.log(this, "before each test case : Login with valid Information");
        login.LoginWitValidInformation(browser);
        logReport.log(this, "before each test case : Check The title of the Page");
        title.getTitle(browser);
        console.log("before each");
        done();
    });

    afterEach(function (browser, done) {
        
        done();
    });

    //left
    it('Left Side in Dashboard Page', function (browser) {

        setup.logTestDetails(this, "Test the Left side in Dashboard Page if Best Flow(GINI) and Top Flows are display or not")
        DashboardPage.LeftSideInDashboardPage(browser);
        screenShotUtils.takeScreenShot(this, browser, "This is the results for Left side in Dashboard Page");
        browser.end();
    });

    //center
    it('Center Side in Dashboard Page', function (browser) {

        setup.logTestDetails(this, "Test the Center side in Dashboard Page if System Statistics and Platform Statistics are display or not")
        DashboardPage.CenterSideInDashboardPage(browser);
        screenShotUtils.takeScreenShot(this, browser, "This is the results for Center side in Dashboard Page");
        browser.end();
    });

    //right
    it('Right Side in Dashboard Page', function (browser) {

        setup.logTestDetails(this, "Test the Right side in Dashboard Page if Recent Viewed Flows is display or not")
        DashboardPage.RightSideInDashboardPage(browser);
        screenShotUtils.takeScreenShot(this, browser, "This is the results for Right side in Dashboard Page");
        browser.end();
    });

});