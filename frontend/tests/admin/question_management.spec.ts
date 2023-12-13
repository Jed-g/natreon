import { test, expect } from '@playwright/test';

test.use({ screenshot: 'only-on-failure' });

test.beforeEach('Login using admin', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('button', { name: 'I Understand' }).click();
	await page.getByRole('link', { name: 'Login' }).click();
	await page.getByTestId('email').click();
	await page.getByTestId('email').fill('test@admin.com');
	await page.getByTestId('password').click();
	await page.getByTestId('password').fill('password');
	await page.getByTestId('login-button').click();
});

test('Answer Question', async ({ page }) => {
    await page.waitForTimeout(500);
    await page.goto('/admin/questions');
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Answer' }).click();
    await page.getByPlaceholder('Enter answer...').click();
    await page.getByPlaceholder('Enter answer...').fill('test_answer_1');
    await page.getByRole('button', { name: 'Update' }).click();
    await expect(page.getByRole('cell', { name: 'NOT ANSWERED' })).toBeHidden
    
  });

test('Edit Question', async ({ page }) => {
    await page.waitForTimeout(500);
    await page.goto('/admin/questions');
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Edit' }).nth(1).click();
    await page.getByPlaceholder('Enter question...').click();
    await page.getByPlaceholder('Enter question...').fill('test_question_3');
    await page.getByRole('button', { name: 'Update' }).click();
    await expect(page.getByRole('cell', { name: 'test_question_3' })).toBeVisible
});

test('Edit Answer', async ({ page }) => {
    await page.waitForTimeout(500);
    await page.goto('/admin/questions');
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Edit' }).nth(1).click();
    await page.getByPlaceholder('Enter answer...').click();
    await page.getByPlaceholder('Enter answer...').fill('test_answer_3');
    await expect(page.getByRole('cell', { name: 'test_answer_3' })).toBeVisible
});

test('Delete Question', async ({ page }) => {
    await page.waitForTimeout(500);
    await page.goto('/admin/questions');
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Delete' }).nth(1).click();
    await expect(page.getByRole('button', { name: 'Delete' }).nth(1)).toBeHidden
});