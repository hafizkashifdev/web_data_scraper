const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const baseUrl = 'https://developer.triodos.com';
const outputDir = path.join(process.cwd(), 'scraped_data');

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

      await page.goto(fullUrl, { waitUntil: 'networkidle2', timeout: 60000 });

      // Wait for ReferencePlayground or article to appear if available
      await page.waitForFunction(
        () =>
          document.getElementById('ReferencePlayground') ||
          document.querySelector('article'),
        { timeout: 20000 }
      ).catch(() => {
        console.warn('ReferencePlayground or article not found, falling back to body...');
      });

      const content = await page.evaluate(() => {
        // Remove sidebar nav if exists
        const nav = document.querySelector('ul.MuiList-root');
        if (nav) nav.remove();

        // Remove all SVG elements
        document.querySelectorAll('svg').forEach(svg => svg.remove());

        // Add scraped classes for ReferencePlayground and its key children
        const refPlayground = document.getElementById('ReferencePlayground');
        if (refPlayground) {
          refPlayground.classList.add('scraped-ReferencePlayground');
          // Add scraped class to all direct section children
          refPlayground.querySelectorAll(':scope > section').forEach(sec => {
            sec.classList.add('scraped-PlaygroundSection');
          });
          // Add scraped class to all buttons in language picker
          refPlayground.querySelectorAll('.LanguagePickerSIxXDuYmeYsW button').forEach(btn => {
            btn.classList.add('scraped-LanguageButton');
          });
          // Add scraped class to all code snippets
          refPlayground.querySelectorAll('pre.CodeSnippet').forEach(pre => {
            pre.classList.add('scraped-CodeSnippet');
          });
        }

        // Prefer article, then ReferencePlayground, then body
        const article = document.querySelector('article');
        if (article) return article.outerHTML;
        if (refPlayground) return refPlayground.outerHTML;
        return document.body.outerHTML;
      });

      if (!content || content.trim() === '') {
        console.warn(`No content scraped for: ${name} (${url})`);
        continue;
      }

      const fileName = sanitizeFileName(name, existingFiles);
      const filePath = path.join(outputDir, fileName);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`✅ Saved: ${filePath}`);
    } catch (err) {
      console.error(`❌ Error scraping ${name} (${url}):`, err.message);
    }
  }

  await browser.close();
})();