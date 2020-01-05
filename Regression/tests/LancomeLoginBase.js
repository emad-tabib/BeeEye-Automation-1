const url = 'https://www.lancome-usa.com/';
const loginPage = require("../Page/login");
const screenShotUtils = require("../utils/screenShotUtils");
const logReport = require("mochawesome-screenshots/logReport");
const { assert } = require('chai')
const { expect } = require('chai')

describe('Login', function () {

    before(function (browser, done) {
        //logReport.log(this, "Welcome to ITG default nightwatch template"); 
        console.log("\n\n\n\n\nWelcome to ITG default nightwatch template\n\n\n\n\n\n\n");
        done();

    });

    after(function (browser, done) {
        //logReport.log(this, "finished case"); 
        browser.end(function () {
            console.log("\n\n\n\n\nEnd\n\n\n\n\n\n\n");
            done();
        });
    });
    afterEach(function (browser, done) {
        browser.end(function () {

            done();
        });

    });

    beforeEach(function (browser, done) {
        done();
    });

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


