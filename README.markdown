# web_data_scraper: Extracting Clean API Documentation with Puppeteer

[![Node.js](https://img.shields.io/badge/Node.js-v18+-green)](https://nodejs.org)
[![Puppeteer](https://img.shields.io/badge/Puppeteer-24.8.2-blue)](https://pptr.dev)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)
[![web_data_scraper](https://img.shields.io/badge/Repo-web_data_scraper-blue)](https://github.com/hafizkashifdev/web_data_scraper.git)

Welcome to **web_data_scraper**, a robust Node.js tool powered by Puppeteer to scrape clean API documentation from single-page applications (SPAs). Designed for efficiency, it extracts content like code snippets, tables, and headings from sites such as `https://developer.obiebank-sbx.banfico.io`, while removing unwanted navigation menus (e.g., "Home," "Accounts API"). Driven by an Excel file (`links_with_page_names.xlsx`), it uses client-side routing to minimize HTTP requests and saves results as HTML files. Whether you're archiving API docs or building offline references, web_data_scraper is your go-to solution! 🚀

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Output Format](#output-format)
- [Troubleshooting](#troubleshooting)
- [FAQ](#faq)
- [Contributing](#contributing)
- [License](#license)

## Project Overview
web_data_scraper tackles the challenge of extracting API documentation from SPAs, where dynamic routing and navigation menus complicate traditional scraping. It navigates the SPA with a single initial HTTP request, removes the navigation sidebar (`<ul class="MuiList-root MuiList-padding">`), and saves clean HTML files containing only the desired content (e.g., `<h3>`, `<pre>`, `<table>`). The script reads URLs and page names from an Excel file, making it easy to scrape multiple pages in one go.

**Use Case**: Extracting API endpoints (e.g., `POST /account-access-consents`) from `https://developer.obiebank-sbx.banfico.io` for offline use, without the clutter of navigation links.

## Features
- **Efficient SPA Navigation**: One HTTP request, followed by client-side routing via `window.location.href`.
- **Clean Output**: Removes navigation menus, preserving only API documentation.
- **Excel-Driven**: Reads `links_with_page_names.xlsx` for automated, batch scraping.
- **Robust Error Handling**: Manages invalid URLs, missing content, and duplicate filenames.
- **Debugging Support**: Saves raw HTML for problematic pages.
- **Configurable**: Supports custom base URLs and DOM selectors via `config/selectors.json`.
- **Scalable**: Easily adapts to other SPAs with minor tweaks.

## Project Structure
```
web_data_scraper/
├── config/
│   └── selectors.json           # Optional: DOM selectors for navigation and content
├── examples/
│   └── sample-links.xlsx       # Example Excel file with sample URLs and page names
├── scraped_data/
│   ├── Account_Access_Consent_Request.html  # Output HTML files
│   └── debug_Account_Access_Consent_Request.html  # Debug HTML for failed scrapes
├── .gitignore                  # Ignore node_modules, scraped_data, etc.
├── links_with_page_names.xlsx  # Input Excel file with URLs and page names
├── package.json                # Node.js dependencies (puppeteer, xlsx)
├── README.md                   # Project documentation
└── scraper.js                  # Main Puppeteer script
```

## Prerequisites
| Requirement       | Details                                                                 |
|-------------------|-------------------------------------------------------------------------|
| **Node.js**       | v18 or later ([Download](https://nodejs.org))                          |
| **Google Chrome** | Puppeteer downloads Chromium (~200MB)                                  |
| **Excel File**    | `links_with_page_names.xlsx` with `Page Name` and `URL` columns        |
| **Disk Space**    | ~500MB for dependencies and Chromium                                   |
| **Internet**      | For dependency installation and SPA access                             |
| **OS**            | Windows, macOS, Linux                                                 |

Verify Node.js:
```bash
node -v
npm -v
```

## Installation
1. **Clone or Create the Repository**:
   ```bash
   mkdir web_data_scraper
   cd web_data_scraper
   git init
   ```

2. **Initialize Node.js Project**:
   ```bash
   npm init -y
   ```

3. **Install Dependencies**:
   ```bash
   npm install puppeteer@24.8.2 xlsx@0.18.5
   ```
   This generates `package.json`:
   ```json
   {
     "dependencies": {
       "puppeteer": "^24.8.2",
       "xlsx": "^0.18.5"
     }
   }
   ```

4. **Verify Setup**:
   Create `test.js`:
   ```javascript
   const puppeteer = require('puppeteer');
   const XLSX = require('xlsx');
   console.log('web_data_scraper dependencies ready!');
   ```
   Run:
   ```bash
   node test.js
   ```

5. **Add .gitignore**:
   Create `.gitignore` with:
   ```
   node_modules/
   scraped_data/
   .puppeteer/
   *.log
   ```

## Configuration
1. **Prepare Excel File**:
   - Create `links_with_page_names.xlsx` with:
     | Page Name                        | URL                                   |
     |----------------------------------|---------------------------------------|
     | Account Access Consent Request   | /docs/aisp#account-access-consent-request |
     | Domestic Payment Consent Request | /docs/pisp#domestic-payment-consents  |
   - Save in the project root.
   - See `examples/sample-links.xlsx` for a template.

2. **Optional: Configure Selectors**:
   - Create `config/selectors.json`:
     ```json
     {
       "navigation": "ul.MuiList-root.MuiList-padding",
       "content": ["main", ".MuiContainer-root", "[role=\"main\"]"]
     }
     ```
   - Update `scraper.js` to use it (requires code modification).

3. **Customize Script (Optional)**:
   - Edit `scraper.js` variables:
     ```javascript
     const baseUrl = 'https://developer.obiebank-sbx.banfico.io'; // Your SPA URL
     const outputDir = path.join(process.cwd(), 'scraped_data'); // Output path
     ```

## Usage
1. **Save the Scraper Script**:
   - Create `scraper.js` with the provided code (available in the repository or project artifacts).

2. **Ensure Files**:
   - `links_with_page_names.xlsx` is in the root.
   - Dependencies are installed (`node_modules` exists).

3. **Run the Script**:
   ```bash
   node scraper.js
   ```

4. **Monitor Output**:
   - Console logs show progress:
     ```
     Read 50 links from Excel file
     Navigating to https://developer.obiebank-sbx.banfico.io
     Changing route to https://developer.obiebank-sbx.banfico.io/docs/aisp#account-access-consent-request
     Saved content to scraped_data/Account_Access_Consent_Request.html
     ```
   - HTML files appear in `scraped_data/`.
   - Debug files (e.g., `debug_*.html`) are saved for issues.

5. **Verify Results**:
   - Open `scraped_data/Account_Access_Consent_Request.html` in a browser.
   - Expect clean content, e.g.:
     ```html
     <div id="account-access-consent-request"></div>
     <h3>Account Access Consent Request</h3>
     <pre><code>POST /account-access-consents</code></pre>
     ```

## How It Works
The `scraper.js` script is a finely tuned machine:

1. **Excel Parsing**:
   - Reads `links_with_page_names.xlsx` using `xlsx`.
   - Extracts `Page Name` and `URL`, sanitizing names for filenames (e.g., `Page_Name.html`).

2. **SPA Navigation**:
   - Launches Puppeteer in headless mode.
   - Loads the base URL with `page.goto`, waiting for `networkidle2`.
   - Changes routes client-side via `window.location.href` for efficiency.

3. **Content Extraction**:
   - Waits for content with `waitForSelector` (15s timeout).
   - Removes the navigation menu (`ul.MuiList-root.MuiList-padding`).
   - Selects content using:
     - Primary: `main`, `.MuiContainer-root`, `[role="main"]`.
     - Fallback: URL fragment (e.g., `[id="account-access-consent-request"]`) or `document.body`.
   - Saves `innerHTML` as HTML files.

4. **Error Handling**:
   - Skips invalid URLs (`mailto:`, `javascript:`).
   - Saves debug HTML for failed extractions.
   - Logs warnings and errors.

**Key Code**:
```javascript
const navMenu = document.querySelector('ul.MuiList-root.MuiList-padding');
if (navMenu) navMenu.remove();
let contentElement = document.querySelector('main') || ...
```

## Output Format
- **HTML Files**: Named after sanitized page names (e.g., `Account_Access_Consent_Request.html`).
- **Content**: API documentation only, e.g.:
  ```html
  <div id="account-access-consent-request"></div>
  <h3>Account Access Consent Request</h3>
  <pre><code>POST /account-access-consents</code></pre>
  ```
- **Debug Files**: Full page HTML for troubleshooting (e.g., `debug_Account_Access_Consent_Request.html`).

## Troubleshooting
| Issue                     | Solution                                                                 |
|---------------------------|-------------------------------------------------------------------------|
| **Navigation menu remains** | Check debug HTML. Update selector in `scraper.js` (e.g., `ul.MuiList-root`). |
| **No content scraped**    | Inspect debug HTML for content container. Add selector (e.g., `.docs-content`). |
| **Slow loading**          | Increase timeout: `await page.waitForSelector('...', { timeout: 20000 });` |
| **Excel errors**          | Verify column names (`Page Name`, `URL`). Check file path.               |
| **Puppeteer crashes**     | Ensure disk space. Reinstall: `npm install puppeteer@24.8.2`.            |

**Debugging**:
1. Open `scraped_data/debug_*.html`.
2. Use Chrome DevTools (F12) on the SPA to inspect DOM.
3. Update `scraper.js` selectors.
4. Add delay:
   ```javascript
   await page.waitForTimeout(1000);
   ```

## FAQ
**Q: Can I scrape other SPAs?**  
A: Yes! Update `baseUrl` and selectors in `scraper.js` or `config/selectors.json`.

**Q: What if my Excel columns differ?**  
A: Rename to `Page Name` and `URL`, or modify `readExcelFile` in `scraper.js`.

**Q: How to handle SPA authentication?**  
A: Add login logic to `scraper.js` (e.g., `page.type`, `page.click`). Ask for help!

**Q: Why are debug files created?**  
A: They indicate content extraction issues. Use them to refine selectors.

**Q: Can I save as JSON instead of HTML?**  
A: Modify `fs.writeFileSync` in `scraper.js` to output JSON.

## Contributing
1. Fork the repository.
2. Create a branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m "Add your feature"`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

File issues or suggestions on [GitHub Issues](https://github.com/hafizkashifdev/web_data_scraper.git/issues).

## License
[MIT License](LICENSE)

## Author
**Hafiz Kashif**  
*Senior Frontend Developer*  
- 🌐 [Portfolio](https://hafizkashifdev.com)  
- 🔗 [GitHub](https://github.com/hafizkashifdev)  
- 💼 [LinkedIn](https://linkedin.com/in/hafizkashifdev)  
- 📞 [+92 3116327401](tel:+923116327401)

---

*Crafted with ❤️ by Hafiz Kashif*  
*Updated: May 14, 2025, 04:31 PM PKT*