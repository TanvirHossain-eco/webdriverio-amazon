/* eslint-disable wdio/no-debug */
/* eslint-disable wdio/no-pause */
it('TCE001', async() => {
    await browser.maximizeWindow()
    await browser.url ('https://www.google.com')
    await browser.debug()    
    // await browser.url ('https://www.youtube.com')
    // await browser.debug()

});
// visit the url with admin access
it('TCE002', async() => {
    await browser.maximizeWindow()
    await browser.url ('https://admin:admin@the-internet.herokuapp.com/basic_auth')
    await browser.pause (3000)    
});
// get the input field & print it
it('TCE003', async() => {
    await browser.maximizeWindow()
    await browser.url('https://www.saucedemo.com/')
    var multipleElements = await $$('<input />').length[0] // get all the input elements names
    console.log ("Number of elements: " + multipleElements) // print all the elements names

});
// get the first list item & print it
it('TCE004', async() => {
    await browser.maximizeWindow()
    await browser.url('https://the-internet.herokuapp.com/')
    var anElement = await $$('<li />')[0] // get the first list element name
    console.log ("Print Element: " + await anElement.getText()) // print the first element name

});
// get the third menu item & print it
it('TCE005', async() => {
    await browser.maximizeWindow()
    await browser.url('https://jqueryui.com/')
    var elements = await $$('.menu-item')// get the menu element 
    var element = await elements[2]      // get the menu element on index 2
    console.log ("Third Item: " + await element.getText()) // print the menu element name

});
// get the last menu item & print it
it('TCE006', async() => {
    await browser.maximizeWindow()
    await browser.url('https://jqueryui.com/')
    var elements = await $$('.menu-item')                 // get the menu element
    var element = await elements[elements.length-1]       // get the menu element name on last index
    console.log ("Last Item: " + await element.getText()) // print the menu element name

});
// get all the menu items name & print it
it('TCE007', async() => {
    await browser.maximizeWindow()
    await browser.url('https://jqueryui.com/')
    var elements = await $$('.menu-item')      // get the menu element name
    console.log("All Menu item names: ")
    await elements.forEach(function (item) {
        console.log(item.getText())            // print all the menu element name
    });
     
});
// Find all the urls links from a page & Print it
it('TCE008', async() => {
    await browser.maximizeWindow()
    await browser.url('https://www.google.com/')
    var elements2 = await $$('<a />')      // get the anchor tag element 
    const result = [];
    for (const item of elements2){
        result.push(await item.getAttribute('href'))
    }
    console.log ('Links on the WebPage: ')
    console.log(result)
     
});
// Scroll down to
it('TCE009', async() => {
    await browser.maximizeWindow()
    await browser.url('https://the-internet.herokuapp.com/')
    await browser.saveScreenshot('./Screenshots/TCE009_Before.png')
    await $('#page-footer').scrollIntoView()
    await browser.saveScreenshot('./Screenshots/TCE009_After.png')

});
// Add & Delete Elements with a single click event
it('TCE010', async() => {
    await browser.maximizeWindow()
    await browser.url('https://the-internet.herokuapp.com/add_remove_elements/')
    // await browser.debug()
    await $('button=Add Element').click()
    await browser.pause(3000)
    await $('button=Add Element').click()
    await browser.pause(3000)
    await $('button=Add Element').click()
    // await browser.debug()
    await $('button=Delete').click()
    await browser.pause(3000)
    await $('button=Delete').click()
    await browser.pause(3000)
    await $('button=Delete').click()
    // await browser.debug()    
});
// Double click event
it('TCE011', async() => {
    await browser.maximizeWindow()
    await browser.url('https://api.jquery.com/dblclick/')
    await browser.pause(3000)
    await $('.demo.code-demo').scrollIntoView()
    await browser.pause(3000)
    // await browser.debug()
    await browser.switchToFrame(0)
    await $('<div />').doubleClick()
    await browser.pause(3000)
    // await browser.debug()
});
// Right Click
it('TCE012', async() => {
    await browser.maximizeWindow()
    await browser.url('https://www.saucedemo.com/')
    await $('.login_logo').click({
        button: 'right'
    })
    // await browser.debug()
});
// Text to input field
it('TCE013', async() => {
    await browser.maximizeWindow()
    await browser.url('https://jquery.com')
    await browser.debug()
    await $('[name="s"]').saveScreenshot('./Screenshots/TCE013_Before.png')
    await browser.pause(3000)
    await $('[name="s"]').setValue("This is a test")
    await browser.debug()
    await $('[name="s"]').saveScreenshot('./Screenshots/TCE013_After.png')
    
});
// Set value + Add Value
it('TCE014', async() => {
    await browser.maximizeWindow()
    await browser.url('https://jquery.com/')
    // await browser.debug()
    await $('[name="s"]').setValue("WebdriverIO")
    await browser.debug()
    await $('[name="s"]').addValue(" is amazing")
    // await browser.pause(3000)
    await browser.debug()
    await $('[name="s"]').clearValue()
       
});
// Enter BackSpace
it('TCE015', async() => {
    await browser.maximizeWindow()
    await browser.url('https://jquery.com/')
    await $('[name="s"]').click()
    await browser.pause(3000)
    await browser.keys("footprint")
    await browser.pause(3000)
    // await browser.debug()
    await browser.keys("\uE003\uE003\uE003\uE003\uE003")
    // await browser.debug()    
});
// Mouse hovering
it('TCE016', async() => {
    await browser.maximizeWindow()
    await browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await $('[name="username"]').setValue("Admin")
    await browser.pause(3000)
    await $('[name="password"]').setValue("admin123")
    await browser.pause(3000)
    await $('.orangehrm-login-button').click()
    await browser.pause(5000)
    await $('span=Admin').moveTo()
    await browser.pause(5000)
    await $('span=Leave').moveTo()
    await browser.pause(5000)
    await $('span=My Info').moveTo()
    await browser.pause(5000)
    await $('span=Performance').moveTo()
    await browser.pause(5000)
    await $('span=Recruitment').moveTo()
    await browser.pause(5000)
    // await browser.debug()
    
    // await browser.debug()    
});
//Web page navigation with move back & forward
it('TCE017', async() => {
    await browser.maximizeWindow()
    await browser.url('https://jquery.com/')
    console.log ('First Page is: ' + await browser.getTitle())
    await browser.pause(3000)
    await browser.navigateTo('https://youtube.com')
    console.log('Second Page is: ' + await browser.getTitle())
    await browser.pause(3000)
    await browser.back()
    console.log('Back to: ' + await browser.getTitle())
    await browser.pause(3000)
    await browser.forward()
    console.log('Forward to: ' + await browser.getTitle())
    // await browser.debug()
    
    // await browser.debug()    
});
// Web page Refresh & Restart
it('TCE018', async() => {
    await browser.maximizeWindow()
    await browser.url('https://jquery.com/')
    await browser.debug()
    await browser.refresh()
    await browser.debug()
});
// Web page reload with different session id
it('TCE019', async() => {
    await browser.maximizeWindow()
    await browser.url('https://jquery.com/')
    console.log('Session id 1: ' + await browser.sessionId)
    await browser.pause(3000)
    await browser.reloadSession()
    console.log('Session id 2: ' + await browser.sessionId)
    // await browser.debug()
});
// Browser Maximize
it('TCE020', async() => {
    await browser.url('https://the-internet.herokuapp.com/large')
    await $('#header-1').scrollIntoView()
    await browser.saveScreenshot('./Screenshots/TCE020_Before.png')
    await browser.maximizeWindow()
    await browser.saveScreenshot('./Screenshots/TCE020_After.png')
    // await browser.debug()
});
// Browser Minimize
it('TCE021', async() => {
    await browser.url('https://youtube.com')
    await browser.pause(3000)
    await browser.minimizeWindow()
    await browser.pause(3000)
    await browser.maximizeWindow()
    // await browser.debug()
});
// Multiple Tabs on same browser windows 
it('TCE022', async() => {
    await browser.url('https://youtube.com')
    await browser.pause(3000)
    await browser.newWindow(
        'https://google.com', 
        'Google',
        "width=200, height=400, resizable, scrollbrs=yes"
        )
    await browser.getUrl()
    await browser.pause(3000)
    
    // await browser.debug()
});
// Switch to Window
it('TCE023', async() => {
    await browser.maximizeWindow()
    await browser.url('https://webdriver.io/')
    await browser.getTitle()
    await browser.pause(3000)
    await $('a[href="https://www.mozilla.org/"]').scrollIntoView()
    await browser.pause(5000)
    await $('a[href="https://www.mozilla.org/"]').click()
    await browser.pause(3000)
    let win = await browser.getWindowHandles()
    await browser.switchToWindow(win[1])
    console.log(await browser.getTitle())
    await browser.pause(3000)
    
    // await browser.debug()
});
// Switch between iFrames
it('TCE024', async() => {
    await browser.maximizeWindow()
    await browser.url('https://the-internet.herokuapp.com/iframe')
    await browser.pause(3000)
    await browser.switchToFrame(0)
    await $('<p>').getText()
    await browser.switchToParentFrame()
    await $('<h3>').getText()
    // await browser.debug()
});
// Close particular window or whole browser
it('TCE025', async() => {
    await browser.maximizeWindow()
    await browser.url('https://the-internet.herokuapp.com/')
    await browser.pause(3000)
    await browser.newWindow('https://youtube.com')
    await browser.pause(3000)
    await browser.closeWindow()
    await browser.deleteSession() //close the browser window
    await browser.pause(3000)

    // await browser.debug()
});
// Alert with javascript
// Window popup alert with single OK button
it('TCE026', async() => {
    await browser.maximizeWindow()
    await browser.url('https://the-internet.herokuapp.com/javascript_alerts')
    await browser.pause(3000)
    await $('button=Click for JS Alert').click()
    await browser.pause(3000)
    await browser.acceptAlert()
    await browser.pause(3000)
    

    // await browser.debug()
});
// Window popup alert with Double buttons
it('TCE027', async() => {
    await browser.maximizeWindow()
    await browser.url('https://the-internet.herokuapp.com/javascript_alerts')
    await browser.pause(3000)
    await $('button=Click for JS Confirm').click()
    await browser.pause(3000)
    await browser.acceptAlert()
    await browser.pause(3000)
    await $('button=Click for JS Confirm').click()
    await browser.pause(3000)
    await browser.dismissAlert()
    await browser.pause(3000)
    

    // await browser.debug()
});
// Window popup alert with Text input & Single button
it('TCE028', async() => {
    await browser.maximizeWindow()
    await browser.url('https://the-internet.herokuapp.com/javascript_alerts')
    await browser.pause(3000)
    await $('button=Click for JS Prompt').click()
    await browser.pause(3000)
    await browser.getAlertText()
    await browser.sendAlertText("This is a JS test")
    await browser.pause(3000)
    await browser.acceptAlert()
    await browser.pause(3000)
    await $('button=Click for JS Prompt').click()
    await browser.pause(3000)
    await browser.getAlertText()
    await browser.dismissAlert()
    await browser.pause(3000)
    
    // await browser.debug()
});
// Drop down menus & select options
it('TCE028', async() => {
    await browser.maximizeWindow()
    await browser.url('https://the-internet.herokuapp.com/dropdown')
    await browser.pause(3000)
    await $('#dropdown').selectByAttribute('value', '1')
    await browser.pause(3000)
    await $('#dropdown').selectByIndex(2)
    await browser.pause(3000)
    await $('#dropdown').selectByVisibleText('Option 1')
    
    await browser.pause(3000)
    
    
    // await browser.debug()
});
// Drag & Drop a Particular Element
it('TCE029', async() => {
    await browser.maximizeWindow()
    await browser.url('https://jqueryui.com/resources/demos/droppable/default.html')
    await browser.pause(3000)
    await $('#draggable').dragAndDrop(await $('#droppable'))
    await browser.pause(4000)
      
    
    // await browser.debug()
});
// Upload Files
it('TCE030', async() => {
    await browser.maximizeWindow()
    await browser.url('https://the-internet.herokuapp.com/upload')
    await browser.pause(3000)
    await $('#file-upload').addValue("C:/Users/Hp/Desktop/Echologyx QA Materials/QA Automation/NodeJS/webdriverio-amazon/screenshots/TTC001.png")
    await browser.pause(4000)
    await $('#file-submit').click()
    await browser.pause(4000)
    
    // await browser.debug()
});
// Handling Cookies
it('TCE031', async() => {
    await browser.maximizeWindow()
    await browser.url('https://the-internet.herokuapp.com/')
    await browser.pause(3000)
    console.log(await browser.getCookies()) // Print all cookies
    console.log("#################") // Use Separator
    await browser.deleteCookies(['optimizelyBuckets']) // Delete all the cookies have the values
    console.log(await browser.getCookies()) // Print whats left
    await browser.pause(4000)
    
    // await browser.debug()
});
// Handling Cookies
it('TCE032', async() => {
    await browser.maximizeWindow()
    await browser.url('https://the-internet.herokuapp.com/')
    await browser.pause(3000)
    console.log(await browser.getCookies()) // Print all cookies
    console.log("#################") // Use Separator
    await browser.setCookies([
        {
            name: 'cookie 1',
            value: 'one'
        }, 
        {
            name: 'cookie 2',
            value: 'two'
        }   
    ])
    console.log("#################") // Use Separator
    console.log(await browser.getCookies()) // All New
    await browser.pause(4000)
    
    // await browser.debug()
});
