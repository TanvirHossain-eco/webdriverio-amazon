/* eslint-disable wdio/no-pause */
const assert = require('chai').assert
// const LoginPage = require('../pageobjects/login.page')
// const SecurePage = require('../pageobjects/secure.page')
// Getting and Setting Timeouts
// Get/Set Timeouts
// Implicit wait - browser session wait
// Explicit wait - specific wait added to a wait method such as waitForExist...
// Implicit and Explicit wait get added together


it('TCE901', async() => {
    await browser.maximizeWindow()
    await browser.url('https://webdriver.io')
    await browser.setTimeouts(5000, 8000, 4000) // setTimeout (implicit, pageload, script)
    console.log("Timeout: " + await browser.getTimeouts())        
});
// Declaring timeouts specifically Implicit Wait - browser session wait
it('TCE902', async() => {
    await browser.maximizeWindow()
    await browser.url('https://webdriver.io')
    await browser.setTimeout({'implicit': 7000 }) // setTimeout (implicit, pageload, script)
    console.log("Timeout: " + await browser.getTimeouts())        
});
// pageLoad wait
it('TCE903', async() => {
    await browser.maximizeWindow()
    await browser.url('https://github.com')
    await browser.setTimeout({'pageLoad': 2000 }) // setTimeout (implicit, pageload, script)
    console.log("Timeout: " + await browser.getTimeouts())        
});
// script wait
it('TCE904', async() => {
    await browser.maximizeWindow()
    await browser.url('https://github.com')
    await browser.setTimeout({'script': 1000 }) // setTimeout (implicit, pageload, script)
    console.log("Timeout: " + await browser.getTimeouts())        
});
// WebdriverIO Timeouts
it('TCE905', async() => {
    await browser.maximizeWindow()
    await browser.url('https://the-internet.herokuapp.com')
    await $('<h3 />').waitForExist({timeout: 10000})
         
});

describe('My Login Page', () => {
    it('TCE1001', async() => {
        assert('123' == 123, 'Error: Mismatch')
    });

    it('TCE1002', async() => {
        assert.isOk(1, "Error:-")
    });

    it('TCE1003', async() => {
        await browser.maximizeWindow()
        await browser.url('https://the-internet.herokuapp.com')
        var elem1003 = await $('<h2>').getAttribute('name')
        assert.equal(elem1003, 'Available Examples', 'Error: Mismatch')
    });
});


   



