const puppeteer = require('puppeteer');

export async function getPdf(htmlContent) { 
    var browser = await puppeteer.launch();

    var page = await browser.newPage();

    await page.setContent(htmlContent);

    var resume = await page.pdf({ format: 'A4' });

    await browser.close();

    return resume;
}