import { expect, test } from '@playwright/test';

test('login button visible', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
});

test('animated logo visible after navigation: Home -> Login -> Home', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'Login' }).click();
	await page.getByRole('button', { name: 'Home' }).click();
	await expect(page.getByRole('img')).toBeVisible();
});

test('signup header visible after navigation: Home -> Login -> Signup', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'Login' }).click();
	await page.getByRole('link', { name: 'Create An Account' }).click();
	await expect(page.getByRole('heading', { name: 'Signup' })).toBeVisible();
});
