 const logReport = require("mochawesome-screenshots/logReport");

 exports.takeScreenShot = (testOBJ, browser, Message) =>{
   browser.waitForElementVisible('body', 2000) 
   var now = new Date()  ;
   var secondsSinceEpoch = Math.round(now.getTime() / 1000)  ;
   var ScreenShotName = "SCS_"+secondsSinceEpoch+Math.floor(Math.random()*1000)+".png"; 
   browser.saveScreenshot("./customReportDir/screenshots/"+ScreenShotName);
    
   console.log("Taking Screenshot:"+ScreenShotName);
   logReport.log(testOBJ, "Taking Screenshot:<br>"+Message+"<br> <img src='screenshots/"+ScreenShotName+"'>");
   logReport.setScreenshot(testOBJ, ScreenShotName, Message+"");

 }