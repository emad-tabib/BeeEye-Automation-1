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
    .assert.elementPresent(loginSelectors.elements.email, 'Test was failed because the email field was not found in the Login Page')
    .setValue(loginSelectors.elements.email, configrationReader.getUserName()) // send values
    .assert.elementPresent(loginSelectors.elements.password, 'Test was failed because the password field was not found in the Login Page')
    .setValue(loginSelectors.elements.password, '') // send values
    .assert.elementPresent(loginSelectors.elements.signInBtn, 'Test was failed because the sign In Button was not found in the Login Page')
    .click(loginSelectors.elements.signInBtn)
    .assert.elementPresent(loginSelectors.elements.SignInTitle, 'Test was failed After you click on Sign in button because the login was successfully even though the login was without password')
    .assert.elementPresent(loginSelectors.elements.SignInError, 'Test was failed After you click on Sign in button because no error msg displayed even though the login was without password')
    .pause(configrationReader.getPauseValue());
}


//Login Without username
exports.LoginWithoutUsername = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .assert.elementPresent(loginSelectors.elements.email, 'Test was failed because the email field was not found in the Login Page')
    .setValue(loginSelectors.elements.email, '') // send values
    .assert.elementPresent(loginSelectors.elements.password, 'Test was failed because the password field was not found in the Login Page')
    .setValue(loginSelectors.elements.password, configrationReader.getPassword()) // send values
    .assert.elementPresent(loginSelectors.elements.signInBtn, 'Test was failed because the sign In Button was not found in the Login Page')
    .click(loginSelectors.elements.signInBtn)
    .assert.elementPresent(loginSelectors.elements.SignInTitle, 'Test was failed After you click on Sign in button because the login was successfully even though the login was Without username')
    .assert.elementPresent(loginSelectors.elements.SignInError, 'Test was failed After you click on Sign in button because no error msg displayed even though the login was without username')
    .pause(configrationReader.getPauseValue());

}

//Login With wrong password
exports.LoginWithWrongPassword = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .assert.elementPresent(loginSelectors.elements.email, 'Test was failed because the email field was not found in the Login Page')
    .setValue(loginSelectors.elements.email, configrationReader.getUserName()) // send values
    .assert.elementPresent(loginSelectors.elements.password, 'Test was failed because the password field was not found in the Login Page')
    .setValue(loginSelectors.elements.password, 'jj') // send values
    .assert.elementPresent(loginSelectors.elements.signInBtn, 'Test was failed because the sign In Button was not found in the Login Page')
    .click(loginSelectors.elements.signInBtn)
    .assert.elementPresent(loginSelectors.elements.SignInTitle, 'Test was failed After you click on Sign in button because the login was successfully even though the login was With wrong password')
    .assert.elementPresent(loginSelectors.elements.SignInError, 'Test was failed After you click on Sign in button because no error msg displayed even though the login was  With wrong password')
    .pause(configrationReader.getPauseValue());

}
//Login with wrong username
exports.LoginWithWrongUsername = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .assert.elementPresent(loginSelectors.elements.email, 'Test was failed because the email field was not found in the Login Page')
    .setValue(loginSelectors.elements.email, 'user') // send values
    .assert.elementPresent(loginSelectors.elements.password, 'Test was failed because the password field was not found in the Login Page')
    .setValue(loginSelectors.elements.password, configrationReader.getPassword()) // send values
    .assert.elementPresent(loginSelectors.elements.signInBtn, 'Test was failed because the sign In Button was not found in the Login Page')
    .click(loginSelectors.elements.signInBtn)
    .assert.elementPresent(loginSelectors.elements.SignInTitle, 'Test was failed After you click on Sign in button because the login was successfully even though the login was  With wrong username')
    .pause(configrationReader.getPauseValue())
    .assert.elementPresent(loginSelectors.elements.SignInError, 'Test was failed After you click on Sign in button because no error msg displayed even though the login was  With wrong username')
    

}


//Login with valid information
exports.LoginWithValidInformation = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .assert.elementPresent(loginSelectors.elements.email, 'Test was failed because the email field was not found in the Login Page')
    .setValue(loginSelectors.elements.email, configrationReader.getUserName()) // send values
    .assert.elementPresent(loginSelectors.elements.password, 'Test was failed because the password field was not found in the Login Page')
    .setValue(loginSelectors.elements.password, configrationReader.getPassword()) // send values
    .assert.elementPresent(loginSelectors.elements.signInBtn, 'Test was failed because the sign In Button was not found in the Login Page')
    .click(loginSelectors.elements.signInBtn)
    .pause(configrationReader.getPauseValue())
    .waitForElementVisible(loginSelectors.elements.UserMenu,configrationReader.getPeriod(),'Test was failed After you click on Sign in button because the login was not successfully even though the login was With Valid Information')
    .assert.containsText(loginSelectors.elements.UserMenu,configrationReader.getUserName(),'Test was failed After you click on Sign in button because the login was not successfully even though the login was With Valid Information') 
    

}
