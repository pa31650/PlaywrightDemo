//home.page.ts
import { expect, Locator, Page } from '@playwright/test';
export class BrowserstackHomePage 
{
    readonly url = "https://www.browserstack.com/";
    readonly page: Page;
    readonly browserstackLogo: Locator;
    readonly productsMenu: Locator;
    readonly productmenudropdown: Locator;

    constructor(page: Page)
    {
        this.page = page;
        this.browserstackLogo = page.locator('#logo');
        this.productsMenu = page.locator('#products-dd-toggle');
        // #product-menu-dropdown >div > ul >li >a >div[class="dropdown-link-heading"]
        // [class=" bstack-mm-sub-nav-tabcol"]>div>span[class="item-text"]
        // //div[@class = ' bstack-mm-sub-nav-tabcol'][2]/div/a/span[@class='item-text']
        this.productmenudropdown = page.locator('//div[@class = " bstack-mm-sub-nav-tabcol"][2]/div/a/span[@class="item-text"]');
    }

    async goto()
    {
        await this.page.goto(this.url);
    }

    async clickOnProducts()
    {
        await this.productsMenu.waitFor({state:"visible"});
        await this.productsMenu.click();
    }
}