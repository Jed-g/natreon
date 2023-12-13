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

test('Change role to Reporter', async ({ page }) => {
  await page.waitForTimeout(500);
  await page.goto('/admin/users');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Edit' }).nth(1).click();
  await page.getByRole('combobox').selectOption('REPORTER');
  await page.getByRole('button', { name: 'Update' }).click();
  await expect(page.getByRole('cell', { name: 'REPORTER' })).toBeVisible;
});

test('Change role to Customer', async ({ page }) => {
  await page.waitForTimeout(500);
  await page.goto('/admin/users');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Edit' }).nth(1).click();
  await page.getByRole('combobox').selectOption('CUSTOMER');
  await page.getByRole('button', { name: 'Update' }).click();
  await expect(page.getByRole('cell', { name: 'CUSTOMER' })).toBeVisible;
});

test('Change role to Admin', async ({ page }) => {
  await page.waitForTimeout(500);
  await page.goto('/admin/users');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Edit' }).nth(1).click();
  await page.getByRole('combobox').selectOption('ADMIN');
  await page.getByRole('button', { name: 'Update' }).click();
  await expect(page.getByRole('cell', { name: 'ADMIN' })).toBeVisible;
});

test('Delete User', async ({ page }) => {
  await page.waitForTimeout(500);
  await page.goto('/admin/users');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Delete' }).nth(1).click();
  await expect(page.getByRole('cell', { name: 'test@user.com' })).toBeHidden;
});
