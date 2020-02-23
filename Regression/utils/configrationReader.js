const fs = require('file-system');
const ini = require('ini');
const config = ini.parse(fs.readFileSync(process.cwd() + '/config.ini', 'utf-8'));

exports.getUrl = () => {
    var url = config.url;
    return url;
}

//for Login with valid Information
exports.getUserName = () => {
    var username = config.username;
    return username;
}

exports.getPassword = () => {
    var password = config.password;
    return password;
}

//For Data display after You Uploaded File
exports.getTheFileInformation_Name = () => {
    var nameOfTheUploadedFile = config.nameOfTheUploadedFile;
    return nameOfTheUploadedFile;
}

exports.getTheFileInformation_Columns = () => {
    var numberOfcolumnsinFileUploaded = config.numberOfcolumnsinFileUploaded;
    return numberOfcolumnsinFileUploaded;
}

exports.getTheFileInformation_Type = () => {
    var typeOfFileUploaded = config.typeOfFileUploaded;
    return typeOfFileUploaded;
}


//Period for WaitForElementVisible
exports.getPeriod = () => {
    var waitPeriodToBeVisible = config.waitPeriodToBeVisible;
    return waitPeriodToBeVisible;
}

//Pause Value
exports.getPauseValue = () => {
    var pauseValue = config.pauseValue;
    return pauseValue;
}

//Error  msg
exports.DisplayError = () => {
    var err = config.err;
    return err;
}

//Valid Label
exports.getValidLabel = () => {
    var validLabel = config.validLabel;
    return validLabel;
}

//not Valid Label
exports.getNotValidLabel = () => {
    var notValidLabel = config.notValidLabel;
    return notValidLabel;
}
//Number of Rows in Uploaded file
exports.getNumberOfCombinedRows = () => {
    var numberOfRowsinFileUploaded = config.numberOfRowsinFileUploaded;
    return numberOfRowsinFileUploaded;
}

//Number of Rows After Filtering
exports.getNumberOfRowsAfterFiltering = () => {
    var numberOfRowsafterfiltering = config.numberOfRowsafterfiltering;
    return numberOfRowsafterfiltering;
}

//Number of Columns in Data Sources section
exports.getNumberOfColumns = () => {
    var numberOfcolumnsinFileUploaded = config.numberOfcolumnsinFileUploaded;
    return numberOfcolumnsinFileUploaded;
}

//search by feature name 
exports.getFeatureName = () => {
    var searchthisFeatureName = config.searchthisFeatureName;
    return searchthisFeatureName;
}
