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
    .waitForElementVisible(UserStatusBarSelector.elements.UserLoggedInMenu, 'Test was failed because the User Status Bar was not found in the site')
    .assert.elementPresent(UserStatusBarSelector.elements.UserLoggedInMenu, 'The assertion failed because the User Status Bar was not found in the site')

    .waitForElementVisible(loginSelectors.elements.UserMenu, 'Test was failed because the Username text was not found in User Status Bar')
    .assert.elementPresent(loginSelectors.elements.UserMenu, 'The assertion failed because the Username text was not found in User Status Bar')

    .waitForElementVisible(UserStatusBarSelector.elements.UserMenuDropdown, 'Test was failed because the User Menu Avatar was not found in User Status Bar')
    .assert.elementPresent(UserStatusBarSelector.elements.UserMenuDropdown, 'The assertion failed because the User Menu Avatar was not found in User Status Bar')

    //to check if itg(According to what is the username) is display or not
    .assert.containsText(loginSelectors.elements.UserMenu, configrationReader.getUserName(), 'The assertion failed because the Username was not displayed in Username text')
    .click(UserStatusBarSelector.elements.UserMenuDropdown, function (result) {
      browser
        .waitForElementVisible(UserStatusBarSelector.elements.About, configrationReader.getPeriod(), 'Test was failed beacuse About Link was not found in the dropdown for User Status Bar')
        .assert.elementPresent(UserStatusBarSelector.elements.About, 'The assertion failed beacuse About Link was not found in the dropdown for User Status Bar')

        .waitForElementVisible(UserStatusBarSelector.elements.LogOut, configrationReader.getPeriod(), 'Test was failed beacuse LogOut Link was not found in the dropdown for User Status Bar')
        .assert.elementPresent(UserStatusBarSelector.elements.LogOut, 'The assertion failed beacuse LogOut Link was not found in the dropdown for User Status Bar')

        .waitForElementVisible(UserStatusBarSelector.elements.SystemDiagnostics, configrationReader.getPeriod(), 'Test was failed beacuse System Diagnostics Link was not found in the dropdown for User Status Bar')
        .assert.elementPresent(UserStatusBarSelector.elements.SystemDiagnostics, 'The assertion failed beacuse System Diagnostics Link was not found in the dropdown for User Status Bar')
    })


    .pause(configrationReader.getPauseValue());

}

//Check if "About" Link takes you to correct page
exports.AboutLink = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(UserStatusBarSelector.elements.UserMenuDropdown, 'Test was failed because the User Menu Avatar was not found in User Status Bar')
    .assert.elementPresent(UserStatusBarSelector.elements.UserMenuDropdown, 'The assertion failed because the User Menu Avatar was not found in User Status Bar')

    .click(UserStatusBarSelector.elements.UserMenuDropdown, function (result) {
      browser
        .waitForElementVisible(UserStatusBarSelector.elements.About, configrationReader.getPeriod(), 'Test was failed beacuse About Link was not found in the dropdown for User Status Bar when you click on user menu avatar')
        .assert.elementPresent(UserStatusBarSelector.elements.About, 'The assertion failed beacuse About Link was not found in the dropdown for User Status Bar when you click on user menu avatar')
        .click(UserStatusBarSelector.elements.About, function (result) {
          browser
            .waitForElementVisible(UserStatusBarSelector.elements.AboutPage, configrationReader.getPeriod(), 'Test was failed After you click on About Link because the link does not take you to About Page')
            .assert.elementPresent(UserStatusBarSelector.elements.AboutPage, 'The assertion failed After you click on About Link because the link does not take you to About Page')
        })
    })


    .pause(configrationReader.getPauseValue());

}

//Check if "system diagnostics" Link takes you to correct page
exports.SystemDiagnosticsLink = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(UserStatusBarSelector.elements.UserMenuDropdown, 'Test was failed because the User Menu Avatar was not found in User Status Bar')
    .assert.elementPresent(UserStatusBarSelector.elements.UserMenuDropdown, 'The assertion failed because the User Menu Avatar was not found in User Status Bar')

    .click(UserStatusBarSelector.elements.UserMenuDropdown, function (result) {
      browser
        .waitForElementVisible(UserStatusBarSelector.elements.SystemDiagnostics, configrationReader.getPeriod(), 'Test was failed beacuse System Diagnostics Link was not found in the dropdown for User Status Bar when you click on user menu avatar')
        .assert.elementPresent(UserStatusBarSelector.elements.SystemDiagnostics, 'The assertion failed beacuse System Diagnostics Link was not found in the dropdown for User Status Bar when you click on user menu avatar')
        .click(UserStatusBarSelector.elements.SystemDiagnostics, function (result) {
          browser
            .waitForElementVisible(UserStatusBarSelector.elements.SystemDiagnosticsPage, configrationReader.getPeriod(), 'Test was failed After you click on System Diagnostics Link because the link does not take you to System Diagnostics Page')
            .assert.elementPresent(UserStatusBarSelector.elements.SystemDiagnosticsPage, 'The assertion failed After you click on System Diagnostics Link because the link does not take you to System Diagnostics Page')
        })
    })


    .pause(configrationReader.getPauseValue());

}
//Check if "Log Out" Link takes you to correct page
exports.LogOutLink = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(UserStatusBarSelector.elements.UserMenuDropdown, 'Test was failed because the User Menu Avatar was not found in User Status Bar')
    .assert.elementPresent(UserStatusBarSelector.elements.UserMenuDropdown, 'The assertion failed because the User Menu Avatar was not found in User Status Bar')
    .click(UserStatusBarSelector.elements.UserMenuDropdown, function (result) {
      browser
        .waitForElementVisible(UserStatusBarSelector.elements.LogOut, configrationReader.getPeriod(), 'Test was failed beacuse LogOut Link was not found in the dropdown for User Status Bar when you click on user menu avatar')
        .assert.elementPresent(UserStatusBarSelector.elements.LogOut, 'The assertion failed beacuse LogOut Link was not found in the dropdown for User Status Bar when you click on user menu avatar')
        .click(UserStatusBarSelector.elements.LogOut, function (result) {
          browser
            .waitForElementVisible(UserStatusBarSelector.elements.SignInTitle, configrationReader.getPeriod(), 'Test was failed After you click on LogOut Link because the link does not take you to LogOut Page')
            .assert.elementPresent(UserStatusBarSelector.elements.SignInTitle, 'The assertion failed After you click on LogOut Link because the link does not take you to LogOut Page')
        })
    })


    .pause(configrationReader.getPauseValue());

}