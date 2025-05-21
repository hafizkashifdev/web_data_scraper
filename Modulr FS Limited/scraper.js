const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const baseUrl = 'https://modulr.readme.io';
const outputDir = path.join(process.cwd(), 'scraped_data');

// Sanitize filename and handle duplicates
function sanitizeFileName(name, existingFiles) {
  let baseName = name.replace(/[^a-zA-Z0-9]/g, '_').replace(/_+/g, '_');
  let fileName = `${baseName}.html`;
  let counter = 1;
  while (existingFiles.has(fileName)) {
    fileName = `${baseName}_${counter}.html`;
    counter++;
  }
  existingFiles.add(fileName);
  return fileName;
}

// Read URLs and Page Names from Excel
function readExcelFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error('Excel file not found:', filePath);
    return [];
  }
  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(sheet);

  return data
    .map((row, idx) => ({
      name: row['name']?.toString() || `Untitled_${idx}`,
      url: row['url']?.toString() || ''
    }))
    .filter(row => row.url && row.url.trim() !== '');
}

function isValidUrl(url) {
  return url && !url.startsWith('mailto:') && !url.startsWith('javascript:');
}

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const existingFiles = new Set();

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const excelFilePath = path.join(process.cwd(), 'links.xlsx');
  const linksData = readExcelFile(excelFilePath);

  if (linksData.length === 0) {
    console.error('No valid links found in Excel file.');
    await browser.close();
    return;
  }

  for (const { name, url } of linksData) {
    if (!isValidUrl(url)) {
      console.warn(`Skipping invalid URL: ${url}`);
      continue;
    }

    try {
      const fullUrl = new URL(url, baseUrl).href;
      console.log(`Navigating to: ${fullUrl}`);

      await page.goto(fullUrl, { waitUntil: 'networkidle2', timeout: 30000 });

      // Wait for the main docs content container to load
      await page.waitForSelector('.docs-main-content, main', { timeout: 20000 });

      const content = await page.evaluate(() => {
        // Remove navigation menu for cleaner saved HTML
        const navMenu = document.querySelector('ul.MuiList-root.MuiList-padding');
        if (navMenu) navMenu.remove();

        // Grab the main content container with everything inside
        const mainContent = document.querySelector('.docs-main-content') ||
                            document.querySelector('main') ||
                            document.body;

        return mainContent.innerHTML || 'Content not found';
      });

      if (!content || content.trim() === '' || content === 'Content not found') {
        console.warn(`No content scraped for: ${name} (${url})`);
        continue;
      }

      const fileName = sanitizeFileName(name, existingFiles);
      const filePath = path.join(outputDir, fileName);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Saved scraped HTML to: ${filePath}`);

    } catch (err) {
      console.error(`Error scraping ${name} (${url}):`, err.message);
    }
  }

  await browser.close();
})();
