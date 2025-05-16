const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const baseUrl = 'https://developers.tide.co';
const outputDir = path.join(process.cwd(), 'scraped_data_apis');

// Sanitize file name from Excel sheet
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

// Read Excel sheet (columns: url, name)
function readExcelFile(filePath) {
    if (!fs.existsSync(filePath)) {
        throw new Error('Excel file not found');
    }
    const workbook = XLSX.readFile(filePath);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    data.shift(); // remove header row
    return data
        .filter(row => row[0] && row[1]) // ensure both url and name exist
        .map(([url, name]) => ({ url: url.toString(), name: name.toString() }));
}

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const existingFiles = new Set();

    // Define the specification pages that use a different class
    const specificationPages = new Set(['AISP Specification', 'PISP Specification', 'CBPII Specification']);

    try {
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        const excelFilePath = path.join(process.cwd(), 'tide_documentation_links.xlsx');
        const links = readExcelFile(excelFilePath);
        if (links.length === 0) {
            console.error('No valid links found in Excel file. Exiting.');
            return;
        }

        for (const { url, name } of links) {
            const fullUrl = url.startsWith('/') ? `${baseUrl}${url}` : `${baseUrl}/${url}`;
            console.log(`Scraping: ${fullUrl}`);

            try {
                await page.goto(fullUrl, { waitUntil: 'networkidle2', timeout: 30000 });

                // Only apply expand/click/scroll logic for the 3 specification pages
                let content;
                if (specificationPages.has(name)) {
                    // Scroll to bottom to trigger lazy loading
                    await page.evaluate(async () => {
                        await new Promise(resolve => {
                            let totalHeight = 0;
                            const distance = 500;
                            const timer = setInterval(() => {
                                window.scrollBy(0, distance);
                                totalHeight += distance;
                                if (totalHeight >= document.body.scrollHeight) {
                                    clearInterval(timer);
                                    resolve();
                                }
                            }, 200);
                        });
                    });

                    // Expand all dropdowns/expanders, even if loaded dynamically
                    let expandCount = 0;
                    for (let i = 0; i < 5; i++) { // Try up to 5 times in case of dynamic loading
                        const expanded = await page.evaluate(() => {
                            let clicked = 0;
                            // Expand all tag sections
                            document.querySelectorAll('.opblock-tag-section').forEach(section => {
                                if (!section.classList.contains('is-open')) {
                                    section.classList.add('is-open');
                                    clicked++;
                                }
                            });
                            // Click all expand buttons for operations
                            document.querySelectorAll('.expand-operation').forEach(btn => {
                                if (btn.getAttribute('aria-expanded') !== 'true') {
                                    btn.click();
                                    clicked++;
                                }
                            });
                            return clicked;
                        });
                        expandCount += expanded;
                        if (expanded === 0) break; // Stop if nothing more to expand
                        await page.waitForTimeout(1000);
                    }
                    // Wait a moment for content to expand
                    await page.waitForTimeout(1500);
                    // Now get the main content
                    content = await page.evaluate(() => {
                        const main = document.querySelector('div.col-md-10');
                        return main ? main.innerHTML : (document.body ? document.body.innerHTML : 'Content not found');
                    });
                } else {
                    // For all other pages, use the original selector only
                    content = await page.evaluate(() => {
                        const container = document.querySelector('div.markdown-content.col-md-9');
                        return container ? container.innerHTML : (document.body ? document.body.innerHTML : 'Content not found');
                    });
                }

                if (!content || content.trim() === '' || content.includes('Content not found')) {
                    console.warn(`No valid content for: ${name} (${url})`);
                    continue;
                }

                const fileName = sanitizeFileName(name, existingFiles);
                const filePath = path.join(outputDir, fileName);
                fs.writeFileSync(filePath, content);
                console.log(`Saved to ${filePath}`);
            } catch (error) {
                console.error(`Error processing ${url} (${name}):`, error.message);
            }
        }

    } catch (err) {
        console.error('General error:', err.message);
    } finally {
        await browser.close();
    }
})();