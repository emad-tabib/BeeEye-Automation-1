const FlowsSelector =require("../Selectors/FlowsSelector");
const { assert } = require('chai').assert
const { expect } = require('chai')
const configrationReader = require("../utils/configrationReader");

//create new flow
exports.CreateNewFlow = (browser) =>{
    var Flows = browser.page.FlowsSelector();
    Flows
    .waitForElementVisible('body', 4000) // wait till page loads
   //Flows then add flow button then pop up will appear
    .click(FlowsSelector.elements.NavFlows)
    .waitForElementVisible(FlowsSelector.elements.AddFlowBtn)
    .click(FlowsSelector.elements.AddFlowBtn , function(result) {
        browser
       .waitForElementVisible(FlowsSelector.elements.PopUp) 
       .waitForElementVisible(FlowsSelector.elements.FlowNameInput)
       .setValue(FlowsSelector.elements.FlowNameInput, configrationReader.getThenameOfTheNewFlow())
       .keys(browser.Keys.ENTER)
    })
    .waitForElementVisible(FlowsSelector.elements.BackButton)
    .assert.containsText(FlowsSelector.elements.BackButton, configrationReader.getThenameOfTheNewFlow())
    .waitForElementVisible(FlowsSelector.elements.DataSourcesButton)
    .pause(1000); 
}



//Edit flow
exports.EditFlow = (browser) =>{
    var Flows = browser.page.FlowsSelector();
    Flows
    .waitForElementVisible('body', 4000) // wait till page loads
.click(FlowsSelector.elements.NavFlows , function(result){
    browser
    .click(FlowsSelector.elements.FlowMenu , function(result){
        browser 
        .click(FlowsSelector.elements.Edit , function(result){
            browser
            .waitForElementVisible(FlowsSelector.elements.DataSourcesButton)
        })
   })
})
   
   .pause(1000); 
}


//Delete Flow
exports.DeleteFlow = (browser) =>{
    var Flows = browser.page.FlowsSelector();
    Flows
    .waitForElementVisible('body', 4000) // wait till page loads
      .click(FlowsSelector.elements.NavFlows , function(result){
        browser
    .assert.visible(FlowsSelector.elements.FlowMenu)
    .click(FlowsSelector.elements.FlowMenu , function(result){ 
            browser
            .assert.visible(FlowsSelector.elements.Edit)
            .assert.visible(FlowsSelector.elements.Delete)
            .assert.visible(FlowsSelector.elements.Copy)
            .click(FlowsSelector.elements.Delete)
        })
    })
      
   .pause(1000); 
}


// Card in Flows Page
exports.FlowCard = (browser) =>{
    var Flows = browser.page.FlowsSelector();
    Flows
    .waitForElementVisible('body', 4000) // wait till page loads
      .click(FlowsSelector.elements.NavFlows , function(result){
          browser 
        .assert.visible(FlowsSelector.elements.FlowCount)
        .assert.visible(FlowsSelector.elements.CardBodyChart)
        .assert.visible(FlowsSelector.elements.CardBodyInfo)
        .assert.visible(FlowsSelector.elements.Author)
        .assert.visible(FlowsSelector.elements.FlowName)
        .assert.containsText(FlowsSelector.elements.CardBodyChart , 'GINI')
        
      })
      

   .pause(1000); 
    }
    
    //sort
    exports.Sort = (browser) =>{
        var Flows = browser.page.FlowsSelector();
        Flows
        .waitForElementVisible('body', 4000) // wait till page loads
          .click(FlowsSelector.elements.NavFlows , function(result){
              
        if(assert.containsText(FlowsSelector.elements.Span,'Name')&& FlowsSelector.elements.Selected){

        }
        if(assert.containsText(FlowsSelector.elements.Span,'Gini')&& FlowsSelector.elements.Selected){

        }
        else if(assert.containsText(FlowsSelector.elements.Span,'Date created')&& FlowsSelector.elements.Selected){

        }
          })
          

    
       .pause(1000); 
        }
        