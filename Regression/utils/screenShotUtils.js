 const logReport = require("mochawesome-screenshots/logReport");

 exports.takeScreenShot = (testOBJ, browser, Message) =>{
    const now = new Date()  ;
    const secondsSinceEpoch = Math.round(now.getTime() / 1000)  ;
    var ScreenShotName = "SCS_"+secondsSinceEpoch+".png"; 
    browser.saveScreenshot("./customReportDir/screenshots/"+ScreenShotName);
    logReport.log(testOBJ, "Taking Screenshot:<br> <img src='screenshots/"+ScreenShotName+"'>");
    logReport.setScreenshot(testOBJ, ScreenShotName, Message+"");

 }