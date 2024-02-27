// todo.test.ts
import { test, expect } from '@playwright/test';
import { ToDoMVCPage } from '../pages/todomvc';

test('ToDo MVC Add and Delete', async ({ page }) => {
    const Todo = new ToDoMVCPage(page);
    await Todo.goto();
    await Todo.addItem('add one thing');
    await Todo.addItem('add two things');
    await Todo.deleteItem('add one thing');
    await Todo.deleteItem('add two things');
});