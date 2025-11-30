# 🚀 Quick Start Guide - Fixing PowerShell Script Execution

## Issue: PowerShell Script Execution Disabled

You're seeing this error because Windows PowerShell has script execution disabled by default for security reasons.

```
npm : File C:\Program Files\nodejs\npm.ps1 cannot be loaded because running scripts is disabled on this system.
```

## ✅ Solution: Enable Script Execution

### Option 1: Run as Administrator (Recommended)

1. **Open PowerShell as Administrator**:
   - Press `Windows Key`
   - Type "PowerShell"
   - Right-click "Windows PowerShell"
   - Select "Run as administrator"

2. **Enable script execution**:
   ```powershell
   Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

3. **Confirm** by typing `Y` and pressing Enter

4. **Navigate to your project**:
   ```powershell
   cd "E:\Wedding Website"
   ```

5. **Install dependencies**:
   ```powershell
   npm install
   ```

### Option 2: Use Command Prompt Instead

1. **Open Command Prompt**:
   - Press `Windows Key + R`
   - Type `cmd`
   - Press Enter

2. **Navigate to project**:
   ```cmd
   cd "E:\Wedding Website"
   ```

3. **Install dependencies**:
   ```cmd
   npm install
   ```

### Option 3: Use VS Code Terminal

1. **Open VS Code**
2. **Open the project folder**: File → Open Folder → Select "E:\Wedding Website"
3. **Open Terminal**: View → Terminal (or press `` Ctrl + ` ``)
4. **Run**:
   ```bash
   npm install
   ```

---

## 📋 Next Steps After Installing Dependencies

### 1. Create `.env` File

Copy `.env.example` to `.env`:

**In PowerShell/Command Prompt**:
```cmd
copy .env.example .env
```

**Or manually**:
1. Duplicate `.env.example` file
2. Rename the copy to `.env`

### 2. Set Up Google Sheets

Follow the detailed instructions in [README.md](file:///E:/Wedding%20Website/README.md) section "Google Sheets Setup"

**Quick summary**:
1. Create a new Google Sheet
2. Open Extensions → Apps Script
3. Copy code from `google-apps-script.js`
4. Deploy as Web App
5. Copy the webhook URL

### 3. Configure Environment Variables

Edit `.env` file and update:

```env
NEXT_PUBLIC_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
NEXT_PUBLIC_WHATSAPP_MESSAGE=Hello%2C%20I%27m%20interested%20in%20Instant%20Wedding%20Loan
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Test the Application

1. Fill out the form on the homepage
2. Submit with a valid Indian phone number (10 digits, starts with 6-9)
3. Check if you're redirected to the thank-you page
4. Verify data appears in your Google Sheet

---

## 🎨 Customization

See the comprehensive customization guide in [README.md](file:///E:/Wedding%20Website/README.md) section "Customization Guide"

**Quick customizations**:

### Change Colors
Edit `app/globals.css` lines 9-18

### Update Company Name
Edit `app/layout.tsx` line 25

### Modify Landing Page Headline
Edit `app/page.tsx` line 76

### Update Contact Information
Edit `app/contact/page.tsx` lines 14, 25, 75-81

---

## ✅ Verification Checklist

- [ ] PowerShell execution policy enabled OR using Command Prompt
- [ ] Dependencies installed (`npm install` completed)
- [ ] `.env` file created from `.env.example`
- [ ] Google Sheet created
- [ ] Google Apps Script deployed
- [ ] Webhook URL added to `.env`
- [ ] WhatsApp number added to `.env`
- [ ] Development server running (`npm run dev`)
- [ ] Form submission tested
- [ ] Data appears in Google Sheet
- [ ] WhatsApp button works on thank-you page

---

## 🆘 Need Help?

Check the **Troubleshooting** section in [README.md](file:///E:/Wedding%20Website/README.md) for common issues and solutions.

---

## 📁 Project Structure Verification

All files are in place:

```
E:\Wedding Website\
├── app/
│   ├── api/lead/route.ts ✅
│   ├── contact/page.tsx ✅
│   ├── privacy/page.tsx ✅
│   ├── terms/page.tsx ✅
│   ├── thank-you/page.tsx ✅
│   ├── globals.css ✅
│   ├── layout.tsx ✅
│   └── page.tsx ✅
├── .env.example ✅
├── .gitignore ✅
├── google-apps-script.js ✅
├── next.config.js ✅
├── package.json ✅
├── tsconfig.json ✅
└── README.md ✅
```

**Status**: ✅ All project files created successfully!

---

**Ready to start!** Follow the steps above to get your website running. 🚀
