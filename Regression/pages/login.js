const loginSelectors =require("../selectors/loginSelector");

exports.fillUserDetails = (browser) =>{
    browser 
    .url('https://www.lancome-usa.com/register') // Go to a url
    .waitForElementVisible('body', 2000) // wait till page loads
    .assert.title('Create account') // Make sure Site title matches
    .setValue(loginSelectors.email, 'email') // send values
    .setValue(loginSelectors.password, 'password') // send values
    .click(loginSelectors.signInBtn)
    .pause(1000)
    .end();
}
