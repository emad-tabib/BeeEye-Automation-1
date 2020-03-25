const loginPage = require("../../Page/login");
const title = require("../../Page/Title");
const FlowEditTransformation = require("../../Page/FlowEditTransformation");
const Flows = require("../../Page/Flows");
const screenShotUtils = require("../../utils/screenShotUtils");
const logReport = require("mochawesome-screenshots/logReport");
const setup = require("../../utils/setup");
const configrationReader = require("../../utils/configrationReader");

const {
    assert
} = require('chai')
const {
    expect
} = require('chai')
describe('Dashboard Page : Test if these section are display or not: Best Flow(GINI) , System Statistics , Top Flows , Platform Staistics , Recent Viewed Flows', function () {

    before(function (browser, done) {
        logReport.log(this, "Test Cases for Flow Edit - DS");
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
        logReport.log(this, "Check The title of the Page");
        title.getTitle(browser);
        console.log("before each");
        done();
    });

    afterEach(function (browser, done) {
        done();
    });

    //Run Tranfsfromation phase and verify data is loaded.
    it('Run Tranfsfromation phase and verify data is loaded', function (browser) {
        setup.logTestDetails(this, "Try to Run Tranfsfromation phase and verify data is loaded")
        Flows.CreateNewFlow(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new Flow");
        Flows.CheckBackButton(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new flow Page after you create a new flow ");
        Flows.UploadFile(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you Upload File to the new flow");
        Flows.SelectValidLabel(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you select a valid Label");
        Flows.AddAnotherCSVFile(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after uploading Second CSV File ");
        Flows.SelectJoinValue(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you Select Join value");
        Flows.RunDataSources(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you run the data Source");
        FlowEditTransformation.RunTransformation(browser);
        //Take screenshot for the result by call takeScreenShot function
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you run the Transformation ");
        FlowEditTransformation.CheckLogWindow(browser);
        screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the Logs Window after you run the Transformation ");
        browser.end();
    });
});