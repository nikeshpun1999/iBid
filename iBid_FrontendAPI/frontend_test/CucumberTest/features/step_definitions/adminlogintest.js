var { Given, When, Then } = require('cucumber')


Given(/^Browse the website "([^"]*)"$/, async function (url) {

    await driver.get(url);
});

When(/^login link is clicked$/, async function () {

    return driver.findElement({ id: "loginLink" }).click();
});

When(/^user enter username  "([^"]*)"$/, async function (username) {
    await driver.sleep(1000);
    return driver.findElement({ id: username }).sendKeys(username);
});


When(/^user enter password "([^"]*)"$/, async function (password) {

    await driver.sleep(1000);
    return driver.findElement({ id: password }).sendKeys(password);
});


When(/^clicked to Login  button$/, async function () {

    return driver.findElement({ id: "login" }).click();
});


Then(/^User is redirected to admin dashboard "([^"]*)"$/, async function (url) {

    await driver.get(url);
});

When(/^user change username as "([^"]*)"$/, async function (arg1) {

  await driver.sleep(1000);
    return driver.findElement({ id: username }).sendKeys(username);
});

