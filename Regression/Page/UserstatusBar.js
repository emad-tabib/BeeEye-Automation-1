const UserStatusBarSelector = require("../Selectors/UserStatusBarSelector");
const loginSelectors = require("../Selectors/loginSelectors");
const configrationReader = require("../utils/configrationReader");
const {
  assert
} = require('chai').assert
const {
  expect
} = require('chai')

//Check if the UserStatusBar is display or not
exports.IsUserStatusBarDisplay = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(UserStatusBarSelector.elements.UserLoggedInMenu)
    .assert.elementPresent(UserStatusBarSelector.elements.UserLoggedInMenu)

    .waitForElementVisible(loginSelectors.elements.UserMenu)
    .assert.elementPresent(loginSelectors.elements.UserMenu)

    .waitForElementVisible(UserStatusBarSelector.elements.UserMenuDropdown)
    .assert.elementPresent(UserStatusBarSelector.elements.UserMenuDropdown)

    //to check if itg(According to what is the username) is display or not
    .assert.containsText(loginSelectors.elements.UserMenu, configrationReader.getUserName())
    .click(UserStatusBarSelector.elements.UserMenuDropdown, function (result) {
      browser
        .waitForElementVisible(UserStatusBarSelector.elements.About, configrationReader.getPeriod())
        .assert.elementPresent(UserStatusBarSelector.elements.About)

        .waitForElementVisible(UserStatusBarSelector.elements.LogOut, configrationReader.getPeriod())
        .assert.elementPresent(UserStatusBarSelector.elements.LogOut)

        .waitForElementVisible(UserStatusBarSelector.elements.SystemDiagnostics, configrationReader.getPeriod())
        .assert.elementPresent(UserStatusBarSelector.elements.SystemDiagnostics)
    })


    .pause(configrationReader.getPauseValue());

}

//Check if "About" Link takes you to correct page
exports.AboutLink = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(UserStatusBarSelector.elements.UserMenuDropdown)
    .assert.elementPresent(UserStatusBarSelector.elements.UserMenuDropdown)

    .click(UserStatusBarSelector.elements.UserMenuDropdown, function (result) {
      browser
        .waitForElementVisible(UserStatusBarSelector.elements.About, configrationReader.getPeriod())
        .assert.elementPresent(UserStatusBarSelector.elements.About)
        .click(UserStatusBarSelector.elements.About, function (result) {
          browser
            .waitForElementVisible(UserStatusBarSelector.elements.AboutPage, configrationReader.getPeriod())
            .assert.elementPresent(UserStatusBarSelector.elements.AboutPage)
        })
    })


    .pause(configrationReader.getPauseValue());

}

//Check if "system diagnostics" Link takes you to correct page
exports.SystemDiagnosticsLink = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(UserStatusBarSelector.elements.UserMenuDropdown)
    .assert.elementPresent(UserStatusBarSelector.elements.UserMenuDropdown)

    .click(UserStatusBarSelector.elements.UserMenuDropdown, function (result) {
      browser
        .waitForElementVisible(UserStatusBarSelector.elements.SystemDiagnostics, configrationReader.getPeriod())
        .assert.elementPresent(UserStatusBarSelector.elements.SystemDiagnostics)
        .click(UserStatusBarSelector.elements.SystemDiagnostics, function (result) {
          browser
            .waitForElementVisible(UserStatusBarSelector.elements.SystemDiagnosticsPage, configrationReader.getPeriod())
            .assert.elementPresent(UserStatusBarSelector.elements.SystemDiagnosticsPage)
        })
    })


    .pause(configrationReader.getPauseValue());

}
//Check if "Log Out" Link takes you to correct page
exports.LogOutLink = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(UserStatusBarSelector.elements.UserMenuDropdown)
    .assert.elementPresent(UserStatusBarSelector.elements.UserMenuDropdown)
    .click(UserStatusBarSelector.elements.UserMenuDropdown, function (result) {
      browser
        .waitForElementVisible(UserStatusBarSelector.elements.LogOut, configrationReader.getPeriod())
        .assert.elementPresent(UserStatusBarSelector.elements.LogOut)
        .click(UserStatusBarSelector.elements.LogOut, function (result) {
          browser
            .waitForElementVisible(UserStatusBarSelector.elements.SignInTitle, configrationReader.getPeriod())
            .assert.elementPresent(UserStatusBarSelector.elements.SignInTitle)
        })
    })


    .pause(configrationReader.getPauseValue());

}