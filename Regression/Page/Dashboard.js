const DashboardSelector = require("../Selectors/DashboardSelector");
const {
    assert
} = require('chai').assert
const {
    expect
} = require('chai')


//Left
exports.LeftSideInDashboardPage = (browser) =>{
    var Dashboard = browser.page.DashboardSelector();
    Dashboard
    .waitForElementVisible('body', 4000) // wait till page loads
      .waitForElementVisible(DashboardSelector.elements.left)
      .waitForElementVisible(DashboardSelector.elements.SmallCard)
      .assert.containsText(DashboardSelector.elements.SmallCard, 'Best Flow(GINI)')

      .waitForElementVisible(DashboardSelector.elements.BigCard)
      .assert.containsText(DashboardSelector.elements.BigCard, 'Top Flows')
      .pause(1000); 
}


//Center
exports.CenterSideInDashboardPage = (browser) =>{
    var Dashboard = browser.page.DashboardSelector();
    Dashboard
    .waitForElementVisible('body', 4000) // wait till page loads
.waitForElementVisible(DashboardSelector.elements.center)

.waitForElementVisible(DashboardSelector.elements.SmallCard)
.assert.containsText(DashboardSelector.elements.center, 'System Statistics')

.waitForElementVisible(DashboardSelector.elements.BigCard)
.assert.containsText(DashboardSelector.elements.center, 'Platform Statistics')
    .pause(1000); 
}

//Right
exports.RightSideInDashboardPage = (browser) =>{
    var Dashboard = browser.page.DashboardSelector();
    Dashboard
    .waitForElementVisible('body', 4000) // wait till page loads
      .waitForElementVisible(DashboardSelector.elements.right)
      .waitForElementVisible(DashboardSelector.elements.RecentViewedFlows)
      .assert.containsText(DashboardSelector.elements.RecentViewedFlows, 'Recent Viewed Flows')
    .pause(1000); 
}