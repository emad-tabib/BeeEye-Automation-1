const FlowsSelector = require("../Selectors/FlowsSelector");
const {
  assert
} = require('chai').assert
const {
  expect
} = require('chai')
const configrationReader = require("../utils/configrationReader");
const FlowName = require("../utils/FlowName");
const setup = require("../utils/setup");
const screenShotUtils = require("../utils/screenShotUtils");
const logReport = require("mochawesome-screenshots/logReport")

exports.LastConfiguringStep = (browser) => {
    browser
        //.click(FlowsSelector.elements.NavFlows)
        .assert.elementPresent(FlowsSelector.elements.FlowNameonBackButton)
        .assert.getText(FlowsSelector.elements.FlowNameonBackButton, function (result) {
            const TextFlow = result;
        })
        .click(FlowsSelector.elements.NavFlows)
        .elements('css selector', FlowsSelector.elements.FlowMemberinthelist, (results) => {
            for (let i = 0; i < results.value.length; i++) {
                //console.log("length"+results.value.length+"yes")
                browser
                    .assert.getAttribute(results.value[i].ELEMENT, 'title', function (result) {
                        browser
                            .assert.equal(result.value, TextFlow, 'The assertion failed')
                    })

            }
        })
}

exports.LabelSection = (browser) => {
    browser
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .waitForElementVisible(FlowsSelector.elements.SelectLabelInput, 'Test was failed because Label Input was not displayed in the flow page')
        .assert.elementPresent(FlowsSelector.elements.SelectLabelInput, 'The assertion failed because Label Input was not displayed in the flow page')
}