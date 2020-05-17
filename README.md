# VisualRegression

--------------------------------------------------------------------------------------
Description : This code is built on backstop js and puppeteer engine. It can compare two urls visuals pixel by pixel. 

--------------------------------------------------------------------------------------

Steps to use the code:
--------------------------------------------------------------------------------------
Step-1 : Download the code.
Step-2: Create reference url visuals first by below command

		backstop reference --config=backstop-settings.js --pathfile=readcsv.js
		
Step-3: Create test url visuals and comparision by below command

		backstop test --config=backstop-settings.js --pathfile=readcsv.js
		
After the test the framework will automatically open the browser and show the difference.

--------------------------------------------------------------------------------------------

Portability modification:
1. The view port can be adjusted. The settings are present in backstop-settings.js.

  "viewports": [
    {
      "label": "desktop",
      "width": 1024,
      "height": 768
    }
  ],
  
-------------------------------------------------------------------------------------------------  
