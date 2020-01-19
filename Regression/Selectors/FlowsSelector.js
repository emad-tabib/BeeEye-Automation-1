module.exports = {
elements:{
    NavFlows : {
        selector: '#nav-menu-flows'
    },

 AddFlowBtn : {
    selector: '#add-flow-button'
 },


 PopUp : {
     selector: '.modal-background.d-flex'
 },

 FlowNameInput : {
     selector: '#enter-new-flow-name'
 },

 BackButton : {
     selector: '.flow-header-back'
 },

 DataSourcesButton : {
     selector: '#datasources-header-button'
 },

 FlowMenu : {
     selector: '.flow-status' 
 },

 Edit : {
     selector: '#edit'
 },

 Delete : {
     selector: '#delete'
 },
 
 Copy : {
     selector: '#copy'
 },


FlowCount : {
    selector: '.flow-count.fw-bold'
},

CardBodyChart : {
    selector: '.card-body-chart'
},

CardBodyInfo : {
    selector: '.card-body-info'
},

//CardHeader : '.card-header-custom',
Author : {
    selector: '.username-wrapper.mt-2'
},

FlowName : {
    selector: '.app-input-invisible.c-p.p-0'
},

Selected : {
    selector : '.sort-control-button.c-p.selected'
  
},

SpanForName : {
    selector : '/html/body/div/div/div/div[2]/div/div[1]/div[3]/div/span',
    locateStrategy: 'xpath'
},

SpanForGini : {
    selector : '/html/body/div/div/div/div[2]/div/div[1]/div[4]/div/span',
    locateStrategy: 'xpath'
},

SpanForDatecreated : {
    selector : '/html/body/div/div/div/div[2]/div/div[1]/div[5]/div/span',
    locateStrategy: 'xpath'

}
 }
};

