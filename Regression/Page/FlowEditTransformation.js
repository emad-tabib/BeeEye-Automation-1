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



//Create Transformation function
exports.CreateTransformationFunction = (browser) => {
    browser
        // click on escape to close the Log Window
        .keys(browser.Keys.ESCAPE)
        //wait the body to be loadded 
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .assert.elementPresent(FlowEditTransformationsSelector.elements.TransformationTabLink, 'The assertion failed because Transformation Tab was not displayed in Transformation Page')
        .click(FlowEditTransformationsSelector.elements.TransformationTabLink)
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowEditTransformationsSelector.elements.AddTransformationButton, 'The assertion failed because Add Transformation button was not displayed in Transformation Page')
}

//select Transformation Function
exports.SelectTransformationFunction = (browser) => {
    browser
        .assert.elementPresent(FlowEditTransformationsSelector.elements.BuiltInTypeList, 'The assertion failed because Built In Type List was not displayed in Transformation Page After you click on Add Transformation Button')
        .click(FlowEditTransformationsSelector.elements.BuiltInTypeList)
        .pause(configrationReader.getPauseValue())
        .setValue(FlowEditTransformationsSelector.elements.BuiltInTypeList, configrationReader.getTransformationFunction())
        .keys(browser.Keys.ENTER)
        .pause(configrationReader.getDelayValue())
        .assert.elementPresent(FlowEditTransformationsSelector.elements.FirstInputFeaturesList, 'The assertion failed because First Input Feature List was not displayed after you select the type of transformation function')
        .click(FlowEditTransformationsSelector.elements.FirstInputFeaturesList)
        .setValue(FlowEditTransformationsSelector.elements.FirstInputFeaturesList, configrationReader.getFeature())
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.FirstElementInFirstList)
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowEditTransformationsSelector.elements.SecondInputFeatureList, 'The assertion failed because Second Input Feature List was not displayed after you select the type of transformation function')
        .click(FlowEditTransformationsSelector.elements.SecondInputFeatureList)
        .setValue(FlowEditTransformationsSelector.elements.SecondInputFeatureList, configrationReader.getFeature())
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.FirstElementInSecondList)
        .pause(configrationReader.getPauseValue())
        //.assert.not.elementPresent(FlowsSelector.elements.SubmitTransformationButtonDisabled)
        .assert.elementPresent(FlowEditTransformationsSelector.elements.SubmitTransformationButton)
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.SubmitTransformationButton)
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.TransformationButton)

}

//Display Data after run transformation
exports.DisplayDataforTransformationFunction = (browser) => {
    browser
        //The reson for this step is the issue in EYEON-127
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.AddTransformationButton)
        .pause(configrationReader.getPauseValue())
        .click(FlowEditTransformationsSelector.elements.ActiveTransformationFunction)
        .pause(configrationReader.getPauseValue())
        .assert.elementPresent(FlowEditTransformationsSelector.elements.ColumnsPreviewDataTable)
        .pause(configrationReader.getPauseValue())
        .getText(FlowEditTransformationsSelector.elements.ThirdElemntinFirstRow, function (result) {
            browser
                .assert.equal(result.value, '0', 'The assertion failed because the value was not equal zero after apply Subtract function on the same feature')
                .pause(configrationReader.getDelayValue())

        })
}