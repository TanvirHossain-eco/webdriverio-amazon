import {browser, expect, $} from '@wdio/globals';

describe('Cart Flow', () => {
    let devicePrice;
    before(async() => {
        await browser.url('/');
        const searchInput = await $('#twotabsearchtextbox');
        const searchButton = await $('input[type="submit"]');
        // const expectedSearchText = await $('.a-color-state.a-text-bold');
        // await searchInput.addValue('mackbook');
        await searchInput.addValue('dumbbells');
        await searchButton.click();
    });
    it('Add to Cart', async() => {
        
        await $('.s-product-image-container').click();
        // const devicePrice = await $('#corePrice_desktop span[aria-hidden="true"]').getText();
        devicePrice = await browser.execute(()=>{
            return document.querySelector('#corePrice_feature_div span.a-offscreen').textContent
        })
        await $('#add-to-cart-button').click();
        // await expect($('#NATC_SMART_WAGON_CONF_MSG_SUCCESS span')).toHaveText('Added to Cart');
        await expect($('#NATC_SMART_WAGON_CONF_MSG_SUCCESS span')).toHaveText('Added to Cart');

        // Click on Basket button
        // await $('#cart-size').click();

        // Below code will not run if selector has css opacity: 0;
        // await expect($('#sw-subtotal span[class="a-offscreen"]')).toHaveText(devicePrice)
        // To run the code need to manipulate the DOM with querySelector
        const subTotal = await browser.execute(()=>{
            // return document.querySelector('#sw-subtotal span[class="a-offscreen"]').textContent
            return document.querySelector('#sw-subtotal span[class="a-offscreen"]').textContent
        })
        await expect(subTotal).toEqual(devicePrice);

        await browser.pause(5000);
        
    });
    it('Update Cart Quantity', async() => {
        await $('#nav-cart').click();

        await $('#a-autoid-0-announce').click();

        await $('#quantity_2').click();

        await browser.pause(3000);

        const updatedSubtotal = await $('#sc-subtotal-amount-activecart span').getText();
        await expect(updatedSubtotal).not.toEqual(devicePrice);
        // await expect(updatedSubtotal).not.toHaveText(devicePrice);


        
    });
});