const url = 'https://www.lancome-usa.com/';
// const { assert } = require('chai')
// const { expect } = require('chai')
const loginSelectors =require("../selectors/loginSelector");
const loginPage =require("../pages/login");


module.exports = {
	before : function(browser) {
    console.log('Setting up...');
  },

  after : function(browser) {
    console.log('Closing down...');
  },

  beforeEach : function(browser) {

  },

  afterEach : function(browser) {

  },
  'Fill user details' : function (browser) {
    loginPage.fillUserDetails(browser);
  }

};
