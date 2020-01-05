# BeeEye-Automation  :fire:
## About ##
Automation code use nightwatch and Chi on top on NodeJS 12 

## Installation instructions ##
- ` npm install `
- ` npm run e2e-setup --save-dev `
- ` npm test `

#### in case you would use ES6 ####
- ` npm i babel-plugin-add-module-exports babel-preset-es2015 -D --save-dev `

## Nightwatch.json configurations ##

### Enable Mobile emulation ### 
add the following to nightwatch json

```yaml
"default" : {
      "desiredCapabilities": {
        "chromeOptions" : {
          "args" : ["start-maximized"],
          "mobileEmulation": {
            "deviceName": "Nexus 5"
         }
        },
        "browserName": "chrome"
    }
  },
 ```
 or you can customize any browser  
 ```yaml 
 chromeOptions: {mobileEmulation: {
        deviceMetrics: {width: 360, height: 640, pixelRatio: 3},
        userAgent:
          'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like 
           Gecko) Chrome/60.0.3112.101 Mobile Safari/537.36 profi-autotest',
          }
```

### Chrome driver Args : headless browsing, disbale GPU, start maximized ###
 Add the following args 
 ```
 args: ["headless", "disable-gpu" , "start-maximized"]
 ```
 
 ### accept cert. / js enabled ###
 ```yaml
 desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled : true,
        acceptSslCerts : true,
      }
 ```
