it('TCE001', async() => {
    await browser.url ('https://www.google.com')
    await browser.debug()    
    // await browser.url ('https://www.youtube.com')
    // await browser.debug()

});
// visit the url with admin access
it('TCE002', async() => {
    await browser.url ('https://admin:admin@the-internet.herokuapp.com/basic_auth')
    await browser.pause (3000)    
});
// get the input field & print it
it('TCE003', async() => {
    await browser.url('https://www.saucedemo.com/')
    var multipleElements = await $$('<input />').length[0] // get all the input elements names
    console.log ("Number of elements: " + multipleElements) // print all the elements names

});
// get the first list item & print it
it('TCE004', async() => {
    await browser.url('https://the-internet.herokuapp.com/')
    var anElement = await $$('<li />')[0] // get the first list element name
    console.log ("Print Element: " + await anElement.getText()) // print the first element name

});
// get the third menu item & print it
it('TCE005', async() => {
    await browser.url('https://jqueryui.com/')
    var elements = await $$('.menu-item')// get the menu element 
    var element = await elements[2]      // get the menu element on index 2
    console.log ("Third Item: " + await element.getText()) // print the menu element name

});
// get the last menu item & print it
it('TCE006', async() => {
    await browser.url('https://jqueryui.com/')
    var elements = await $$('.menu-item')                 // get the menu element
    var element = await elements[elements.length-1]       // get the menu element name on last index
    console.log ("Last Item: " + await element.getText()) // print the menu element name

});
// get all the menu items name & print it
it('TCE007', async() => {
    await browser.url('https://jqueryui.com/')
    var elements = await $$('.menu-item')      // get the menu element name
    console.log("All Menu item names: ")
    await elements.forEach(function (item) {
        console.log(item.getText())            // print all the menu element name
    });
     
});
// Find all the urls links from a page & Print it
it('TCE008', async() => {
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
it.only('TCE009', async() => {
    await browser.url('https://the-internet.herokuapp.com/')
    await browser.saveScreenshot('./Screenshots/TCE009_Before.png')
    await $('#page-footer').scrollIntoView()
    await browser.saveScreenshot('./Screenshots/TCE009_After.png')

});




