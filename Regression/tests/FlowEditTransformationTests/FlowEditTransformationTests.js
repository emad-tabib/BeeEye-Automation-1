/*const loginPage = require("../../Page/login");
const Flows = require("../../Page/Flows");
const title = require("../../Page/Title");
const FlowEditDS = require("../../Page/FlowEditDS");
const screenShotUtils = require("../../utils/screenShotUtils");
const logReport = require("mochawesome-screenshots/logReport");
const setup = require("../../utils/setup");
const configrationReader = require("../../utils/configrationReader");
const FlowsSelector = require("../../Selectors/FlowsSelector");

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
    
        

//Run transformation Tab
it('Verify that search by Column is working as expected in Columns tab ', function (browser) {
    setup.logTestDetails(this, " Try to verify if search by Column is working as expected in Columns tab ")
    Flows.CreateNewFlow(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for the new Flow");
    FlowEditDS.LastConfiguringStep(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot for teh Last configuring step that user make it to the selected Flow");
    Flows.UploadFile(browser);
    Flows.SearchByFeatureNameInColumnTab(browser);
    screenShotUtils.takeScreenShot(this, browser, "Here is the screenshot after you search by Column in Columns tab");
    browser.end();
});

});
*/