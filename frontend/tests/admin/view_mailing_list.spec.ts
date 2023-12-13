import { test, expect } from '@playwright/test';

test('View Mailing List', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'I Understand' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'email' }).click();
  await page.getByRole('textbox', { name: 'email' }).fill('test@admin.com');
  await page.getByPlaceholder('password').click();
  await page.getByPlaceholder('password').fill('password');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Mailing List' }).click();
  await expect(page.getByRole('heading', { name: 'Mailing List' })).toBeVisible;
});