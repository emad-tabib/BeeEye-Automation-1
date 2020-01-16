const properties=require('./configrationReader');
const logReport = require("mochawesome-screenshots/logReport");

exports.lunchBrowser = (browser,branch) =>{
    var url=properties.getUrl();
    url+=branch;
    browser 
    .url(url) // Go to a url
    .waitForElementVisible('body', 2000)
}

exports.logTestDetails = (testOBJ, Description) =>{
    logReport.log(testOBJ, "<b style='font-size: initial;'>Test Case Description:</b><br>" + Description);
}