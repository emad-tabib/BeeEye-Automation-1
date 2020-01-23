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

},

UploadBtn : {
    selector : '#uploadButton',
},

FileId : {
    selector : '#inputFileId',
},

EmptyInput : {
selector : '.input-empty',
},

ErrorInput : {
    selector : '.input-error',
},

FileInformation : {
    selector : '.source-info',
},

Name : {
    selector : '/html/body/div/div/div/div[2]/div/div[2]/div/div/div[2]/div[1]/div/ul/li[1]/strong',
    locateStrategy: 'xpath'
},

Type : {
    selector : '/html/body/div/div/div/div[2]/div/div[2]/div/div/div[2]/div[1]/div/ul/li[2]/strong',
    locateStrategy: 'xpath'
},

Columns : {
   selector : '/html/body/div/div/div/div[2]/div/div[2]/div/div/div[2]/div[1]/div/ul/li[3]/strong',
   locateStrategy: 'xpath'
},

NameOfThefile : {
    selector : '/html/body/div/div/div/div[2]/div/div[2]/div/div/div[2]/div[1]/div/ul/li[1]/span',
    locateStrategy: 'xpath'
},

TypeOfTheFile : {
    selector : '/html/body/div/div/div/div[2]/div/div[2]/div/div/div[2]/div[1]/div/ul/li[2]/span',
    locateStrategy: 'xpath'
},

NumberOfColumns : {
    selector : '/html/body/div/div/div/div[2]/div/div[2]/div/div/div[2]/div[1]/div/ul/li[3]/span',
    locateStrategy: 'xpath'
},

PreviewData : {
    selector : '#data-preview-button',
},

Table : {
    selector : '.custom-table',
},

TableRowItem : {
    selector : '.table-row-item'
},

SelectLabelInput : {
    selector : '#model-select-label',
},

LabelWarning : {
    selector : '#label-warning'
},

LabelMenuVisible : {
    selector : '.menu.visible'
},

NotCorrectLabel : {
    selector : '.item:nth-child(3)'
},

CorrectLabel : {
    selector : '.item:nth-child(2)',
},

PieChart : {
    selector : '#pie-chart'
},

DataSourcesButton : {
    selector : '#datasources-header-button-run',
},

TransformationButton : {
    selector : '#transformations-header-button',
},

FlowLogButton : {
   selector : '.d-flex.notifications-button',
},

LogError : {
  selector :'.pre-log.error-log'
 }
}
};

