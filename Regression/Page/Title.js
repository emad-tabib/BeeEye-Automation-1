const {
  assert
} = require('chai').assert
const {
  expect
} = require('chai')


exports.getTitle = (browser) => {
  var login = browser.page.loginSelectors();
  login
    .waitForElementVisible('body', 4000) // wait till page loads
    .getTitle(function (title) {
      console.log("Page title is: " + title);
      this.assert.ok(title.includes("EyeOnRisk"));
    })

}
