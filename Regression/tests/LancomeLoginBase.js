const url = 'https://www.lancome-usa.com/';
const loginPage = require("../Page/login");
const screenShotUtils = require("../utils/screenShotUtils");
const logReport = require("mochawesome-screenshots/logReport");
const {
    assert
} = require('chai')
const {
    expect
} = require('chai')

describe('Login Suite', function () {
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
        console.log("before each");
        done();
    });

    afterEach(function (browser, done) {
        console.log("after each");
        done();
    });

    it('Fill user details', function (browser) {

        logReport.log(this, "this is log");
        loginPage.fillUserDetails(browser);

        screenShotUtils.takeScreenShot(this, browser, "this is the results");
    });

    it('Fill user details 2', function (browser) {

        logReport.log(this, "this is log");
        loginPage.fillUserDetails(browser);

        screenShotUtils.takeScreenShot(this, browser, "this is the results");
        // browser.end(); // just enable this when you need to end browser 
    });

});