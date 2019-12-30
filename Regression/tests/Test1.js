const url = 'http://todomvc.com/examples/react/#/';
const { assert } = require('chai')
const { expect } = require('chai')



module.exports = {
	before : function(browser) {
    console.log('Setting up...');
  },

  after : function(browser) {
    console.log('Closing down...');
  },

  beforeEach : function(browser) {

  },

  afterEach : function(browser) {

  },
	
  'Caret down completes all tasks if none is selected'(browser) {
    browser
      .url(url)
      .waitForElementVisible('.header h1')
      .setValue('.new-todo', 'My new task')
      .keys(browser.Keys.ENTER)
      .setValue('.new-todo', 'My other new task')
      .keys(browser.Keys.ENTER)
      .click('.filters > li:nth-child(5) > a:nth-child(1)')
      .assert.containsText('.todo-count', '2 items left')
      .end();
  },
  'step one: navigate to ecosia.org': function (browser) {
    browser
      .url('https://www.ecosia.org')
	  .fullscreenWindow()
	  .waitForElementVisible('body')
      .assert.titleContains('Ecosia')
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', 'nightwatch')
      .assert.visible('button[type=submit]');
  },

  'step two: click submit' : function (browser) {
    browser
      .click('button[type=submit]')
      .assert.containsText('.mainline-results', 'Nightwatch.js')
      .end();
  }
};
