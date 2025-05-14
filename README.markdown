# Website Scraper for API Documentation

![Puppeteer Logo](https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png)

[![Node.js](https://img.shields.io/badge/Node.js-v18+-green)](https://nodejs.org)
[![Puppeteer](https://img.shields.io/badge/Puppeteer-24.8.2-blue)](https://pptr.dev)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

A powerful Node.js script using Puppeteer to scrape API documentation from a single-page application (SPA) at `https://developer.obiebank-sbx.banfico.io`. The script extracts clean HTML content, excluding the navigation sidebar (e.g., "Home," "Accounts API," and sub-items), and saves it as individual HTML files based on an Excel input file (`links_with_page_names.xlsx`). Designed for efficiency and robustness, it uses client-side routing to minimize HTTP requests and handles edge cases like dynamic content, invalid URLs, and duplicate filenames.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Output Format](#output-format)
- [Troubleshooting](#troubleshooting)
- [FAQ](#faq)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Overview
This scraper is built to extract API documentation from an SPA, specifically targeting content like code snippets, tables, and headings while removing the navigation menu (`<ul class="MuiList-root MuiList-padding">`). It reads URLs and page names from an Excel file, navigates the SPA using a single initial HTTP request, and saves the scraped content as HTML files in a `scraped_data` directory. The script is ideal for developers needing clean, offline copies of web-based documentation.

**Use Case**: Extracting API details (e.g., `POST /account-access-consents`) from `https://developer.obiebank-sbx.banfico.io` for offline reference or documentation archiving, without the clutter of navigation links.

## Features
- **Efficient SPA Navigation**: Performs one HTTP request to load the SPA, then uses client-side routing (`window.location.href`) for subsequent pages.
- **Clean Content Extraction**: Removes the navigation sidebar, preserving only the API documentation (e.g., `<h3>`, `<pre>`, `<table>`).
- **Excel-Driven Workflow**: Reads page names and URLs from `links_with_page_names.xlsx` for automated scraping.
- **Robust Error Handling**: Manages missing Excel files, invalid URLs, duplicate filenames, and dynamic content loading.
- **Debugging Support**: Saves raw HTML for problematic pages to aid troubleshooting.
- **Configurable**: Easily adjust base URL, output directory, and DOM selectors via script variables.

## Prerequisites
Before running the scraper, ensure you have the following:

| Requirement          | Version/Notes                                                                 |
|----------------------|------------------------------------------------------------------------------|
| **Node.js**          | v18 or later ([Download](https://nodejs.org))                                |
| **Google Chrome**    | Required for Puppeteer’s Chromium binary (~200MB, auto-downloaded)           |
| **Excel File**       | `links_with_page_names.xlsx` with `Page Name` and `URL` columns              |
| **Disk Space**       | ~500MB for dependencies and Chromium                                        |
| **Internet Access**  | For initial dependency installation and SPA access                           |
| **OS**              | Windows, macOS, or Linux (Puppeteer is cross-platform)                      |

Verify Node.js installation:
```bash
node -v
npm -v
```

## Installation
Follow these steps to set up the project:

1. **Create a Project Directory**:
   ```bash
   mkdir website-scraper
   cd website-scraper
   ```

2. **Initialize a Node.js Project**:
   ```bash
   npm init -y
   ```

3. **Install Dependencies**:
   Install Puppeteer and XLSX as specified:
   ```bash
   npm install puppeteer@24.8.2 xlsx@0.18.5
   ```
   This creates a `package.json` with:
   ```json
   {
     "dependencies": {
       "puppeteer": "^24.8.2",
       "xlsx": "^0.18.5"
     }
   }
   ```

4. **Verify Installation**:
   Create a test script (`test.js`):
   ```javascript
   const puppeteer = require('puppeteer');
   const XLSX = require('xlsx');
   console.log('Puppeteer and XLSX are ready!');
   ```
   Run it:
   ```bash
   node test.js
   ```

## Configuration
1. **Prepare the Excel File**:
   - Create `links_with_page_names.xlsx` using Excel or LibreOffice.
   - Structure it with two columns:
     | Page Name                        | URL                                   |
     |----------------------------------|---------------------------------------|
     | Account Access Consent Request   | /docs/aisp#account-access-consent-request |
     | Domestic Payment Consent Request | /docs/pisp#domestic-payment-consents  |
   - Save it in the project directory.
   - Ensure URLs are relative (e.g., start with `/docs`) and match the SPA’s routing.

2. **Customize the Script (Optional)**:
   - Open `scraper.js` and modify these variables if needed:
     ```javascript
     const baseUrl = 'https://developer.obiebank-sbx.banfico.io'; // Change to your SPA’s base URL
     const outputDir = path.join(process.cwd(), 'scraped_data'); // Change output folder
     ```
   - Adjust DOM selectors for content or navigation menu if the SPA’s structure changes:
     ```javascript
     const navMenu = document.querySelector('ul.MuiList-root.MuiList-padding'); // Navigation menu
     let contentElement = document.querySelector('main') || ... // Content container
     ```

## Usage
1. **Save the Scraper Script**:
   - Create `scraper.js` in the project directory with the provided code (see the `scraper.js` artifact in the project).

2. **Ensure Prerequisites**:
   - `links_with_page_names.xlsx` is in the project directory.
   - Dependencies are installed (`node_modules` exists).

3. **Run the Script**:
   ```bash
   node scraper.js
   ```

4. **Monitor Progress**:
   - The script logs actions to the console:
     ```
     Read 50 links from Excel file
     Navigating to https://developer.obiebank-sbx.banfico.io
     Changing route to https://developer.obiebank-sbx.banfico.io/docs/aisp#account-access-consent-request
     Saved content to scraped_data/Account_Access_Consent_Request.html
     ```
   - A `scraped_data` folder is created with HTML files.
   - Debug files (e.g., `debug_Account_Access_Consent_Request.html`) appear for problematic pages.

5. **Verify Output**:
   - Open HTML files in `scraped_data` (e.g., `Account_Access_Consent_Request.html`) in a browser or text editor.
   - Confirm the navigation menu is absent and content is intact.

## How It Works
The `scraper.js` script is designed for efficiency and robustness. Here’s a breakdown of its logic:

1. **Excel Parsing**:
   - Uses `xlsx` to read `links_with_page_names.xlsx`.
   - Extracts `Page Name` and `URL` columns, skipping empty or invalid entries.
   - Sanitizes page names for valid filenames, appending numbers for duplicates (e.g., `Page_1.html`).

2. **SPA Navigation**:
   - Launches a headless Chromium browser with Puppeteer.
   - Navigates to the base URL (`https://developer.obiebank-sbx.banfico.io`) once, waiting for the network to be idle (`networkidle2`).
   - For each URL, sets `window.location.href` to change routes client-side, minimizing HTTP requests.

3. **Content Extraction**:
   - Waits for a content container (`main`, `.MuiContainer-root`, or `[role="main"]`) with a 15-second timeout.
   - Removes the navigation menu (`ul.MuiList-root.MuiList-padding`) to exclude items like "Home" and "Accounts API."
   - Selects the main content using:
     - Primary selectors: `main`, `.MuiContainer-root`, `[role="main"]`.
     - Fallback: URL fragment (e.g., `[id="account-access-consent-request"]`) or `document.body`.
   - Extracts the `innerHTML` of the selected container.

4. **Error Handling**:
   - Skips invalid URLs (e.g., `mailto:`, `javascript:`).
   - Saves debug HTML for pages where content extraction fails.
   - Logs warnings for empty content or selector issues.

5. **Output**:
   - Saves content as HTML files in `scraped_data`, named after sanitized page names.
   - Creates the output directory if it doesn’t exist.

**Key Variables**:
```javascript
const baseUrl = 'https://developer.obiebank-sbx.banfico.io'; // SPA base URL
const outputDir = path.join(process.cwd(), 'scraped_data'); // Output folder
const excelFilePath = path.join(process.cwd(), 'links_with_page_names.xlsx'); // Excel file
```

## Output Format
Each output file (e.g., `Account_Access_Consent_Request.html`) contains the API documentation content, starting with elements like:
```html
<div id="account-access-consent-request"></div>
<h3>Account Access Consent Request</h3>
<pre><code>POST /account-access-consents</code></pre>
<table>...</table>
```
- **No Navigation Menu**: The `<ul class="MuiList-root MuiList-padding">` and its children (e.g., "Home," "Accounts API") are removed.
- **Debug Files**: If content extraction fails, a `debug_*.html` file contains the full page HTML for analysis.

## Troubleshooting
Below are common issues and solutions:

| Issue                              | Solution                                                                 |
|------------------------------------|--------------------------------------------------------------------------|
| **Navigation menu persists**       | Inspect debug HTML in `scraped_data`. Update selector (e.g., `ul.MuiList-root`). |
| **Missing content**                | Check debug HTML for content container (e.g., `<div class="docs-content">`). Update `contentElement` in `scraper.js`. |
| **Slow page loading**              | Increase `waitForSelector` timeout to 20000ms: `await page.waitForSelector('...', { timeout: 20000 });` |
| **Excel file errors**              | Verify column names (`Page Name`, `URL`). Ensure file is in project directory. |
| **Puppeteer fails to launch**      | Ensure Chromium is downloaded (`node_modules/puppeteer`). Check disk space. |
| **Duplicate filenames**            | The script auto-appends numbers (e.g., `Page_1.html`). No action needed.     |

**Debugging Steps**:
1. Open a debug HTML file in `scraped_data`.
2. Use Chrome DevTools (F12) on the live SPA to inspect DOM structure.
3. Update selectors in `scraper.js` based on findings.
4. Add a delay for dynamic content:
   ```javascript
   await page.waitForTimeout(1000); // After route change
   ```

**Logging**:
- The script logs progress, warnings, and errors to the console.
- Example:
  ```
  WARN: Content selector not found for /docs/aisp#account-access-consent-request (Account Access Consent Request). Falling back to body.
  Saved debug HTML to scraped_data/debug_Account_Access_Consent_Request.html
  ```

## FAQ
**Q: Can I use a different SPA?**
A: Yes! Update `baseUrl` in `scraper.js` and adjust DOM selectors for the new SPA’s navigation menu and content container.

**Q: What if the Excel file has different column names?**
A: The script expects `Page Name` and `URL`. Rename columns or modify the `readExcelFile` function to map custom names.

**Q: How do I handle authentication?**
A: Add Puppeteer code to log in before scraping (e.g., `page.type` and `page.click`). Contact the project maintainer for help.

**Q: Why are some pages empty?**
A: The SPA may load content dynamically. Increase timeouts or add `waitForTimeout`. Check debug HTML for clues.

**Q: Can I output to a different format?**
A: Modify the script to save as JSON, Markdown,