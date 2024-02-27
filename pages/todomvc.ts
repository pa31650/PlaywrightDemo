import { expect, Locator, Page } from '@playwright/test';
export class ToDoMVCPage
{
    readonly url = "https://demo.playwright.dev/todomvc/";
    readonly page: Page;
    readonly newTodo: Locator;
    readonly todoList: Locator;
    readonly deleteButton: Locator;

    constructor(page: Page)
    {
        this.page = page;
        this.newTodo = page.getByPlaceholder('What needs to be done?');
        this.todoList = page.locator('li');
        this.deleteButton = page.getByRole('button', { name: 'Delete' })
    }

    async goto()
    {
        await this.page.goto(this.url);
    }

    async addItem(string: string)
    {
        await this.newTodo.click();
        await this.newTodo.fill(string);
        await this.newTodo.press('Enter');
    }

    async checkItem(string: string)
    {
        await this.todoList.filter({ hasText: string }).getByLabel('Toggle Todo').check();
    }

    async deleteItem(string: string)
    {
        await this.checkItem(string);
        await this.deleteButton.click();
    }
}