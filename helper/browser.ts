import puppeteer = require('puppeteer');
import dotenv = require('dotenv');
import {blue, red} from 'colors';

dotenv.config();
jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
const headless = process.env.HEADLESS !== '0';

export let browser;
export let page;

export const launchBrowser = async () => {
    if (!process.env.NRFCLOUD_LOGIN || !process.env.NRFCLOUD_PASSWORD) {
        throw new Error('Please define the environment variable NRFCLOUD_LOGIN!');
    }
    browser = await puppeteer.launch({headless, args: ['--no-sandbox']}); // See https://chromium.googlesource.com/chromium/src/+/master/docs/linux_suid_sandbox_development.md
    page = await browser.newPage();
    page.on('error', err => {
        console.error(red(`browser> ${JSON.stringify(err)}`));
    });
    page.on('pageerror', msg => {
        console.error(red(`browser> ${JSON.stringify(msg)}`));
    });
    page.on('console', msg => {
        console.log(blue(`browser> ${JSON.stringify(msg)}`));
    });
    return page;
};

export const closeBrowser = async () => {
    if (browser) {
        if (headless) {
            browser.close();
        } else {
            console.log(blue('Keeping the browser open ...'));
        }
    }
};
