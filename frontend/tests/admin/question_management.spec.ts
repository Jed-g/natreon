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
  });

test('Delete Question', async ({ page }) => {
    await page.waitForTimeout(500);
    await page.goto('/admin/questions');
    await page.waitForTimeout(500);
});

test('Edit Question', async ({ page }) => {
    await page.waitForTimeout(500);
    await page.goto('/admin/questions');
    await page.waitForTimeout(500);
});

test('Edit Answer', async ({ page }) => {
    await page.waitForTimeout(500);
    await page.goto('/admin/questions');
    await page.waitForTimeout(500);
});
