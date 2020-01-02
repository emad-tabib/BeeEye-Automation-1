const url = 'https://www.lancome-usa.com/';
const loginPage = require("../pages/login");
const logReport = require("mochawesome-screenshots/logReport");
const { assert } = require('chai')
const { expect } = require('chai')

describe('Login', function () {

  // before(function (browser, done) {
  //   done();
  // });

  // after(function (browser, done) {
  //   console.log("\n\n\n\n\n\ndone\n\n\n\n\n\n");
  //   done();
  // });




  it('Fill user details', function (browser) {
    logReport.log(this, "this is log");
    loginPage.fillUserDetails(browser);
  });
});



