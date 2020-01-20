const UserStatusBarSelector = require("../Selectors/UserStatusBarSelector");
const loginSelectors = require("../Selectors/loginSelectors");
const configrationReader = require("../utils/configrationReader");
const { assert } = require('chai').assert
const { expect } = require('chai')

//Check if the UserStatusBar is display or not
exports.IsUserStatusBarDisplay = (browser) =>{
    var UserStatusBar = browser.page.UserStatusBarSelector();
    UserStatusBar
    .waitForElementVisible('body', 4000) // wait till page loads
    .waitForElementVisible(UserStatusBarSelector.elements.UserLoggedInMenu)
      .waitForElementVisible(loginSelectors.elements.UserMenu)
      .waitForElementVisible(UserStatusBarSelector.elements.UserMenuDropdown)
      //to check if itg(According to what is the username) is display or not
      .assert.containsText(loginSelectors.elements.UserMenu, configrationReader.getUserName())
      .click(UserStatusBarSelector.elements.UserMenuDropdown,function(result){
          browser
        .waitForElementVisible(UserStatusBarSelector.elements.About, 4000)
        .waitForElementVisible(UserStatusBarSelector.elements.LogOut, 4000)
        .waitForElementVisible(UserStatusBarSelector.elements.SystemDiagnostics, 4000)
      })


    .pause(1000); 

}

//Check if "About" Link takes you to correct page
exports.AboutLink = (browser) =>{
    var About = browser.page.UserStatusBarSelector();
    About
    .waitForElementVisible('body', 4000) // wait till page loads
    .waitForElementVisible(UserStatusBarSelector.elements.UserMenuDropdown)
      .click(UserStatusBarSelector.elements.UserMenuDropdown,function(result){
          browser
        .waitForElementVisible(UserStatusBarSelector.elements.About, 4000)
        .click(UserStatusBarSelector.elements.About,function(result){
            browser
            .waitForElementVisible(UserStatusBarSelector.elements.AboutPage, 4000)
        })
      })


    .pause(1000); 

}

//Check if "system diagnostics" Link takes you to correct page
exports.SystemDiagnosticsLink = (browser) =>{
    var SystemDiagnostics = browser.page.UserStatusBarSelector();
    SystemDiagnostics
    .waitForElementVisible('body', 4000) // wait till page loads
    .waitForElementVisible(UserStatusBarSelector.elements.UserMenuDropdown)
      .click(UserStatusBarSelector.elements.UserMenuDropdown,function(result){
          browser
        .waitForElementVisible(UserStatusBarSelector.elements.SystemDiagnostics, 4000)
        .click(UserStatusBarSelector.elements.SystemDiagnostics,function(result){
            browser
            .waitForElementVisible(UserStatusBarSelector.elements.SystemDiagnosticsPage, 4000)
        })
      })


    .pause(1000); 

}
//Check if "Log Out" Link takes you to correct page
exports.LogOutLink = (browser) =>{
    var LogOut = browser.page.UserStatusBarSelector();
    LogOut
    .waitForElementVisible('body', 4000) // wait till page loads
    .waitForElementVisible(UserStatusBarSelector.elements.UserMenuDropdown)
      .click(UserStatusBarSelector.elements.UserMenuDropdown,function(result){
          browser
        .waitForElementVisible(UserStatusBarSelector.elements.LogOut, 4000)
        .click(UserStatusBarSelector.elements.LogOut,function(result){
            browser
            .waitForElementVisible(UserStatusBarSelector.elements.SignInTitle, 4000)
        })
      })


    .pause(1000); 

}