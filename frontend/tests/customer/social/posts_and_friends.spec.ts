import { test, expect } from '@playwright/test';

test('A customer can create a post', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'I Understand' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByTestId('email').click();
  await page.getByTestId('email').fill('customer@test.com');
  await page.getByTestId('email').press('Tab');
  await page.getByTestId('password').fill('password');
  await page.getByTestId('password').press('Enter');
  await page.getByRole('link', { name: 'Social Network' }).click();
  await page.getByPlaceholder('What\'s on your mind?').click();
  await page.getByPlaceholder('What\'s on your mind?').click();
  await page.getByPlaceholder('What\'s on your mind?').fill('Hi ');
  await page.getByRole('button', { name: 'Post' }).click();
  await page.getByText('Hi').click();
  await expect(page.getByText('Hi')).toHaveText('Hi');
});

test('A customer can create and like a post', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'I Understand' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByTestId('email').click();
  await page.getByTestId('email').fill('customer@test.com');
  await page.getByTestId('email').press('Tab');
  await page.getByTestId('password').fill('password');
  await page.getByTestId('password').press('Enter');
  await page.getByRole('link', { name: 'Social Network' }).click();
  await page.getByPlaceholder('What\'s on your mind?').click();
  await page.getByPlaceholder('What\'s on your mind?').click();
  await page.getByPlaceholder('What\'s on your mind?').fill('This is a test post');
  await page.getByRole('button', { name: 'Post' }).click();
  await page.getByRole('button', { name: '0' }).click();
  await expect(page.getByRole('button', { name: '1' })).toBeVisible();
});

test('a customer can create and edit a post', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'I Understand' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByTestId('email').click();
  await page.getByTestId('email').fill('customer@test.com');
  await page.getByTestId('email').press('Tab');
  await page.getByTestId('password').fill('password');
  await page.getByTestId('password').press('Enter');
  await page.getByRole('link', { name: 'Social Network' }).click();
  await page.getByPlaceholder('What\'s on your mind?').click();
  await page.getByPlaceholder('What\'s on your mind?').fill('test');
  await page.getByRole('button', { name: 'Post' }).click();
  await page.locator('.button-container > button').first().click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('testy');
  await page.locator('form > button').first().click();
  await page.getByText('(edited)').click();
  await page.getByText('testy 0').click();
  await expect(page.getByText('testy')).toHaveText('testy');
  await expect(page.getByText('(edited)')).toBeVisible();
});