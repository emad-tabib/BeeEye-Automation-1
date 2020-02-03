const loginSelectors = require("../Selectors/loginSelectors");
const configrationReader = require("../utils/configrationReader");
const {
  assert
} = require('chai').assert
const {
  expect
} = require('chai')
const setup = require("../utils/setup");


//Login without password
exports.LoginWithoutPassword = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .setValue(loginSelectors.elements.email, configrationReader.getUserName()) // send values
    .setValue(loginSelectors.elements.password, '') // send values
    .click(loginSelectors.elements.signInBtn)
    .pause(configrationReader.getPauseValue());

}


//Login Without username
exports.LoginWithoutUsername = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .setValue(loginSelectors.elements.email, '') // send values
    .setValue(loginSelectors.elements.password, configrationReader.getPassword()) // send values
    .click(loginSelectors.elements.signInBtn)
    .pause(configrationReader.getPauseValue());

}

//Login With wrong password
exports.LoginWithWrongPassword = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .setValue(loginSelectors.elements.email, configrationReader.getUserName()) // send values
    .setValue(loginSelectors.elements.password, 'jj') // send values
    .click(loginSelectors.elements.signInBtn)
    .pause(configrationReader.getPauseValue());

}
//Login with wrong username
exports.LoginWithWrongUsername = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .setValue(loginSelectors.elements.email, 'user') // send values
    .setValue(loginSelectors.elements.password, configrationReader.getPassword()) // send values
    .click(loginSelectors.elements.signInBtn)
    .pause(configrationReader.getPauseValue());

}


//Login with valid information
exports.LoginWithValidInformation = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .setValue(loginSelectors.elements.email, configrationReader.getUserName()) // send values
    .setValue(loginSelectors.elements.password, configrationReader.getPassword()) // send values
    .click(loginSelectors.elements.signInBtn)
    .expect.element(loginSelectors.elements.UserMenu).text.to.contain(configrationReader.getUserName())


}