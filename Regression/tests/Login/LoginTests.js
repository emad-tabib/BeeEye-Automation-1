const loginPage = require("../../Page/login");
const screenShotUtils = require("../../utils/screenShotUtils");
const logReport = require("mochawesome-screenshots/logReport");
const setup = require("../../utils/setup");
const {
   assert
} = require('chai')
const {
    expect
} = require('chai')

describe('Login in BeeEye', function () {

   before(function (browser, done) {
    logReport.log(this, "Welcome to ITG default nightwatch template"); 
    console.log("Welcome to ITG default nightwatch template"); 
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
    console.log("before each");
    done();
});

afterEach(function (browser, done) {
    console.log("after each");
    done();
});
/*
it('Login Without Password', function(browser) {
 
	setup.logTestDetails(this,"Try to login without Password")
    loginPage.LoginWithoutPassword(browser);

    screenShotUtils.takeScreenShot(this,browser,"this is the results");
    browser.end();
});

it('Login Without Username', function(browser) {
 
	logReport.log(this, "this is log");
    loginPage.LoginWithoutUsername(browser);

    screenShotUtils.takeScreenShot(this,browser,"this is the results");
    browser.end();
});


it('Login With Wrong Password', function(browser) {
 
	logReport.log(this, "this is log");
    loginPage.LoginWithWrongPassword(browser);

    screenShotUtils.takeScreenShot(this,browser,"this is the results");
    browser.end();
});

it('Login With Wrong Username', function(browser) {
 
	logReport.log(this, "this is log");
    loginPage.LoginWithWrongUsername(browser);

    screenShotUtils.takeScreenShot(this,browser,"this is the results");
    browser.end();
});
*/
it('Login With Valid Information', function(browser) {
 
	logReport.log(this, "this is log");
    loginPage.LoginWitValidInformation(browser);

    screenShotUtils.takeScreenShot(this,browser,"this is the results");
    browser.end();
});

});

