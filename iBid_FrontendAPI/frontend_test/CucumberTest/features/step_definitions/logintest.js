const { Given, When, Then } = require('cucumber');
const assert = require('assert');
const { driver } = require('../support/web_driver');


Given(/^Browse to web site  "([^"]*)"$/, async function (url) {

    await driver.get(url);
});

When(/^user click to link login$/, async function () {

    return driver.findElement({ id: "loginLink" }).click();
});

When(/^user input password "([^"]*)"$/, async function (password) {

    await driver.sleep(1000);
    return driver.findElement({ id: password }).sendKeys(password);
});

Then(/^click to login button$/, async function () {
    await driver.sleep(1000);
    return driver.findElement({ id: "login" }).click();
});

Then(/^user get an notification "([^"]*)"$/, async function (arg1) {
    await driver.sleep(1000);
    return 'Login Sucessfull';
});

When(/^user input username  "([^"]*)"$/, async function (username) {

    await driver.sleep(1000);
    return driver.findElement({ id: username }).sendKeys(username);
});




