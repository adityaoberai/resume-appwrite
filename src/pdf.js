import puppeteer from 'puppeteer';

export async function getPdf(htmlContent) { 
    var browser = await puppeteer.launch({ 
        executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
        args: [
          '--no-sandbox',
          '--disable-dev-shm-usage',
          '--disable-setuid-sandbox'
        ]
    });

    var page = await browser.newPage();

    await page.setContent(htmlContent);

    var resume = await page.pdf({ 
      format: 'A4'
    });

    await browser.close();

    return resume;
}