const fs = require('file-system');
const ini = require('ini');
const config = ini.parse(fs.readFileSync(process.cwd()+'/config.ini','utf-8'));

 exports.getUrl = () =>{
     var url=config.url;
     return url;
 }