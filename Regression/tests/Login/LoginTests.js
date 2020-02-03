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

describe('Login in BeeEye : Try to login without Password , Try to login without username , Try to login with wrong password , Try to login with wrong Username and  Try to login with Valid Information', function () {

    before(function (browser, done) {
        logReport.log(this, "Test Cases for Login Page");
        console.log("Test Cases for Login Page");
        setup.lunchBrowser(browser, '');
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
        logReport.log(this, "Check The title of the Page");
        title.getTitle(browser);
        done();
    });

    afterEach(function (browser, done) {

        done();
    });

    it('Login Without Password', function (browser) {
        setup.logTestDetails(this, "Try to login without Password")
        loginPage.LoginWithoutPassword(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for Login without Password");
        browser.end();
    });

    it('Login Without Username', function (browser) {
        setup.logTestDetails(this, "Try to login without Username")
        loginPage.LoginWithoutUsername(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for login without Username");
        browser.end();
    });


    it('Login With Wrong Password', function (browser) {
        setup.logTestDetails(this, "Try to login with wrong password")
        loginPage.LoginWithWrongPassword(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for login with wrong password");
        browser.end();
    });

    it('Login With Wrong Username', function (browser) {
        setup.logTestDetails(this, "Try to login with wrong Username")
        loginPage.LoginWithWrongUsername(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for login with wrong Username");
        browser.end();
    });

    it('Login With Valid Information', function (browser) {
        setup.logTestDetails(this, "Try to login with Valid Information")
        loginPage.LoginWitValidInformation(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for login with Valid Information");
        browser.end();
    });

});