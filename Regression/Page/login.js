const loginSelectors =require("../Selectors/loginSelectors");
const { assert } = require('chai').assert
const { expect } = require('chai')

//login without password
exports.LoginWithoutPassword = (browser) =>{
    //browser 
    //.url('http://10.20.20.88/') // Go to a url
    var login = browser.page.loginSelectors();
    login
    .waitForElementVisible('body', 2000) // wait till page loads
    .getTitle(function(title) {
        console.log("Page title is: "+title);
        this.assert.ok(title.includes("EyeOnRisk"));
      })
    .setValue(loginSelectors.elements.email, 'itg') // send values
    .setValue(loginSelectors.elements.password, '') // send values
    .click(loginSelectors.elements.signInBtn)
     //.expect.element(loginSelectors.elements.password).text.to.contain('passw0rd123')

  
    
    //.pause(1000); 

}


//login Without username
exports.LoginWithoutUsername = (browser) =>{
    //browser 
    //.url('http://10.20.20.88/') // Go to a url
   var login = browser.page.loginSelectors();
    login
    .waitForElementVisible('body', 2000) // wait till page loads
    .getTitle(function(title) {
        console.log("Page title is: "+title);
        this.assert.ok(title.includes("EyeOnRisk"));
      })
    .setValue(loginSelectors.elements.email, '') // send values
    .setValue(loginSelectors.elements.password, 'passw0rd123') // send values
    .click(loginSelectors.elements.signInBtn)
    //.expect.element(loginSelectors.elements.email).text.to.contain('itg')
    //.expect.element(loginSelectors.elements.UserMenu).text.to.contain('itg')
    //.pause(1000); 

}

//login With wrong password
exports.LoginWithWrongPassword = (browser) =>{
    //browser 
    //.url('http://10.20.20.88/') // Go to a url
    var login = browser.page.loginSelectors();
    login
    .waitForElementVisible('body', 2000) // wait till page loads
    .getTitle(function(title) {
        console.log("Page title is: "+title);
        this.assert.ok(title.includes("EyeOnRisk"));
      })
    .setValue(loginSelectors.elements.email, 'itg') // send values
    .setValue(loginSelectors.elements.password, 'jj') // send values
    .click(loginSelectors.elements.signInBtn)
    //.expect.element(loginSelectors.elements.password).text.to.contain('passw0rd123')
    //.pause(1000); 

}
//login with wrong username
exports.LoginWithWrongUsername = (browser) =>{
    browser 
    .url('http://10.20.20.88/') // Go to a url
    var login = browser.page.loginSelectors();
    login
    .waitForElementVisible('body', 2000) // wait till page loads
    .getTitle(function(title) {
        console.log("Page title is: "+title);
        this.assert.ok(title.includes("EyeOnRisk"));
      })
    .setValue(loginSelectors.elements.email, 'user') // send values
    .setValue(loginSelectors.elements.password, 'passw0rd123') // send values
    .click(loginSelectors.elements.signInBtn)
    //.expect.element(loginSelectors.elements.email).text.to.contain('itg')
    //.pause(1000); 

}

//login with valid information
exports.LoginWitValidInformation = (browser) =>{
  //browser 
  //.url('http://10.20.20.88/') // Go to a url
  var login = browser.page.loginSelectors();
  login
  .waitForElementVisible('body', 2000) // wait till page loads
  .getTitle(function(title) {
      console.log("Page title is: "+title);
      this.assert.ok(title.includes("EyeOnRisk"));
    })
  .setValue(loginSelectors.elements.email, 'itg') // send values
  .setValue(loginSelectors.elements.password, 'passw0rd123') // send values
  .click(loginSelectors.elements.signInBtn)
  .expect.element(loginSelectors.elements.UserMenu).text.to.contain('itg')
  //.pause(1000); 

}

