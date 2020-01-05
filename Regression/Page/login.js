const loginSelectors =require("../Selectors/loginSelectors");
const setup=require("../utils/setup");
const { assert } = require('chai').assert
const { expect } = require('chai')

exports.fillUserDetails = (browser) =>{

  setup.lunchBrowser(browser,'/register');
  
    browser 
    .getTitle(function(title) {
        console.log("Page title is: "+title);
        this.assert.ok(title.includes("Create account"));
      })
    .setValue(loginSelectors.email, 'email') // send values
    .setValue(loginSelectors.password, 'password') // send values
    .click(loginSelectors.signInBtn)
    .pause(1000); 
}