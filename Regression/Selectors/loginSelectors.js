  module.exports = {
    elements: {
      email: {
        selector: '.formfield_username   > input'
      },
      password: {
        selector: '//*[@id="dwfrm_login_password"]', //'#dwfrm_login_password'
        locateStrategy: 'xpath'
      },
      signInBtn: {
        selector: '#dwfrm_login>fieldset>.formfield>.submit_button'
      }
    }
  };