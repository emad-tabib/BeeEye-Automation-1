const FlowsSelector = require("../Selectors/FlowsSelector");
const {
  assert
} = require('chai').assert
const {
  expect
} = require('chai')
const configrationReader = require("../utils/configrationReader");
const FlowName = require("../utils/FlowName");
//create new flow
exports.CreateNewFlow = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    //Click on Flows Link in Navigation Bar
    .click(FlowsSelector.elements.NavFlows)
    .waitForElementVisible(FlowsSelector.elements.AddFlowBtn)
    //Click on "+" Add flow button
    .click(FlowsSelector.elements.AddFlowBtn, function (result) {
      browser
        //pop up will appear to write the name of the new flow
        .waitForElementVisible(FlowsSelector.elements.PopUp)
        .waitForElementVisible(FlowsSelector.elements.FlowNameInput)
         //Add random number to the name of the new flow
        .setValue(FlowsSelector.elements.FlowNameInput, FlowName.getThenameOfTheNewFlow())
        .keys(browser.Keys.ENTER)
    })
    //Check if back button is display To check if creating Flow is done successfully
    .waitForElementVisible(FlowsSelector.elements.BackButton, configrationReader.getPeriod())
    .waitForElementVisible(FlowsSelector.elements.FlowNameonBackButton)
    .waitForElementVisible(FlowsSelector.elements.DataSourcesButton)
    .pause(configrationReader.getPauseValue());
}



//Edit flow
exports.EditFlow = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    //Click on Flows Link in Navigation Bar
    .click(FlowsSelector.elements.NavFlows, function (result) {
      browser
        //In flow card click on ":" to see the menu
        .click(FlowsSelector.elements.FlowMenu, function (result) {
          browser
            //click on Edit Link
            .click(FlowsSelector.elements.Edit, function (result) {
              browser
                //after you click on "edit" link , the flow should open and thats test by check if DataSorce button is display or not
                .waitForElementVisible(FlowsSelector.elements.DataSourcesButton)
            })
        })
    })

    .pause(configrationReader.getPauseValue());
}


//Delete Flow
exports.DeleteFlow = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    //Click on Flows Link in Navigation Bar
    .click(FlowsSelector.elements.NavFlows, function (result) {
      browser
        .assert.visible(FlowsSelector.elements.FlowMenu)
        .click(FlowsSelector.elements.FlowMenu, function (result) {
          browser
            .assert.visible(FlowsSelector.elements.Edit)
            .assert.visible(FlowsSelector.elements.Delete)
            .assert.visible(FlowsSelector.elements.Copy)
            .click(FlowsSelector.elements.Delete)
        })
    })

    .pause(configrationReader.getPauseValue());
}


// Card in Flows Page
exports.FlowCard = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .click(FlowsSelector.elements.NavFlows, function (result) {
      browser
        .assert.visible(FlowsSelector.elements.FlowCount)
        .assert.visible(FlowsSelector.elements.CardBodyChart)
        .assert.visible(FlowsSelector.elements.CardBodyInfo)
        .assert.visible(FlowsSelector.elements.Author)
        .assert.visible(FlowsSelector.elements.FlowName)
        .assert.containsText(FlowsSelector.elements.CardBodyChart, 'GINI')

    })


    .pause(configrationReader.getPauseValue());
}

//Sort By anme
exports.SortByName = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .click(FlowsSelector.elements.NavFlows, function (result) {
      browser
        .click(FlowsSelector.elements.SpanForName)
    })
    .pause(configrationReader.getPauseValue());
}

//Sort by Gini
exports.SortByGini = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .click(FlowsSelector.elements.NavFlows, function (result) {
      browser
        .click(FlowsSelector.elements.SpanForGini)
    })
    .pause(configrationReader.getPauseValue());
}

//Sort by Date Created
exports.SortByDateCreated = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .click(FlowsSelector.elements.NavFlows, function (result) {
      browser
        .click(FlowsSelector.elements.SpanForDatecreated)

    })
    .pause(configrationReader.getPauseValue());
}

//no file chosen
exports.NoFileChosen = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(FlowsSelector.elements.UploadBtn)
    .assert.containsText(FlowsSelector.elements.EmptyInput, 'No file chosen')
    .pause(configrationReader.getPauseValue());
}

//extension of the file not csv
exports.ExtensionOfTheFileUploaded = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(FlowsSelector.elements.UploadBtn)
        .setValue('input[type="file"]', require('path').resolve(__dirname + '/Data/NotCorrectExtensionOfTheFileUploaded.txt'))
        .assert.containsText(FlowsSelector.elements.ErrorInput, 'Selected file type not allowed')
    .pause(configrationReader.getPauseValue());
}

