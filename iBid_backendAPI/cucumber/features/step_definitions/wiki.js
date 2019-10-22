const assert = require('assert');
const webdriver = require('selenium-webdriver/chrome');
const co = new webdriver.Options();
co.setChromeBinaryPath("/Applications/UsrBin/Google\ Chrome.app/Contents/MacOS/Google\ Chrome");
console.log("Web browsing testing...............");

const browser = new webdriver.Driver()
    .usingServer()
    .withCapabilities({ 'browserName': 'chrome' })
    .setChromeOptions(co)
    .build();

browser.get('http://en.wikipedia.org/wiki/Wiki');
browser.findElements(webdriver.By.css('[href^="/wiki/"]'))
    .then(function (links) {
        assert.equal(19, links.length); // Made up number
        browser.quit();
    });