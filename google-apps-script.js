// ============================================
// GOOGLE APPS SCRIPT FOR INSTANT WEDDING LOAN
// ============================================
// This script receives lead data from Next.js app and stores it in Google Sheets
// It also prevents duplicate phone number submissions

/**
 * Main function to handle POST requests from the Next.js app
 */
function doPost(e) {
    try {
        // Parse the incoming JSON data
        const data = JSON.parse(e.postData.contents);

        // Get the active spreadsheet
        const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

        // Extract data from request
        const name = data.name;
        const phone = data.phone;
        const timestamp = data.timestamp || new Date().toISOString();

        // Validate required fields
        if (!name || !phone) {
            return ContentService
                .createTextOutput(JSON.stringify({
                    success: false,
                    error: 'Name and phone are required'
                }))
                .setMimeType(ContentService.MimeType.JSON);
        }

        // Check for duplicate phone number
        const isDuplicate = checkDuplicatePhone(sheet, phone);

        if (isDuplicate) {
            return ContentService
                .createTextOutput(JSON.stringify({
                    success: false,
                    error: 'Duplicate phone number'
                }))
                .setMimeType(ContentService.MimeType.JSON);
        }

        // Add header row if sheet is empty
        if (sheet.getLastRow() === 0) {
            sheet.appendRow(['Timestamp', 'Name', 'Phone', 'Status', 'Notes']);

            // Format header row
            const headerRange = sheet.getRange(1, 1, 1, 5);
            headerRange.setFontWeight('bold');
            headerRange.setBackground('#e91e63');
            headerRange.setFontColor('#ffffff');
        }

        // Format timestamp for Indian timezone
        const date = new Date(timestamp);
        const formattedTimestamp = Utilities.formatDate(
            date,
            'Asia/Kolkata',
            'dd/MM/yyyy HH:mm:ss'
        );

        // Append new row with lead data
        sheet.appendRow([
            formattedTimestamp,
            name,
            phone,
            'New',  // Default status
            ''      // Empty notes field
        ]);

        // Auto-resize columns for better readability
        sheet.autoResizeColumns(1, 5);

        // Send success response
        return ContentService
            .createTextOutput(JSON.stringify({
                success: true,
                message: 'Lead submitted successfully'
            }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        // Log error for debugging
        Logger.log('Error: ' + error.toString());

        // Send error response
        return ContentService
            .createTextOutput(JSON.stringify({
                success: false,
                error: 'Internal server error: ' + error.toString()
            }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

/**
 * Check if phone number already exists in the sheet
 * @param {Sheet} sheet - The Google Sheet to check
 * @param {string} phone - The phone number to check
 * @return {boolean} - True if duplicate found, false otherwise
 */
function checkDuplicatePhone(sheet, phone) {
    // Get all data from the sheet
    const lastRow = sheet.getLastRow();

    // If sheet is empty or only has header, no duplicates
    if (lastRow <= 1) {
        return false;
    }

    // Get all phone numbers (column C, index 3)
    const phoneColumn = sheet.getRange(2, 3, lastRow - 1, 1).getValues();

    // Check if phone number exists
    for (let i = 0; i < phoneColumn.length; i++) {
        if (phoneColumn[i][0].toString() === phone.toString()) {
            return true;
        }
    }

    return false;
}

/**
 * Test function to verify the script works
 * Run this from the Apps Script editor to test
 */
function testDoPost() {
    const testData = {
        postData: {
            contents: JSON.stringify({
                name: 'Test User',
                phone: '9876543210',
                timestamp: new Date().toISOString()
            })
        }
    };

    const result = doPost(testData);
    Logger.log(result.getContent());
}

/**
 * Function to handle GET requests (for testing webhook URL)
 */
function doGet(e) {
    return ContentService
        .createTextOutput(JSON.stringify({
            status: 'active',
            message: 'Instant Wedding Loan - Google Apps Script Webhook is running'
        }))
        .setMimeType(ContentService.MimeType.JSON);
}
