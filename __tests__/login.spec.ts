import {closeBrowser, launchBrowser, page} from '../helper/browser';

beforeAll(launchBrowser);
afterAll(closeBrowser);

const testHost = process.env.TEST_HOST || 'https://nrfcloud.com';

describe('Login', () => {
    test('loggin in', async () => {
        await page.goto(testHost);
        await page.click('nav.unauthorized a:last-child');
        await page.waitForSelector('input[type=email]');
        await page.type('input[type=email]', process.env.NRFCLOUD_LOGIN);
        await page.type('input[type=password]', process.env.NRFCLOUD_PASSWORD);
        await page.click('button[type=submit]');
        await page.waitForSelector('section.sidebar a.dashboard');
    });
    test('logging out', async () => {
        const logout = await page.$('nav.navbar a');
        await logout.click();
        await page.waitForSelector('nav.unauthorized');
    });
});
