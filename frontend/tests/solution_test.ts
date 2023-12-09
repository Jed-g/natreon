import { test, expect } from '@playwright/test';

test('Problem and solution content is visible', async ({ page }) => {
	await page.goto('/');
	await page.locator('label').filter({ hasText: 'Home' }).locator('svg').click();
	await page.getByRole('button', { name: 'Our Solution' }).click();
	await expect(page.locator('#solution-desktop').getByText('Problem')).toBeVisible();
	await expect(page.locator('#solution-desktop').getByText('Solution')).toBeVisible();
});
