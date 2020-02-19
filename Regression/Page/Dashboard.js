const DashboardSelector = require("../Selectors/DashboardSelector");
const configrationReader = require("../utils/configrationReader");
const {
    assert
} = require('chai').assert
const {
    expect
} = require('chai')


//Left
exports.LeftSideInDashboardPage = (browser) => {
    browser
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .waitForElementVisible(DashboardSelector.elements.left, configrationReader.getPeriod(),'Test was failed because the left section was not found in Dashboard Page')
        .assert.elementPresent(DashboardSelector.elements.left,'Test was failed because the left section was not found in Dashboard Page')

        .waitForElementVisible(DashboardSelector.elements.BestFlowCard,'Test was  failed because the card which contains Best Flow(GINI) is not exists' )
        .assert.elementPresent(DashboardSelector.elements.BestFlowCard,'Test was failed because the card which contains Best Flow(GINI) is not exists')

        .assert.containsText(DashboardSelector.elements.SmallCardForBestFlow, 'Best Flow(GINI)', 'Test was failed because the card does not contain Best Flow(GINI)')

        .waitForElementVisible(DashboardSelector.elements.TopFlowsCard,'Test was failed because the card which contains Top Flows is not exists')
        .assert.elementPresent(DashboardSelector.elements.TopFlowsCard,'Test was failed because the card which contains Top Flows is not exists')

        .pause(configrationReader.getPauseValue())
        .assert.containsText(DashboardSelector.elements.BigCardForTopFlows, 'Top Flows' , 'Test was failed because the card does not contain Top Flows')
     
}


//Center
exports.CenterSideInDashboardPage = (browser) => {
    browser
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .waitForElementVisible(DashboardSelector.elements.center,'Test was failed because the center section was not found in Dashboard Page')
        .assert.elementPresent(DashboardSelector.elements.center,'Test was failed because the center section was not found in Dashboard Page')

        .waitForElementVisible(DashboardSelector.elements.SystemStatisticsCard,'Test was failed because the card which contains System Statistics is not exists')
        .assert.elementPresent(DashboardSelector.elements.SystemStatisticsCard,'Test was failed because the card which contains System Statistics is not exists')

       .assert.containsText(DashboardSelector.elements.center, 'System Statistics','Test was failed because the card does not contain System Statistics')

        .waitForElementVisible(DashboardSelector.elements.PlatformStatisticsCard , 'Test was failed because the card which contains Platform Statistics is not exists')
        .assert.elementPresent(DashboardSelector.elements.PlatformStatisticsCard , 'Test was failed because the card which contains Platform Statistics is not exists')

        .pause(configrationReader.getPauseValue())
        .assert.containsText(DashboardSelector.elements.center, 'Platform Statistics', 'Test was failed because the card does not contain Platform Statistics');
}
  

//Right
exports.RightSideInDashboardPage = (browser) => {
    browser
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .waitForElementVisible(DashboardSelector.elements.right,'Test was failed because the right section was not found in Dashboard Page')
        .assert.elementPresent(DashboardSelector.elements.right,'Test was failed because the right section was not found in Dashboard Page')

        .waitForElementVisible(DashboardSelector.elements.RecentViewedFlowsCard, 'Test was failed because the card which contains RecentViewedFlows is not exists')
        .assert.elementPresent(DashboardSelector.elements.RecentViewedFlowsCard, 'Test was failed because the card which contains RecentViewedFlows is not exists')
        .pause(configrationReader.getPauseValue())
        .assert.containsText(DashboardSelector.elements.RecentViewedFlowsCard, 'Recent Viewed Flows','Test was failed because the card does not contain Recent Viewed Flows' );
}