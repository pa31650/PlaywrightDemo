// home.test.ts
import { test, expect } from '@playwright/test';
import { BrowserstackHomePage } from '../pages/home.page';
import { ToDoMVCPage } from '../pages/todomvc';

test('Browserstack homepage verification', async ({page}) => {
    const homepage = new BrowserstackHomePage(page);
    await homepage.goto();
    await homepage.clickOnProducts();
    await expect(homepage.productmenudropdown).toBeVisible;
    
})

test('ToDo MVC Add and Delete', async ({ page }) => {
    const Todo = new ToDoMVCPage(page);
    await Todo.goto();
    await Todo.addItem('add one thing');
    await Todo.addItem('add two things');
    await Todo.deleteItem('add one thing');
    await Todo.deleteItem('add two things');
  //await page.getByPlaceholder('What needs to be done?').click();
  //await page.getByPlaceholder('What needs to be done?').fill('add one thing');
  //await page.getByPlaceholder('What needs to be done?').press('Enter');
  //await page.getByPlaceholder('What needs to be done?').fill('add two things');
  //await page.getByPlaceholder('What needs to be done?').press('Enter');
  //await page.locator('li').filter({ hasText: 'add one thing' }).getByLabel('Toggle Todo').check();
  //await page.getByRole('button', { name: 'Delete' }).click();
  //await page.getByLabel('Toggle Todo').check();
  //await page.getByLabel('Delete').click();
});