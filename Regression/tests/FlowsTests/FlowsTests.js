const loginPage = require("../Page/login");
const Flows = require("../Page/Flows");
const screenShotUtils = require("../utils/screenShotUtils");
const logReport = require("mochawesome-screenshots/logReport");
const setup = require("../utils/setup");
const {
    assert
} = require('chai')
const {
    expect
} = require('chai')


describe('Flows Page', function () {

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
      console.log("before each");
      done();
  });

afterEach(function (browser, done) {
    console.log("after each");
    done();
});

//New flow
it('Create New Flow', function(browser) {
 
	logReport.log(this, "this is log");
    Flows.CreateNewFlow(browser);
    screenShotUtils.takeScreenShot(this,browser,"this is the results");
    browser.end();
});

//Edit Flow
it('Edit Flow', function(browser) {
  logReport.log(this, "this is log");
  Flows.EditFlow(browser);
  screenShotUtils.takeScreenShot(this,browser,"this is the results");
  browser.end();
	
});
//Delete Flow 
it('Delete Flow' , function(browser){
  logReport.log(this, "this is log");
  Flows.DeleteFlow(browser);
  screenShotUtils.takeScreenShot(this,browser,"this is the results");
  browser.end();


});


//Card in the Flows Page
it('Card in Flows Page ' , function(browser){
  logReport.log(this, "this is log");
  Flows.FlowCard(browser);
  screenShotUtils.takeScreenShot(this,browser,"this is the results");
  browser.end();


});
});
