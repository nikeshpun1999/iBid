const { Given, When, Then } = require('cucumber');
const assert = require('assert');
const { driver } = require('../support/web_driver');

Then(/^User Browser to webpage link update profile$/, async function () {
    await driver.sleep(1000);
    return driver.findElement({ id: "updateprofileLink" }).click();
});

Then(/^User click to Edit profile button$/, async function () {
    await driver.sleep(1000);
    return driver.findElement({ id: "update_profile" }).click();
    
});

Then(/^User must get notification "([^"]*)"$/, async function (arg1) {
    await driver.sleep(1000);
    return "Sucessful"
});

When(/^redirected to  site  "([^"]*)"$/, async function (url) {
    await driver.sleep(1000);
    await driver.get(url);
});

When(/^user input username "([^"]*)"$/, async function (arg1) {
    await driver.sleep(1000);
    return driver.findElement({ id: username }).sendKeys(username);
});
