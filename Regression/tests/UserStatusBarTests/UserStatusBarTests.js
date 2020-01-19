const UserStatusBar = require("../Page/UserstatusBar");
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

describe('User Status Bar', function () {

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

//User Status Bar is display
it('Is User Status Bar Display', function(browser) {
 
	logReport.log(this, "this is log");
    UserStatusBar.IsUserStatusBarDisplay(browser);
    screenShotUtils.takeScreenShot(this,browser,"this is the results");
    browser.end();
});

//About Link
it('About Link', function(browser) {
 
	logReport.log(this, "this is log");
    UserStatusBar.AboutLink(browser);
    screenShotUtils.takeScreenShot(this,browser,"this is the results");
    browser.end();
});

//system diagnostics Link
it('System diagnostics Link', function(browser) {
 
	logReport.log(this, "this is log");
    UserStatusBar.SystemDiagnosticsLink(browser);
    screenShotUtils.takeScreenShot(this,browser,"this is the results");
    browser.end();
});

//Log Out Link
it('LogOut Link', function(browser) {
 
	logReport.log(this, "this is log");
    UserStatusBar.LogOutLink(browser);
    screenShotUtils.takeScreenShot(this,browser,"this is the results");
    browser.end();
});



});


