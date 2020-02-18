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
        .waitForElementVisible(DashboardSelector.elements.left, configrationReader.getPeriod(),'Test is failed because the left section was not found in Dashboard Page')
        .assert.elementPresent(DashboardSelector.elements.left,'Test is failed because the left section was not found in Dashboard Page')

        .waitForElementVisible(DashboardSelector.elements.SmallCard,'Test is failed because the card which contains Best Flow(GINI) is not exists' )
        .assert.elementPresent(DashboardSelector.elements.SmallCard,'Test is failed because the card which contains Best Flow(GINI) is not exists')

        .assert.containsText(DashboardSelector.elements.SmallCard, 'Best Flow(GINI)', 'Test is failed because the card does not contain Best Flow(GINI)')

        .waitForElementVisible(DashboardSelector.elements.BigCard,'Test is failed because the card which contains Top Flows is not exists')
        .assert.elementPresent(DashboardSelector.elements.BigCard,'Test is failed because the card which contains Top Flows is not exists')

        .pause(configrationReader.getPauseValue())
        .assert.containsText(DashboardSelector.elements.BigCard, 'Top Flows' , 'Test is failed because the card does not contain Top Flows')
     
}


//Center
exports.CenterSideInDashboardPage = (browser) => {
    browser
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .waitForElementVisible(DashboardSelector.elements.center,'Test is failed because the center section was not found in Dashboard Page')
        .assert.elementPresent(DashboardSelector.elements.center,'Test is failed because the center section was not found in Dashboard Page')

        .waitForElementVisible(DashboardSelector.elements.SmallCard,'Test is failed because the card which contains System Statistics is not exists')
        .assert.elementPresent(DashboardSelector.elements.SmallCard,'Test is failed because the card which contains System Statistics is not exists')

        .assert.containsText(DashboardSelector.elements.center, 'System Statistics','Test is failed because the card does not contain System Statistics')

        .waitForElementVisible(DashboardSelector.elements.BigCard , 'Test is failed because the card which contains Platform Statistics is not exists')
        .assert.elementPresent(DashboardSelector.elements.BigCard , 'Test is failed because the card which contains Platform Statistics is not exists')

        .pause(configrationReader.getPauseValue())
        .assert.containsText(DashboardSelector.elements.center, 'Platform Statistics', 'Test is failed because the card does not contain Platform Statistics');
}

//Right
exports.RightSideInDashboardPage = (browser) => {
    browser
        .waitForElementVisible('body', configrationReader.getPeriod()) // wait till page loads
        .waitForElementVisible(DashboardSelector.elements.right,'Test is failed because the right section was not found in Dashboard Page')
        .assert.elementPresent(DashboardSelector.elements.right,'Test is failed because the right section was not found in Dashboard Page')

        .waitForElementVisible(DashboardSelector.elements.RecentViewedFlows, 'Test is failed because the card which contains RecentViewedFlows is not exists')
        .assert.elementPresent(DashboardSelector.elements.RecentViewedFlows, 'Test is failed because the card which contains RecentViewedFlows is not exists')
        .pause(configrationReader.getPauseValue())
        .assert.containsText(DashboardSelector.elements.RecentViewedFlows, 'Recent Viewed Flows','Test is failed because the card does not contain Recent Viewed Flows' );
}