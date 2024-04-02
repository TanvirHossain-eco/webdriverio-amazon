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
// Check enabled or disabled with assertion
it('TCE505', async() => {
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
it('TCE506', async() => {
    await browser.maximizeWindow()
    await browser.url('https://the-internet.herokuapp.com/dynamic_loading/1')
    await $('button=Start').click()
    var elem505 = await $('#finish')
    console.log("After Clicking Start")
    console.log(await elem505.isDisplayed())
    await browser.pause(8000)
    console.log("8 Seconds After Clicking Start")
    console.log (await elem505.isDisplayed())
    
    // await browser.debug()
});
// Check if Element is visible with assertion
it('TCE507', async() => {
    await browser.maximizeWindow()
    await browser.url('https://the-internet.herokuapp.com/dynamic_loading/1')
    var elem506 = await $('#finish')
    console.log("After Clicking Start")
    // await $('button=Start').click()
    await expect(elem506).toBeDisplayed()
    
    // console.log(await elem505.isDisplayed())
    // await browser.pause(8000)
    // console.log("8 Seconds After Clicking Start")
    // console.log (await elem505.isDisplayed())
    
    // await browser.debug()
});
// Check if Element is visible on the viewport with assertion
it('TCE508', async() => {
    await browser.maximizeWindow()
    await browser.url('https://the-internet.herokuapp.com/')
    var elem507 = await $('=A/B Testing')
    await expect(elem507).toBeDisplayedInViewport()
    var elem508 = await $('=WYSIWYG Editor')
    await $('#page-footer').scrollIntoView()
    await browser.pause(3000)
    await expect(elem508).toBeDisplayedInViewport()
    
    // await browser.debug()
});
// Check if checkbox is selected or not
it('TCE509', async() => {
    await browser.maximizeWindow()
    await browser.url('https://the-internet.herokuapp.com/checkboxes')
    var checkbox1 = await $$('input[type="checkbox"]')[0]
    // await browser.pause(3000)
    console.log("Verify first checkbox")
    console.log(await checkbox1.isSelected())
    // await browser.pause(3000)
    var checkbox2 = await $$('input[type="checkbox"]')[1]
    console.log("Verify second checkbox")
    console.log(await checkbox2.isSelected())
    
    // await browser.debug()
});
// Check if checkbox is selected or not with assertion
it('TCE510', async() => {
    await browser.maximizeWindow()
    await browser.url('https://the-internet.herokuapp.com/checkboxes')
    var checkbox3 = await $$('input[type="checkbox"]')[0]
    // await browser.pause(3000)
    console.log("Verify first checkbox")
    await expect(checkbox3).toBeSelected()
    // console.log(await checkbox3.isSelected())
    // await browser.pause(3000)
    var checkbox4 = await $$('input[type="checkbox"]')[1]
    console.log("Verify second checkbox")
    await expect(checkbox4).toBeSelected()
    // console.log(await checkbox4.isSelected())
    
    // await browser.debug()
});
// Check button is clickable with assertion
it('TCE511', async() => {
    await browser.maximizeWindow()
    await browser.url('https://html.com/attributes/button-disabled/')
    var btn1 = await $("button=You can't click me.")
    console.log("Check if clickable")
    await expect(btn1).toBeClickable()
    
    
    // await browser.debug()
});
// Check button is clickable with assertion
it('TCE512', async() => {
    await browser.maximizeWindow()
    await browser.url('https://the-internet.herokuapp.com/dynamic_loading/1')
    var btn2 = await $("button=Start")
    console.log("Check if clickable")
    await expect(btn2).toBeClickable()
    
    // await browser.debug()
});
// WebdriverIO Methods
// Focused Elements
it('TCE601', async() => {
    await browser.maximizeWindow()
    await browser.url('https://the-internet.herokuapp.com/inputs')
    await browser.pause(3000)
    var input1 = await $('input[type="number"]')
    console.log("Not Checked")
    console.log(await input1.isFocused())
    await browser.pause(3000)
    await input1.click()
    console.log("Checked")
    console.log(await input1.isFocused())
    await browser.pause(3000)
    // await browser.debug()

});
// Focused Elements with assertion
it('TCE602', async() => {
    await browser.maximizeWindow()
    await browser.url('https://the-internet.herokuapp.com/inputs')
    await browser.pause(3000)
    var input1 = await $('input[type="number"]')
    console.log("Not Checked")
    await expect(input1).toBeFocused()
    // console.log(await input1.isFocused())
    await browser.pause(3000)
    await input1.click()
    console.log("Checked")
    await expect(input1).toBeFocused()
    // console.log(await input1.isFocused())
    await browser.pause(3000)
    // await browser.debug()

});
// Check Attributes with Assertion - to have attribute
it('TCE603', async() => {
    await browser.maximizeWindow()
    await browser.url('https://the-internet.herokuapp.com/status_codes')
    await browser.pause(3000)
    var elem603 = await $('=200')
    await expect(elem603).toHaveAttribute('href', 'status_codes/200')
    await browser.pause(3000)
    // await browser.debug()

});
// Check Attributes with Assertion - to have attribute containing
it('TCE604', async() => {
    await browser.maximizeWindow()
    await browser.url('https://the-internet.herokuapp.com/broken_images')
    await browser.pause(3000)
    var image604 = await $$('<img>')[3]
    await expect(image604).toHaveAttributeContaining('src', '.jpg')
    await browser.pause(3000)
    // await browser.debug()

});
// Project 1: Orange HR
// Log in & Assert the logo attribute & logo element CSS width property 
it('HR_TCE605', async() => {
    await browser.maximizeWindow()
    await browser.url('https://opensource-demo.orangehrmlive.com/')
    await browser.pause(3000)
    await $('[name="username"]').setValue('Admin')
    await $('[name="password"]').setValue('admin123')
    await $('.orangehrm-login-button').click()
    await browser.pause(3000)
    var logo605 = await $('img[src*="logo"]')
    await expect(logo605).toHaveAttribute('alt', 'client brand banner')
    await expect(logo605).toHaveElementProperty('width', 182) // CSS width Property
    await expect(logo605).toHaveElementProperty('height', 50) // CSS width Property
    await browser.pause(3000)
    // await browser.debug()

});
// Log in and assign leave
it('HR_TCE606', async() => {
    await browser.maximizeWindow()
    await browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await browser.pause(3000)
    await $('[name="username"]').setValue('Admin')
    await $('[name="password"]').setValue('admin123')
    await $('.orangehrm-login-button').click()
    await browser.pause(3000)
    await $('[title="Assign Leave"]').moveTo()
    await $('[title="Assign Leave"]').click()
    await browser.pause(3000)
    await $('.oxd-autocomplete-wrapper').click()
    await browser.keys("Amelia  Brown")
    await browser.pause(3000)
    await $('.oxd-select-wrapper').click()
    if(await $('.oxd-select-wrapper').isExisting()){
        await browser.keys("\uE015") // Code for down arrow
        await browser.keys("\uE015")
        await browser.keys("\uE015")
        await browser.keys("\uE015")
        await browser.keys("\uE007") // Code for Enter Key
        await browser.pause(3000)
        var leave_type = await $('.oxd-select-wrapper')
        await expect(leave_type).toHaveTextContaining("Personal")
    }
    // Set "From" date
    const fromDateInput = await $('.oxd-grid-item.oxd-grid-item--gutters:has([placeholder="yyyy-dd-mm"]):nth-child(1) [placeholder="yyyy-dd-mm"]')
    await fromDateInput.setValue('2024-01-04')
    await browser.pause(3000)
    // Set "To" date
    const toDateInput = await $('.oxd-grid-item.oxd-grid-item--gutters:has([placeholder="yyyy-dd-mm"]):nth-child(2) [placeholder="yyyy-dd-mm"]')
    await toDateInput.clearValue()
    await toDateInput.setValue('2024-05-04')




    await browser.pause(3000)
    // await browser.debug()

});