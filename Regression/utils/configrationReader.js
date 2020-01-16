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


//For Create New Flow in FLOWS Page

exports.getThenameOfTheNewFlow = () => {
    var nameOfTheNewFlow = config.nameOfTheNewFlow;
    return nameOfTheNewFlow;
}