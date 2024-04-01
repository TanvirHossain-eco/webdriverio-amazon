/* eslint-disable wdio/no-pause */
// Detecting Shadows
it('TCE701', async() => {
    await browser.maximizeWindow()
    await browser.url('https://run.plnkr.co/plunks/RpYnoSbkkHidZ08d/')
    await browser.pause(3000)
    await $('button=Proceed').click()
    console.log(await $('#heading').getText())
    console.log(await $('#container').shadow$('#inside').getText())
    await browser.pause(3000)
    // await browser.debug()

});
// Getting Element Property
it('TCE702', async() => {
    await browser.maximizeWindow()
    await browser.url('https://google.com')
    await browser.pause(3000)
    console.log(await browser.getPageSource())
    await browser.pause(3000)
    // await browser.debug()

});
// Getting Element Property
it('TCE703', async() => {
    await browser.maximizeWindow()
    await browser.url('https://www.saucedemo.com/')
    await browser.pause(3000)
    await $('#user-name').addValue("standard_user")
    var elem703 = await browser.getActiveElement()
    console.log(await $(elem703).getTagName())
    await browser.pause(3000)
    // await browser.debug()

});
// Getting Element Property - CSS Property
it.only('TCE704', async() => {
    await browser.maximizeWindow()
    await browser.url('https://the-internet.herokuapp.com/login')
    await browser.pause(3000)
    console.log("Disabled Property is: " + await $('#username').getProperty('disabled'))
    console.log("Attribute is: " + await $('#username').getAttribute('type'))
    console.log("Font-Family is: " + await $('#username').getCSSProperty('font-family'))
    console.log("Font Size is: " + await $('#username').getCSSProperty('font-size'))
    console.log("Font Weight is: " + await $('#username').getCSSProperty('font-weight'))
    await browser.pause(3000)

    // await browser.debug()

});
// Getting Elements Tag, Size & Location




