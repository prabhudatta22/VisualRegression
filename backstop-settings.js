var pathConfig = require('./readcsv.js');
var scenarios = pathConfig.array;

module.exports = {
  "id": "capella_tests",
  "cookiePath": "backstop_data/engine_scripts/cookies.json",
  "readyEvent": "",
  "readySelector": "",
  "delay": 1000,
  "hideSelectors": [],
  "removeSelectors": [],
  //"hoverSelector": "",
  //"clickSelector": "",
  "postInteractionWait": 0,
  //"selectors": ["document"],
  "selectorExpansion": true,
  "expect": 0,
  "misMatchThreshold" : 5.0,
  "requireSameDimensions": false,
  "viewports": [
    {
      "label": "desktop",
      "width": 1024,
      "height": 768
    }
  ],
  "onBeforeScript": "puppet/onBefore.js",
  "onReadyScript": "puppet/onReady.js",
  "scenarios": scenarios,
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference",
    "bitmaps_test": "backstop_data/bitmaps_test",
    "engine_scripts": "backstop_data/engine_scripts",
    "html_report": "backstop_data/html_report",
    "ci_report": "backstop_data/ci_report"
  },
  "report": ["browser"],
  "engine": "puppeteer",
  "engineOptions": {
    "ignoreHTTPSErrors": true,
    "slowMo": 500,
    "args": [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-gpu", 
      "--force-device-scale-factor=1", 
      "--disable-infobars=true",
      "--hide-scrollbars"
    ]
  },
  "asyncCaptureLimit": 5,
  "asyncCompareLimit": 50,
  "debug": false,
  "debugWindow": false
}