//Upload File
exports.UploadFile = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(FlowsSelector.elements.UploadBtn)
        .setValue('input[type="file"]', require('path').resolve(__dirname + '/Data/UCI_Credit_Card.csv'))
    .pause(configrationReader.getPauseValue());
}

//Check after You upload the file, if File Information section have the correct data and check Data if are display in Preview Data section
exports.CheckDataAfterYouUploadFile = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(FlowsSelector.elements.FileInformation)
    .waitForElementVisible(FlowsSelector.elements.Name)
    .waitForElementVisible(FlowsSelector.elements.Type)
    .waitForElementVisible(FlowsSelector.elements.Columns)
    .assert.containsText(FlowsSelector.elements.NameOfThefile, configrationReader.getTheFileInformation_Name())
    .assert.containsText(FlowsSelector.elements.NumberOfColumns, configrationReader.getTheFileInformation_Columns())
    .assert.containsText(FlowsSelector.elements.TypeOfTheFile, configrationReader.getTheFileInformation_Type())

    .waitForElementVisible(FlowsSelector.elements.PreviewData)
    .waitForElementVisible(FlowsSelector.elements.Table)
    .waitForElementVisible(FlowsSelector.elements.TableRowItem)

    .pause(configrationReader.getPauseValue());
}

//Not valid Label
exports.SelectNotValidLabel = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(FlowsSelector.elements.SelectLabelInput)
    .click(FlowsSelector.elements.SelectLabelInput, function (result) {
      browser
        .waitForElementVisible(FlowsSelector.elements.LabelMenuVisible)
        .click(FlowsSelector.elements.NotCorrectLabel, function (result) {
          browser
            .waitForElementVisible(FlowsSelector.elements.LabelWarning)
        })
    })
    .pause(configrationReader.getPauseValue());
}

//Valid Label
exports.SelectValidLabel = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(FlowsSelector.elements.SelectLabelInput)
    .click(FlowsSelector.elements.SelectLabelInput, function (result) {
      browser
        .waitForElementVisible(FlowsSelector.elements.LabelMenuVisible)
        .click(FlowsSelector.elements.CorrectLabel, function (result) {
          browser
            .waitForElementVisible(FlowsSelector.elements.PieChart)
        })
    })
    .pause(configrationReader.getPauseValue());
}

//Run DataSources
exports.RunDataSources = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(FlowsSelector.elements.DataSourcesButton)
    .click(FlowsSelector.elements.DataSourcesButton)
    //,function(result){
    //browser
    //.click(FlowsSelector.elements.TransformationButton)
    //.waitForElementVisible(FlowsSelector.elements.MsgInTransformation,configrationReader.getPeriod(),false)


    .pause(configrationReader.getPauseValue());
}

//Verify No error displayed in the log file
exports.VerifyTheLogFile = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    .waitForElementVisible(FlowsSelector.elements.FlowLogButton, configrationReader.getPeriod())
    .click(FlowsSelector.elements.FlowLogButton)
    .waitForElementNotPresent(FlowsSelector.elements.LogError, configrationReader.getPeriod())
    .pause(configrationReader.getPauseValue());
}

//general method  to reduce the duplicate code 
exports.CreateNewFlowAndUploadFile = (browser) => {
  browser
    .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
    //Click on Flows Link in Navigation Bar
    .click(FlowsSelector.elements.NavFlows)
    .waitForElementVisible(FlowsSelector.elements.AddFlowBtn)
    //Click on "+" Add flow button
    .click(FlowsSelector.elements.AddFlowBtn, function (result) {
      browser
        //pop up will appear to write the name of the new flow
        .waitForElementVisible(FlowsSelector.elements.PopUp)
        .waitForElementVisible(FlowsSelector.elements.FlowNameInput)
         //Add random number to the name of the new flow
        .setValue(FlowsSelector.elements.FlowNameInput, FlowName.getThenameOfTheNewFlow())
        .keys(browser.Keys.ENTER)
    })
    //Check if back button is display To check if creating Flow is done successfully
    .waitForElementVisible(FlowsSelector.elements.BackButton, configrationReader.getPeriod())
    .waitForElementVisible(FlowsSelector.elements.FlowNameonBackButton)
    .waitForElementVisible(FlowsSelector.elements.DataSourcesButton)
    .pause(configrationReader.getPauseValue())
.waitForElementVisible(FlowsSelector.elements.UploadBtn)
        .setValue('input[type="file"]', require('path').resolve(__dirname + '/Data/UCI_Credit_Card.csv'))
        .pause(configrationReader.getPauseValue());
    }

