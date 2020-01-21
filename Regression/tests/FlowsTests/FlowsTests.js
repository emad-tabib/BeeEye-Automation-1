const loginPage = require("../../Page/login");
const Flows = require("../../Page/Flows");
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


describe('Flows Page : Test if Create new flow, Edit flow, Delete flow and check if the flow card display correctly', function () {
   before(function (browser, done) {
    done();
   });

     after(function (browser, done) {
        browser.end(function () {
            console.log("End Browser");
            done();
        });
    });

    beforeEach(function (browser, done) {
      logReport.log(this, "before each test case : open the site");
      setup.lunchBrowser(browser,'');
      logReport.log(this, "before each test case : Login with valid Information");
      loginPage.LoginWitValidInformation(browser);
      logReport.log(this, "before each test case : Check The title of the Page");
      title.getTitle(browser);
      console.log("before each");
      done();
  });

  afterEach(function (browser, done) {
    done();
});

//New flow
it('Create New Flow', function(browser) {
 
  setup.logTestDetails(this, "Try to Create New Flow")
    Flows.CreateNewFlow(browser);
    screenShotUtils.takeScreenShot(this,browser,"Here is the screenshot for Create New Flow");
    browser.end();
});

//Edit Flow
it('Edit Flow', function(browser) {
  setup.logTestDetails(this, "Try to Edit the Flow ")
  Flows.EditFlow(browser);
  screenShotUtils.takeScreenShot(this,browser,"Here is the screenshot for Edit the Flow");
  browser.end();
	
});
//Delete Flow 
it('Delete Flow' , function(browser){
  setup.logTestDetails(this, "Try to Delete the flow")
  Flows.DeleteFlow(browser);
  screenShotUtils.takeScreenShot(this,browser,"Here is the screenshot for Delete the flow");
  browser.end();


});


//Card in the Flows Page
it('Card in Flows Page ' , function(browser){
  setup.logTestDetails(this, "Try to test if the flow card display correctly or not")
  Flows.FlowCard(browser);
  screenShotUtils.takeScreenShot(this,browser,"Here is the screenshot for the flow card display in FLOWS Page");
  browser.end();


});
//Sort by Name
it('Sort by Name' , function(browser){
  setup.logTestDetails(this, " Try to test if sort Sort by Name process works well ")
  Flows.SortByName(browser);
  screenShotUtils.takeScreenShot(this,browser,"Here is the screenshot for the Name sort Descending");
  Flows.SortByName(browser);
  screenShotUtils.takeScreenShot(this,browser,"Here is the screenshot for the Name sort Ascending");
  browser.end();
});

//sort by Gini
it('Sort by Gini' , function(browser){
  setup.logTestDetails(this, " Try to test if Sort by Gini process works well ")
  Flows.SortByGini(browser);
  screenShotUtils.takeScreenShot(this,browser,"Here is the screenshot for the Gini sort Ascending");
  Flows.SortByGini(browser);
  screenShotUtils.takeScreenShot(this,browser,"Here is the screenshot for the Gini sort Descending");
  browser.end();
});

//Sort by Date created
it('Sort by Date created' , function(browser){
  setup.logTestDetails(this, " Try to test if Sort by Date created process works well ")
  Flows.SortByDateCreated(browser);
  screenShotUtils.takeScreenShot(this,browser,"Here is the screenshot for the Date create sort Ascending");
  Flows.SortByDateCreated(browser);
  screenShotUtils.takeScreenShot(this,browser,"Here is the screenshot for the Date create sort Descending");
  browser.end();
}); 

//Upload File to new Flow
it('Upload File' , function(browser){
  setup.logTestDetails(this, " Try to test if Upload file is successfully ")
  Flows.CreateNewFlow(browser);
  Flows.UploadFile(browser);
  screenShotUtils.takeScreenShot(this,browser,"Here is the screenshot after uploading File is successfully");
  browser.end();
}); 

});

