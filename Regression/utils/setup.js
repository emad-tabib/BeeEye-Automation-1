const properties=require('./configrationReader');

exports.lunchBrowser = (browser,branch) =>{
    var url=properties.getUrl();
    url+=branch;
    browser 
    .url(url) // Go to a url
    .waitForElementVisible('body', 2000)
}
