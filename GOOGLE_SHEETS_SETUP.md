# Google Sheets & Apps Script Setup Guide

Follow these steps to connect your **Wedfin** website to Google Sheets.

## 1. Create the Google Sheet
1.  Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet.
2.  Name it **"Wedfin Leads"**.
3.  In the first row (Header), add the following column names:
    *   **Column A**: `Timestamp`
    *   **Column B**: `Name`
    *   **Column C**: `Phone`

## 2. Set up Google Apps Script
1.  In your Google Sheet, go to **Extensions** > **Apps Script**.
2.  Delete any code in the `Code.gs` file and paste the following script:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  try {
    // Parse the incoming JSON data
    var data = JSON.parse(e.postData.contents);
    var name = data.name;
    var phone = data.phone;
    var timestamp = data.timestamp || new Date().toISOString();
    
    // Check for duplicates (Phone number in Column C)
    var phoneColumn = sheet.getRange("C:C").getValues();
    for (var i = 0; i < phoneColumn.length; i++) {
      if (phoneColumn[i][0].toString() === phone.toString()) {
        return ContentService.createTextOutput(JSON.stringify({ 
          'result': 'error', 
          'error': 'Duplicate phone number' 
        })).setMimeType(ContentService.MimeType.JSON);
      }
    }
    
    // Append the new lead
    sheet.appendRow([timestamp, name, phone]);
    
    return ContentService.createTextOutput(JSON.stringify({ 
      'result': 'success' 
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ 
      'result': 'error', 
      'error': error.toString() 
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## 3. Deploy the Script
1.  Click the blue **Deploy** button (top right) > **New deployment**.
2.  Click the **Select type** gear icon > **Web app**.
3.  Fill in the details:
    *   **Description**: `Wedfin Lead Capture`
    *   **Execute as**: `Me` (your email)
    *   **Who has access**: **Anyone** (This is crucial for the form to work without login)
4.  Click **Deploy**.
5.  Authorize the script when prompted (Click *Review permissions* > Choose account > *Advanced* > *Go to (Script Name) (unsafe)* > *Allow*).

## 4. Connect to Website
1.  Copy the **Web app URL** (starts with `https://script.google.com/macros/s/...`).
2.  Open your project's `.env.local` file (create it if it doesn't exist).
3.  Add the URL:
    ```env
    NEXT_PUBLIC_WEBHOOK_URL=your_copied_url_here
    ```
4.  Restart your development server (`npm run dev`) to load the new environment variable.

## ✅ Done!
Your form will now save leads directly to your Google Sheet!
