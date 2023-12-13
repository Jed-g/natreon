import { test, expect } from '@playwright/test';

test.use({ screenshot: 'only-on-failure' });

test('View Mailing List', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'I Understand' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByTestId('email').click();
  await page.getByTestId('email').fill('test@admin.com');
  await page.getByTestId('password').click();
  await page.getByTestId('password').fill('password');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Mailing List' }).click();
  await expect(page.getByRole('heading', { name: 'Mailing List' })).toBeVisible;
});