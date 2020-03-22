const FlowEditTransformationsSelector = require("../Selectors/FlowEditTransformationsSelector");
const FlowsSelector = require("../Selectors/FlowsSelector");
const configrationReader = require("../utils/configrationReader");
const {
    assert
} = require('chai').assert
const {
    expect
} = require('chai')


//Verify Transformation are displayed and no errors in the log
//Run Transformation Tab
exports.RunTransformation = (browser) => {
    browser
        //wait the body to be loadded 
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .assert.elementPresent(FlowEditTransformationsSelector.elements.TransformationButton)
        .click(FlowEditTransformationsSelector.elements.TransformationButton)
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowEditTransformationsSelector.elements.TransformationTab)
        .click(FlowEditTransformationsSelector.elements.TransformationTab)
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowEditTransformationsSelector.elements.FeaturesTable)
        //get pause value
        .pause(configrationReader.getPauseValue())

}
//Check if there is an error in Log window after you run Transformation Tab
exports.CheckLogWindow = (browser) => {
    browser
        //wait the body to be loadded 
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .assert.elementPresent(FlowsSelector.elements.FlowLogButton)
        .click(FlowsSelector.elements.FlowLogButton, function (result) {
            browser
                .pause(configrationReader.getDelayValue())
                .elements('css selector', FlowEditTransformationsSelector.elements.WarningLog, (results) => {
                    if (results.value && results.value.ELEMENT) {
                        console.log('There is an error in the Log Window')
                    } else {
                        // Error is not present.
                        console.log('There is no error in the Log Window')
                    }
                })
        })
        .pause(configrationReader.getPauseValue())

}