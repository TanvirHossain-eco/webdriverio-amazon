

it('TC001', async() => {
    await browser.url ("https://ultimateqa.com/complicated-page");
    await browser.pause(3000);
    await $('.et_pb_menu__logo').saveScreenshot('./Screenshots/TTC001.png')
});

it('TC002', async() => {
    await browser.url('https://www.saucedemo.com');
    await browser.pause(3000)
    await $('#user-name').saveScreenshot('./Screenshots/TTC002.png')
});

it('TC003', async() => {
    await browser.url('https://jqueryui.com');
    await browser.pause(3000)
    await $('.projects').saveScreenshot('./Screenshots/TTC003.png')
});

it('TC004', async() => {
    await browser.url('https://ultimateqa.com/complicated-page');
    await browser.pause(3000)
    await ('[name="et_builder_submit_button"]').saveScreenshot('./Screenshots/TTC004.png')
});

it('TC005', asyc() => {
    await browser.url('https://google.com/')
    await browser.pause(3000)
    await ('<img>').saveScreenshot('./Screenshots/TTC005.png')    
});

it('TC006', asyc() => {
    await browser.url('https://google.com/')
    await browser.pause(3000)
    await $('=Courses').saveScreenshot('./Screenshots/TTC006.png')    
});

it('TC010', async() => {
    await browser.url('https://ultimateqa.com/filling-out-fomrs')
    await $('.et_pb_contact_form.clearfix').$('#et_pb_contact_name_0').saveScreenshot('./Screenshots/TTC010.png')  
    
});

it('TC011', async() => {
    await browser.url('https://calculator-lei2istiw-102amit.vercel.app/')
    // await browser.url('https://ahfarmer.github.io/calculator/')
    const appWrapper = await $('div#root')
    await browser.react$('t', {props: {name: 7}}).click()
    await browser.react$('t', {props: {name: '*'}}).click()
    await browser.react$('t', {props: {name: 8}}).click()
    await browser.react$('t', {props: {name: 'equal'}}).click()
    console.log(await $('.component-display').getText());    
});

it('TC007', async() => {
    await browser.url('https://google.com/preferences')
    (await $('div[class="pkgtHd fftALe"]')).saveScreenshot('./Screenshots/TTC007.png')
});

it('TC008', async() => {
    await browser.url('https://google.com')
    await $('//input[@id=gbqfbb]').saveScreenshot('./Screenshots/TTC008.png')
});

it('TC009', async() => {
    await browser.url('https://amazon.com')
    await $(()=> document.getElementById('nav-xshop-container')).saveScreenshot('./Screenshots/TTC009.png') 
});






