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
it('TCE704', async() => {
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
it('TCE705', async() => {
    await browser.maximizeWindow()
    await browser.url('https://www.saucedemo.com/')
    await browser.pause(3000)
    await $('#user-name').getText()
    await browser.pause(3000)

    // await browser.debug()

});

it('TCE706', async() => {
    await browser.maximizeWindow()
    await browser.url('https://the-internet.herokuapp.com')
    await browser.pause(3000)
    const logo706 = await $('<img>')
    const location706 = await logo706.getLocation()
    console.log('Location: '+ await location706)

    const logo_x = await logo706.getLocation('x')
    console.log('Location X: '+ await logo_x)
    const logo_y = await logo706.getLocation('y')
    console.log('Location Y: '+ await logo_y)
    await browser.pause(3000)

    // await browser.debug()

});
//  Get the size of a logo
it('TCE707', async() => {
    await browser.maximizeWindow()
    await browser.url('https://the-internet.herokuapp.com')
    await browser.pause(3000)
    const logo707 = await $('<img>')
    const size707 = await logo707.getSize()
    const width707 = await logo707.getSize('width')
    console.log('Width: '+ await width707)
    const height707 = await logo707.getSize('height')
    console.log('Height: '+ await height707)
    await browser.pause(3000)

    // await browser.debug()

});

it('TCE708', async() => {
    await browser.maximizeWindow()
    await browser.url('https://the-internet.herokuapp.com')
    await browser.pause(3000)
    console.log("Image HTML is: " + await $('<img>').getHTML())
    await browser.pause(3000)

    // await browser.debug()

});
// Hard Sleep or browser.pause
it('TCE801', async() => {
    await browser.maximizeWindow()
    await browser.url('https://the-internet.herokuapp.com/dynamic_loading/1')
    await $('button=Start').click()
    await browser.pause(10000)
    console.log(await $('#finish').$('<h4 />').getText())

});
// Explicit Wait - wait until element is active or enable
it('TCE802', async() => {
    await browser.maximizeWindow()
    await browser.url('https://output.jsbin.com/gecequg')
    var field802 = await $('#MY_ID')
    await field802.waitForClickable()
    await field802.click()
    console.log("Result: "+ await $('#demo').getText())
    await browser.pause(3000)
    

});

// Explicit Wait - wait until element is active or enable
it.only('TCE803', async() => {
    await browser.maximizeWindow()
    await browser.url('https://the-internet.herokuapp.com/dynamic_loading/1')
    await $('button=Start').click()
    var field803 = await $('#finish')
    await field803.waitForClickable({
        timeout: 10000
    })
    console.log("Result: "+ await $('#finish').$('<h4 />').getText())
    await browser.pause(3000)
    

});





