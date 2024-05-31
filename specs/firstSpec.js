import { Builder, By, until } from 'selenium-webdriver';
import { expect } from 'chai';

describe('First suite', function () {
    let driver;

    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });

    after(async function () {
        await driver.quit();
    });

    it('first test', async function () {
        const searchValue = 'телефон samsung';
        const searchInputSelector = '//*[@name= "search"]'
        const searchButtonSelector = '//button[contains(@class, "button_color_green ")]';

        await driver.get('https://rozetka.com.ua/ua/');
        
        const searchInput = await driver.findElement(By.xpath(searchInputSelector));
        const searchButton = await driver.findElement(By.xpath(searchButtonSelector));
        
        await driver.wait(until.elementIsVisible(searchInput), 5000, 'Search input should be visible');
        await driver.wait(until.elementIsVisible(searchButton), 5000, 'Search button should be visible');
        
        await searchInput.sendKeys(searchValue);
        await searchButton.click();

        await driver.sleep(5000); // 30 * 1000
    });
});


