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
