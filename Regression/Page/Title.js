const configrationReader = require("../utils/configrationReader");
const {
  assert
} = require('chai').assert
const {
  expect
} = require('chai')


exports.getTitle = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .getTitle(function (title) {
      console.log("Page title is: " + title);
      this.assert.ok(title.includes("EyeOnRisk"));
    })

}
