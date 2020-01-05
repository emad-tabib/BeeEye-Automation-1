const loginSelectors =require("../Selectors/loginSelectors");
const { assert } = require('chai').assert
const { expect } = require('chai')

exports.fillUserDetails = (browser) =>{
    browser 
    .url('https://www.lancome-usa.com/register') // Go to a url
    .waitForElementVisible('body', 2000) // wait till page loads
    .getTitle(function(title) {
        console.log("Page title is: "+title);
        this.assert.ok(title.includes("Create account"));
      })
    .setValue(loginSelectors.email, 'email') // send values
    .setValue(loginSelectors.password, 'password') // send values
    .click(loginSelectors.signInBtn)
    .pause(1000); 
}