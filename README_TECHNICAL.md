# 💍 Instant Wedding Loan - Complete Setup Guide

A lightweight, mobile-first wedding loan lead capture website built with Next.js 13+ App Router, featuring Google Sheets integration for data storage and WhatsApp integration for customer engagement.

---

## 📋 Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Prerequisites](#prerequisites)
5. [Installation](#installation)
6. [Google Sheets Setup](#google-sheets-setup)
7. [Environment Configuration](#environment-configuration)
8. [Running the Application](#running-the-application)
9. [Customization Guide](#customization-guide)
10. [Deployment](#deployment)
11. [Troubleshooting](#troubleshooting)

---

## ✨ Features

- ✅ **Mobile-First Design** - Fully responsive, optimized for all devices
- ✅ **Lead Capture Form** - Simple name + phone number collection
- ✅ **Google Sheets Integration** - Free data storage via Google Apps Script webhook
- ✅ **Duplicate Prevention** - Automatic phone number duplicate detection
- ✅ **Indian Phone Validation** - Validates 10-digit Indian mobile numbers
- ✅ **WhatsApp Integration** - Direct WhatsApp chat button on thank-you page
- ✅ **Static Pages** - Privacy Policy, Terms of Service, Contact pages
- ✅ **SEO Optimized** - Proper meta tags and semantic HTML
- ✅ **Fast & Lightweight** - No heavy dependencies, pure CSS styling

---

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla CSS (no UI libraries)
- **Data Storage**: Google Sheets (via Google Apps Script)
- **Deployment**: Vercel (recommended) or any Node.js hosting

---

## 📁 Project Structure

```
instant-wedding-loan/
├── app/
│   ├── api/
│   │   └── lead/
│   │       └── route.ts          # API endpoint for lead submission
│   ├── contact/
│   │   └── page.tsx              # Contact page
│   ├── privacy/
│   │   └── page.tsx              # Privacy policy page
│   ├── terms/
│   │   └── page.tsx              # Terms of service page
│   ├── thank-you/
│   │   └── page.tsx              # Thank you page with WhatsApp CTA
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout with header/footer
│   └── page.tsx                  # Landing page with lead form
├── google-apps-script.js         # Google Apps Script code
├── .env.example                  # Environment variables template
├── .gitignore                    # Git ignore file
├── next.config.js                # Next.js configuration
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # This file
```

---

## 📦 Prerequisites

Before you begin, ensure you have:

- **Node.js** 18.17 or later ([Download](https://nodejs.org/))
- **npm** or **yarn** package manager
- **Google Account** for Google Sheets integration
- **WhatsApp Business Number** (optional, for WhatsApp integration)

---

## 🚀 Installation

### Step 1: Install Dependencies

Open your terminal/command prompt in the project directory and run:

```bash
npm install
```

This will install all required dependencies including Next.js, React, and TypeScript.

---

## 📊 Google Sheets Setup

### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **"+ Blank"** to create a new spreadsheet
3. Name it **"Instant Wedding Loan Leads"**
4. Keep this sheet open in a tab

### Step 2: Open Apps Script Editor

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code in the editor
3. Copy the entire content from `google-apps-script.js` file
4. Paste it into the Apps Script editor
5. Click **Save** (💾 icon) and name the project **"Wedding Loan Webhook"**

### Step 3: Deploy as Web App

1. In Apps Script editor, click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **"Web app"**
4. Configure the deployment:
   - **Description**: "Wedding Loan Lead Capture"
   - **Execute as**: "Me (your email)"
   - **Who has access**: "Anyone"
5. Click **Deploy**
6. **IMPORTANT**: Copy the **Web app URL** - it looks like:
   ```
   https://script.google.com/macros/s/AKfycbx.../exec
   ```
7. Save this URL - you'll need it in the next step!

### Step 4: Authorize the Script

1. When deploying, you may see "Authorization required"
2. Click **Authorize access**
3. Choose your Google account
4. Click **Advanced** → **Go to Wedding Loan Webhook (unsafe)**
5. Click **Allow**

### Step 5: Test the Webhook (Optional)

1. In Apps Script editor, select **testDoPost** from the function dropdown
2. Click **Run** (▶️ icon)
3. Check your Google Sheet - you should see a test entry
4. If successful, delete the test row

---

## ⚙️ Environment Configuration

### Step 1: Create .env File

1. In the project root directory, create a file named `.env` (no extension)
2. Copy the content from `.env.example`
3. Update the values as follows:

```env
# Google Apps Script Webhook URL
# Replace YOUR_SCRIPT_ID with the actual URL from Google Apps Script deployment
NEXT_PUBLIC_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec

# WhatsApp Business Number (without + or spaces)
# Example: 919876543210 (91 is India country code)
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210

# WhatsApp Welcome Message (URL encoded)
# Use %20 for spaces, %27 for apostrophes, %2C for commas
NEXT_PUBLIC_WHATSAPP_MESSAGE=Hello%2C%20I%27m%20interested%20in%20Instant%20Wedding%20Loan
```

### Step 2: Update WhatsApp Number

Replace `919876543210` with your actual WhatsApp Business number:
- Format: Country code + 10-digit number
- No spaces, no + sign, no dashes
- Example for India: `919876543210`

### Step 3: Customize WhatsApp Message

To change the default WhatsApp message, URL encode your message:
- Use [URL Encoder](https://www.urlencoder.org/)
- Example: "Hello, I need help" → "Hello%2C%20I%20need%20help"

---

## 🏃 Running the Application

### Development Mode

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## 🎨 Customization Guide

### 1. Change Colors

**File**: `app/globals.css`

**Lines to modify**: 9-18

```css
:root {
  --primary: #e91e63;        /* Main pink color - change this */
  --primary-dark: #c2185b;   /* Darker pink for hover states */
  --primary-light: #f8bbd0;  /* Light pink for accents */
  --secondary: #ff6f00;      /* Orange color - change this */
  --secondary-dark: #e65100; /* Darker orange */
  /* ... other colors ... */
}
```

**How to change**:
1. Choose your colors from [Coolors](https://coolors.co/) or [Color Hunt](https://colorhunt.co/)
2. Replace the hex codes (e.g., `#e91e63`)
3. Save the file - changes will appear immediately in dev mode

---

### 2. Update Business Information

#### Company Name & Logo

**File**: `app/layout.tsx`

**Line to modify**: 25

```tsx
<a href="/" className="logo">
  💍 Instant Wedding Loan  {/* Change this text */}
</a>
```

**How to change**:
- Replace "Instant Wedding Loan" with your company name
- Change the emoji 💍 to any emoji or remove it
- To use an image logo instead, replace with:
  ```tsx
  <img src="/logo.png" alt="Your Company" style={{ height: '40px' }} />
  ```

#### Footer Information

**File**: `app/layout.tsx`

**Lines to modify**: 41-53

```tsx
<h3>Instant Wedding Loan</h3>  {/* Change company name */}
<p>Making dream weddings affordable for everyone.</p>  {/* Change tagline */}
```

```tsx
<p>Email: support@instantweddingloan.com</p>  {/* Change email */}
<p>Phone: +91 98765 43210</p>  {/* Change phone */}
```

---

### 3. Modify Landing Page Content

#### Hero Section

**File**: `app/page.tsx`

**Lines to modify**: 76-80

```tsx
<h1>💍 Your Dream Wedding Awaits</h1>  {/* Change headline */}
<p>Get instant approval for wedding loans up to ₹10 Lakhs</p>  {/* Change subheadline */}
<p>✓ Quick Approval • ✓ Low Interest • ✓ Flexible Repayment</p>  {/* Change features */}
```

#### Features Section

**File**: `app/page.tsx`

**Lines to modify**: 88-127

Each feature card has:
- Icon (emoji)
- Title (h3)
- Description (p)

Example:
```tsx
<div className="feature-card">
  <div className="feature-icon">⚡</div>  {/* Change emoji */}
  <h3>Instant Approval</h3>  {/* Change title */}
  <p>Get approved in minutes, not days. Quick and hassle-free process.</p>  {/* Change description */}
</div>
```

---

### 4. Update Contact Information

**File**: `app/contact/page.tsx`

**Lines to modify**:

Phone number (line 14):
```tsx
<a href="tel:+919876543210" style={{ fontSize: '1.25rem', fontWeight: '600' }}>
  +91 98765 43210  {/* Change this */}
</a>
```

Email (line 25):
```tsx
<a href="mailto:support@instantweddingloan.com" style={{ fontSize: '1.125rem', fontWeight: '600', wordBreak: 'break-word' }}>
  support@instantweddingloan.com  {/* Change this */}
</a>
```

Office Address (lines 75-81):
```tsx
<p style={{ color: '#666', lineHeight: '1.8' }}>
  [Your Office Address Line 1]<br />  {/* Replace with actual address */}
  [Your Office Address Line 2]<br />
  [City, State - PIN Code]<br />
  India
</p>
```

---

### 5. Customize Privacy Policy & Terms

**Files**: 
- `app/privacy/page.tsx` - Privacy Policy
- `app/terms/page.tsx` - Terms of Service

**What to update**:
1. Company name references
2. Contact information (email, phone, address)
3. Legal jurisdiction (currently set to India)
4. Specific policies relevant to your business

**Important sections to review**:
- Contact details at the bottom of each page
- Company address
- Governing law and jurisdiction

---

### 6. Change Form Fields

**File**: `app/page.tsx`

**Current fields**: Name and Phone

**To add more fields** (e.g., Email, Loan Amount):

1. Update state (line 10):
```tsx
const [formData, setFormData] = useState({
  name: '',
  phone: '',
  email: '',  // Add new field
  loanAmount: ''  // Add new field
})
```

2. Add validation in errors state (line 14):
```tsx
const [errors, setErrors] = useState({
  name: '',
  phone: '',
  email: '',  // Add new field
  loanAmount: ''  // Add new field
})
```

3. Add form group in the form (after line 158):
```tsx
<div className="form-group">
  <label htmlFor="email">Email Address *</label>
  <input
    type="email"
    id="email"
    value={formData.email}
    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
    className={errors.email ? 'error' : ''}
    placeholder="Enter your email"
    disabled={isSubmitting}
  />
  {errors.email && <span className="error-message">{errors.email}</span>}
</div>
```

4. Update API route (`app/api/lead/route.ts`) to handle new fields

5. Update Google Apps Script to save new fields

---

### 7. Modify Thank You Page

**File**: `app/thank-you/page.tsx`

**Lines to modify**:

Success message (lines 14-16):
```tsx
<h1>Thank You!</h1>  {/* Change title */}
<p style={{ fontSize: '1.125rem', color: '#666', marginBottom: '1rem' }}>
  Your application has been received successfully.  {/* Change message */}
</p>
```

Next steps (lines 22-28):
```tsx
<ul style={{ textAlign: 'left', color: '#666' }}>
  <li>✓ Our expert will call you to understand your requirements</li>  {/* Modify steps */}
  <li>✓ We'll help you choose the best loan plan</li>
  <li>✓ Quick document verification process</li>
  <li>✓ Instant approval and fund disbursement</li>
</ul>
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended - Free)

1. **Create Vercel Account**:
   - Go to [Vercel](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Push Code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

3. **Import to Vercel**:
   - Click "New Project" in Vercel dashboard
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

4. **Add Environment Variables**:
   - In Vercel project settings → Environment Variables
   - Add all variables from your `.env` file:
     - `NEXT_PUBLIC_WEBHOOK_URL`
     - `NEXT_PUBLIC_WHATSAPP_NUMBER`
     - `NEXT_PUBLIC_WHATSAPP_MESSAGE`

5. **Deploy**:
   - Click "Deploy"
   - Your site will be live at `your-project.vercel.app`

### Deploy to Netlify (Alternative - Free)

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy:
   ```bash
   netlify deploy --prod
   ```

4. Follow prompts and add environment variables in Netlify dashboard

---

## 🐛 Troubleshooting

### Issue: Form submission fails

**Solution**:
1. Check if `NEXT_PUBLIC_WEBHOOK_URL` in `.env` is correct
2. Verify Google Apps Script is deployed as "Anyone" can access
3. Check browser console for error messages
4. Test webhook URL directly in browser - should show JSON response

### Issue: Duplicate phone number not detected

**Solution**:
1. Check Google Sheet has data in column C (Phone column)
2. Verify Apps Script `checkDuplicatePhone` function is working
3. Test with Apps Script's `testDoPost` function

### Issue: WhatsApp button doesn't work

**Solution**:
1. Verify `NEXT_PUBLIC_WHATSAPP_NUMBER` is in correct format (no spaces, no +)
2. Check if WhatsApp is installed on the device
3. Test the WhatsApp link format: `https://wa.me/919876543210`

### Issue: Styles not loading

**Solution**:
1. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
2. Restart development server (`npm run dev`)
3. Check `app/globals.css` is imported in `app/layout.tsx`

### Issue: TypeScript errors

**Solution**:
1. Run `npm install` to ensure all dependencies are installed
2. Delete `.next` folder and restart dev server
3. Check `tsconfig.json` is present

### Issue: Environment variables not working

**Solution**:
1. Ensure `.env` file is in the root directory (same level as `package.json`)
2. Restart development server after changing `.env`
3. Variables must start with `NEXT_PUBLIC_` to be accessible in browser
4. Don't use quotes around values in `.env` file

---

## 📞 Support

If you need help:

1. **Check this README** - Most common issues are covered
2. **Google Sheets Issues** - Verify Apps Script deployment and permissions
3. **Next.js Issues** - Check [Next.js Documentation](https://nextjs.org/docs)
4. **Environment Variables** - Ensure all values are correctly set in `.env`

---

## 📝 License

This project is provided as-is for your use. Feel free to modify and customize as needed.

---

## 🎉 Quick Start Checklist

- [ ] Install Node.js
- [ ] Run `npm install`
- [ ] Create Google Sheet
- [ ] Deploy Google Apps Script
- [ ] Copy webhook URL
- [ ] Create `.env` file
- [ ] Add webhook URL to `.env`
- [ ] Add WhatsApp number to `.env`
- [ ] Run `npm run dev`
- [ ] Test form submission
- [ ] Verify data in Google Sheet
- [ ] Customize content and colors
- [ ] Deploy to Vercel

---

**🚀 You're all set! Your Instant Wedding Loan website is ready to capture leads!**
