//This code to Test if Best Flow(GINI)section, Top Flows section,System Statistics section, Platform Statistics section, Recent Viewed Flows section is display or not
const DashboardSelector = require("../Selectors/DashboardSelector");
const configrationReader = require("../utils/configrationReader");
const {
    assert
} = require('chai').assert
const {
    expect
} = require('chai')


//Check the Left side in Dashboard page if Best Flow(GINI) section and Top Flows section are display or not
exports.LeftSideInDashboardPage = (browser) => {
    browser
        //wait the body to be loadded 
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        //check if the Left side is display in the Dashboard page
        .waitForElementVisible(DashboardSelector.elements.left, configrationReader.getPeriod(), 'Test was failed because the left section was not found in Dashboard Page')
        .assert.elementPresent(DashboardSelector.elements.left, 'The assertion failed because the left section was not found in Dashboard Page')
        // check if Best Flow(GINI)is display in the Left side
        .waitForElementVisible(DashboardSelector.elements.BestFlowCard, 'Test was  failed because the card which contains Best Flow(GINI) is not exists')
        .assert.elementPresent(DashboardSelector.elements.BestFlowCard, 'The assertion failed because the card which contains Best Flow(GINI) is not exists')
        //Check if the card contains this title : Best Flow(GINI)
        .assert.containsText(DashboardSelector.elements.SmallCardForBestFlow, 'Best Flow(GINI)', 'The assertion failed because the card does not contain Best Flow(GINI)')
        // check if Top Flows is display in the Left side
        .waitForElementVisible(DashboardSelector.elements.TopFlowsCard, 'Test was failed because the card which contains Top Flows is not exists')
        .assert.elementPresent(DashboardSelector.elements.TopFlowsCard, 'The assertion failed because the card which contains Top Flows is not exists')
        //get pause value
        .pause(configrationReader.getPauseValue())
        //Check if the card contains this title : Top Flows
        .assert.containsText(DashboardSelector.elements.BigCardForTopFlows, 'Top Flows', 'The assertion failed because the card does not contain Top Flows')

}


//Check the Center side in Dashboard page if System Statistics section and Platform Statistics section are display or not
exports.CenterSideInDashboardPage = (browser) => {
    browser
        //wait the body to be loadded
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        //check if the Center side is display in the Dashboard page
        .waitForElementVisible(DashboardSelector.elements.center, 'Test was failed because the center section was not found in Dashboard Page')
        .assert.elementPresent(DashboardSelector.elements.center, 'The assertion failed because the center section was not found in Dashboard Page')
        // check if System Statistics is display in the Center side
        .waitForElementVisible(DashboardSelector.elements.SystemStatisticsCard, 'Test was failed because the card which contains System Statistics is not exists')
        .assert.elementPresent(DashboardSelector.elements.SystemStatisticsCard, 'The assertion failed because the card which contains System Statistics is not exists')
        //Check if the card contains this title : System Statistics
        .assert.containsText(DashboardSelector.elements.center, 'System Statistics', 'The assertion failed because the card does not contain System Statistics')
        // check if Platform Statistics is display in the Center side
        .waitForElementVisible(DashboardSelector.elements.PlatformStatisticsCard, 'Test was failed because the card which contains Platform Statistics is not exists')
        .assert.elementPresent(DashboardSelector.elements.PlatformStatisticsCard, 'The assertion failed because the card which contains Platform Statistics is not exists')
        //get pause value
        .pause(configrationReader.getPauseValue())
        //Check if the card contains this title : Platform Statistics
        .assert.containsText(DashboardSelector.elements.center, 'Platform Statistics', 'The assertion failed because the card does not contain Platform Statistics');
}


//Check the Right side in Dashboard page if Recent Viewed Flows is display or not
exports.RightSideInDashboardPage = (browser) => {
    browser
        //wait the body to be loadded
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        //check if the Right side is display in the Dashboard page
        .waitForElementVisible(DashboardSelector.elements.right, 'Test was failed because the right section was not found in Dashboard Page')
        .assert.elementPresent(DashboardSelector.elements.right, 'The assertion failed because the right section was not found in Dashboard Page')
        // check if Recent Viewed Flows is display in the Right side
        .waitForElementVisible(DashboardSelector.elements.RecentViewedFlowsCard, 'Test was failed because the card which contains RecentViewedFlows is not exists')
        .assert.elementPresent(DashboardSelector.elements.RecentViewedFlowsCard, 'The assertion failed because the card which contains RecentViewedFlows is not exists')
        //get pause value
        .pause(configrationReader.getPauseValue())
        //Check if the card contains this title : Recent Viewed Flows
        .assert.containsText(DashboardSelector.elements.RecentViewedFlowsCard, 'Recent Viewed Flows', 'The assertion failed because the card does not contain Recent Viewed Flows');
}