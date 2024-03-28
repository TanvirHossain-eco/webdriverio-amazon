/* eslint-disable wdio/no-pause */
// Assertion
// Check elements presence
it('TCE501', async() => {
    await browser.maximizeWindow()
    await browser.url('https://the-internet.herokuapp.com/dynamic_loading/2')
    var elem501 = await $('#finish')
    await $('button=Start').click()
    console.log("Check for finish element after the Start is clicked")
    console.log(await elem501.isExisting())
    await browser.pause(10000)
    var elem502 = await $('#finish')
    console.log(await elem502.isExisting())
    console.log("Check Finished")
   
    // await browser.debug()
});

it('TCE502', async() => {
    await browser.maximizeWindow()
    await browser.url('https://the-internet.herokuapp.com/dynamic_loading/2')
    var elem501 = await $('#finish')
    await $('button=Start').click()
    await expect(elem501).toExist() // assertion
    console.log("Check for finish element after the Start is clicked")
    await browser.pause(10000)
    console.log(await elem501.getText())
    // await browser.pause(10000)
    // var elem502 = await $('#finish')
    // console.log(await elem502.toBeExisting())
    // console.log("Check Finished")
   
    // await browser.debug()
});
// An Element enabled or disabled
it('TCE503', async() => {
    await browser.maximizeWindow()
    await browser.url('https://the-internet.herokuapp.com/dynamic_controls')
    var elem503 = await $('input[type="text"]')
    console.log("Check if enabled before click")
    console.log (await elem503.isEnabled())
    await $('button=Enable').click()
    await browser.pause(5000)
    var elem504 = await $('input[type="text"]')
    console.log("Check if enabled after click")
    console.log(await elem504.isEnabled())
    // await browser.debug()
});
// An Element enabled or disabled with assertion
it('TCE504', async() => {
    await browser.maximizeWindow()
    await browser.url('https://the-internet.herokuapp.com/dynamic_controls')
    var elem503 = await $('input[type="text"]')
    console.log("Check if enabled before click")
    await expect(elem503).toBeDisabled()
    await $('button=Enable').click()
    await browser.pause(5000)
    var elem504 = await $('input[type="text"]')
    console.log("Check if enabled after click")
    await expect(elem504).toBeEnabled()
    // await browser.debug()
});
// Check if Element is visible
it.only('TCE505', async() => {
    await browser.maximizeWindow()
    await browser.url('https://the-internet.herokuapp.com/dynamic_controls')
    var elem503 = await $('input[type="text"]')
    console.log("Check if enabled before click")
    await expect(elem503).toBeDisabled()
    await $('button=Enable').click()
    await browser.pause(5000)
    var elem504 = await $('input[type="text"]')
    console.log("Check if enabled after click")
    await expect(elem504).toBeEnabled()
    // await browser.debug()
});