const url = 'https://www.lancome-usa.com/';
const loginPage = require("../Page/login");
const screenShotUtils = require("../utils/screenShotUtils");
const logReport = require("mochawesome-screenshots/logReport");
const { assert } = require('chai')
const { expect } = require('chai')

describe('Login', function () {

    before(function (browser, done) {
        //logReport.log(this, "Welcome to ITG default nightwatch template"); 
        console.log("Welcome to ITG default nightwatch template");
        done();
    });

    after(function (browser, done) {
        //logReport.log(this, "finished case");
        
        browser.end(function () {
            console.log("End");
            done();
        });
    });
   
    // afterEach(function(browser, done) {
    //     browser.end(function () {
    //         console.log("Close browser");
    //         done();
    //     });
    //     });

    it('Fill user details', function (browser) {
        logReport.log(this, "this is log");
        loginPage.fillUserDetails(browser);

        screenShotUtils.takeScreenShot(this, browser, "this is the results");
        browser.end();
    });

    it('Fill user details 2', function (browser) {
        logReport.log(this, "this is log");
        loginPage.fillUserDetails(browser);

        screenShotUtils.takeScreenShot(this, browser, "this is the results");
        browser.end();
    });

});


