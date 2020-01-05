 const logReport = require("mochawesome-screenshots/logReport");

 exports.takeScreenShot = (testOBJ, browser, Message) =>{
    const now = new Date()  ;
    const secondsSinceEpoch = Math.round(now.getTime() / 1000)  ;
    var ScreenShotName = "SCS_"+secondsSinceEpoch+Math.floor(Math.random(1,0)*1000)+".png"; 
    browser.saveScreenshot("./customReportDir/screenshots/"+ScreenShotName);
    logReport.log(testOBJ, "Taking Screenshot:<br>"+Message+"<br><img src='screenshots/"+ScreenShotName+"'>");
    console.log("Taking Screenshot: "+ScreenShotName);
    logReport.setScreenshot(testOBJ, ScreenShotName, Message+"");

 }