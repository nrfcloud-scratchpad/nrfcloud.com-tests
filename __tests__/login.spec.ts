import { closeBrowser, launchBrowser, page } from '../helper/browser';
import * as Bluebird from 'bluebird';

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
        const profileButton = await page.$('#profile-button');
        await profileButton.click();
        const links = page.$$('nav.navbar a');
        const logout = await Bluebird.try(() => links)
            .map(l => l.getProperty('innerHTML')
                .then(v => v.jsonValue())
                .then(text => text === 'Logout' ? l : undefined)
            )
            .filter(l => l)
            .spread(link => link);
        await logout.click();
        const confirmButton = await page.$('.modal-dialog *[role=toolbar] button');
        await confirmButton.click();
        await page.waitForSelector('nav.unauthorized');
    });
});
