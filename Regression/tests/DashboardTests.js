const DashboardPage = require("../Page/Dashboard");
const login = require("../Page/login");
const screenShotUtils = require("../utils/screenShotUtils");
const logReport = require("mochawesome-screenshots/logReport");
const setup = require("../utils/setup");

const {
    assert
} = require('chai')
const {
    expect
} = require('chai')

describe('Dashboard', function () {

   before(function (browser, done) {
    logReport.log(this, "Welcome to ITG default nightwatch template"); 
    console.log("Welcome to ITG default nightwatch template "); 
    setup.lunchBrowser(browser,'/');
    done();

   });

   after(function (browser, done) {
    browser.end(function () {
        console.log("End Browser");
        done();
    });
});
  
   beforeEach(function (browser, done) {
    setup.lunchBrowser(browser,'/');
    login.LoginWitValidInformation(browser);
    setup.lunchBrowser(browser, '/dashboard');
    console.log("before each");
    done();
});

  afterEach(function (browser, done) {
        console.log("after each");
        done();
    });

   //left
it('Left Side in Dashboard Page', function(browser) {
 
	logReport.log(this, "this is log");
    DashboardPage.LeftSideInDashboardPage(browser);
    screenShotUtils.takeScreenShot(this,browser,"this is the results");
    browser.end();
});

//center
it('Center Side in Dashboard Page', function(browser) {
 
	logReport.log(this, "this is log");
    DashboardPage.CenterSideInDashboardPage(browser);
    screenShotUtils.takeScreenShot(this,browser,"this is the results");
    browser.end();
});

//right
it('Right Side in Dashboard Page', function(browser) {
 
	logReport.log(this, "this is log");
    DashboardPage.RightSideInDashboardPage(browser);
    screenShotUtils.takeScreenShot(this,browser,"this is the results");
    browser.end();
});

});














