var { Given, When, Then } = require('cucumber')

const assert = require('assert');
const { driver } = require('../support/web_driver');

When(/^user click to link register$/, async function () {
    await driver.sleep(1000);
    return driver.findElement({ id: "registerLink" }).click();
});
Then(/^click to reigister button$/, async function () {
    await driver.sleep(1000);
    return driver.findElement({ id: "register" }).click();
});

Then(/^a notificatioin is displayed to user "([^"]*)"$/, async function (arg1) {

    return 'Registration sucessful';
});

Then(/^a notification  is displayed to user "([^"]*)"$/, async function (arg1) {

    return 'Registration sucessfully';
});