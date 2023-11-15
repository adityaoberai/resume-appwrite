import puppeteer from 'puppeteer';

export async function getPdf(htmlContent) { 
    var browser = await puppeteer.launch({ 
        headless: 'new',
        executablePath: '/usr/bin/chromium-browser',
        args: [
          '--no-sandbox',
          '--headless',
          '--disable-gpu',
          '--disable-dev-shm-usage',
          '--disable-setuid-sandbox', 
          '--no-zygote'
        ]
    });

    var page = await browser.newPage();

    await page.setContent(htmlContent);

    var resume = await page.pdf({ format: 'A4' });

    await browser.close();

    return resume;
}