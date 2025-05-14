const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const baseUrl = 'https://developer.obiebank-sbx.banfico.io';
const outputDir = path.join(process.cwd(), 'developer_obiebank_apis');

// Function to sanitize Page Name for valid filenames and handle duplicates
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

// Function to read URLs and Page Names from Excel file
function readExcelFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      throw new Error('Excel file not found');
    }
    const workbook = XLSX.readFile(filePath);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(sheet);
    return data.map((row, index) => ({
      pageName: row['Page Name']?.toString() || `Untitled_${index}`,
      url: row['URL']?.toString() || ''
    })).filter(row => row.url && row.url.trim() !== '');
  } catch (error) {
    console.error('Error reading Excel file:', error.message);
    return [];
  }
}

// Function to check if URL is valid for scraping
function isValidUrl(url) {
  return url && !url.startsWith('http') && !url.includes('mailto:') && !url.includes('javascript:');
}

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const existingFiles = new Set();

  try {
    // Create the output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Read URLs and Page Names from Excel file
    const excelFilePath = path.join(process.cwd(), 'links_with_page_names.xlsx');
    const linksData = readExcelFile(excelFilePath);
    if (linksData.length === 0) {
      console.error('No valid links found in Excel file. Exiting.');
      return;
    }
    console.log(`Read ${linksData.length} links from Excel file`);

    // Navigate to the base URL once
    console.log(`Navigating to ${baseUrl}`);
    try {
      await page.goto(baseUrl, { waitUntil: 'networkidle2', timeout: 30000 });
    } catch (error) {
      console.error('Failed to load base URL:', error.message);
      return;
    }

    // Process each URL from the Excel file
    for (const { pageName, url } of linksData) {
      if (!isValidUrl(url)) {
        console.warn(`Skipping invalid URL: ${url} (${pageName})`);
        continue;
      }

      try {
        const fullUrl = url.startsWith('/') ? `${baseUrl}${url}` : `${baseUrl}/${url}`;
        console.log(`Changing route to ${fullUrl}`);

        // Change route client-side by setting window.location.href
        await page.evaluate((url) => {
          window.location.href = url;
        }, fullUrl);

        // Wait for content to load
        let content = '';
        try {
          // Wait for a content container, excluding the navigation menu
          await page.waitForSelector('main, .MuiContainer-root, [role="main"]', { timeout: 15000 });
          content = await page.evaluate((pageUrl) => {
            // Remove the navigation menu
            const navMenu = document.querySelector('ul.MuiList-root.MuiList-padding');
            if (navMenu) {
              navMenu.remove();
            }

            // Try to find the main content container
            let contentElement = document.querySelector('main') ||
                                document.querySelector('.MuiContainer-root') ||
                                document.querySelector('[role="main"]');

            // If no container is found, try to find the content by fragment ID
            if (!contentElement && pageUrl.includes('#')) {
              const fragment = pageUrl.split('#')[1];
              contentElement = document.querySelector(`[id="${fragment}"]`)?.parentElement ||
                              document.querySelector(`[id="${fragment}"]`)?.closest('div');
            }

            // Fallback to body if no content is found
            if (!contentElement) {
              contentElement = document.body;
            }

            return contentElement.innerHTML || 'Content not found';
          }, fullUrl);
        } catch (error) {
          console.warn(`Content selector not found for ${url} (${pageName}). Falling back to body.`);
          content = await page.evaluate((pageUrl) => {
            // Remove the navigation menu
            const navMenu = document.querySelector('ul.MuiList-root.MuiList-padding');
            if (navMenu) {
              navMenu.remove();
            }
            return document.body.innerHTML || 'Content not found';
          }, fullUrl);

          // Save raw HTML for debugging
          const debugFile = path.join(outputDir, `debug_${sanitizeFileName(pageName, new Set(existingFiles))}`);
          fs.writeFileSync(debugFile, await page.content());
          console.log(`Saved debug HTML to ${debugFile}`);
        }

        if (content === 'Content not found' || content.trim() === '') {
          console.warn(`No content scraped for ${url} (${pageName})`);
        }

        // Save the scraped content as an HTML file
        const fileName = sanitizeFileName(pageName, existingFiles);
        const filePath = path.join(outputDir, fileName);
        fs.writeFileSync(filePath, content);
        console.log(`Saved content to ${filePath}`);
      } catch (error) {
        console.error(`Error processing ${url} (${pageName}):`, error.message);
      }
    }
  } catch (error) {
    console.error('Error during scraping process:', error.message);
  } finally {
    await browser.close();
  }
})();