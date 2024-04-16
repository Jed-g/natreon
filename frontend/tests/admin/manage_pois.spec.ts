import { test, expect } from '@playwright/test';

test('An admin can create a poi with one feature, and valid name, longitude, and latitude', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'I Understand' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByTestId('email').click();
  await page.getByTestId('email').fill('test@admin.com');
  await page.getByTestId('email').press('Tab');
  await page.getByTestId('password').fill('password');
  await page.getByTestId('password').press('Enter');
  await page.getByRole('link', { name: 'Manage POIs' }).click();
  await page.getByRole('button', { name: 'Create New POI' }).click();
  await page.getByLabel('Name').click();
  await page.getByLabel('Name').fill('test');
  await page.getByLabel('Name').press('Tab');
  await page.getByLabel('Description').fill('this is a test');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  await page.getByRole('link', { name: 'Mailing List' }).click();
  await page.getByRole('link', { name: 'Manage POIs' }).click();
  await page.getByRole('cell', { name: 'test', exact: true }).click();
  await expect(page.getByRole('cell', { name: 'test', exact: true })).toBeVisible();
});

test('An admin cannot create a poi with an invalid name', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'I Understand' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByTestId('email').click();
  await page.getByTestId('email').fill('test@admin.com');
  await page.getByTestId('email').press('Tab');
  await page.getByTestId('password').fill('password');
  await page.getByTestId('password').press('Enter');
  await page.getByRole('link', { name: 'Manage POIs' }).click();
  await page.getByRole('button', { name: 'Create New POI' }).click();
  await page.getByLabel('Name').click();
  await page.getByLabel('Name').fill('te');
  await page.getByLabel('Description').click();
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  await expect(page.getByText('Name Not Valid')).toBeVisible();
});

test('An admin cannot create a poi with invalid latitude', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'I Understand' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByTestId('email').click();
  await page.getByTestId('email').fill('test@admin.com');
  await page.getByTestId('email').press('Tab');
  await page.getByTestId('password').fill('password');
  await page.getByTestId('password').press('Enter');
  await page.getByRole('link', { name: 'Manage POIs' }).click();
  await page.getByRole('button', { name: 'Create New POI' }).click();
  await page.getByLabel('Name').click();
  await page.getByLabel('Name').fill('test');
  await page.getByLabel('Latitude').click();
  await page.getByLabel('Latitude').fill('200');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  await expect(page.getByText('Latitude not Valid')).toBeVisible();
});

test('An admin cannot create a poi with invalid longitude', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'I Understand' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByTestId('email').click();
  await page.getByTestId('email').fill('test@admin.com');
  await page.getByTestId('email').press('Tab');
  await page.getByTestId('password').fill('password');
  await page.getByTestId('password').press('Enter');
  await page.getByRole('link', { name: 'Manage POIs' }).click();
  await page.getByRole('button', { name: 'Create New POI' }).click();
  await page.getByLabel('Name').click();
  await page.getByLabel('Name').fill('test');
  await page.getByLabel('Name').press('Tab');
  await page.getByText('Create New POI POI Management Create New POI Rules for creating POI: Name must b').click();
  await page.getByLabel('Longitude').click();
  await page.getByLabel('Longitude').click();
  await page.getByLabel('Longitude').fill('2000');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  await expect(page.getByText('Longitude not Valid')).toBeVisible();
});

test('An admin can add multiple features to a valid poi', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'I Understand' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByTestId('email').click();
  await page.getByTestId('email').fill('test@admin.com');
  await page.getByTestId('email').press('Tab');
  await page.getByTestId('password').fill('password');
  await page.getByTestId('password').press('Enter');
  await page.getByRole('link', { name: 'Manage POIs' }).click();
  await page.getByRole('button', { name: 'Create New POI' }).click();
  await page.getByLabel('Name').click();
  await page.getByLabel('Name').fill('test');
  await page.getByRole('button', { name: 'Add Feature' }).click();
  await page.getByLabel('Feature 2 Water FeatureStatueFurther options to be added').selectOption('Statue');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Create New POI' })).toBeVisible();
});

test('An admin can change the default location when creating a poi', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'I Understand' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByTestId('email').click();
  await page.getByTestId('email').fill('test@admin.com');
  await page.getByTestId('password').click();
  await page.getByTestId('password').fill('password');
  await page.getByTestId('password').press('Tab');
  await page.getByTestId('login-button').press('Enter');
  await page.getByRole('link', { name: 'Manage POIs' }).click();
  await page.getByRole('button', { name: 'Create New POI' }).click();
  await page.getByLabel('Name').click();
  await page.getByLabel('Name').fill('test');
  await page.getByLabel('Location SheffieldManchesterFurther locations to be added').selectOption('Manchester');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  await page.getByRole('link', { name: 'Mailing List' }).click();
  await page.getByRole('link', { name: 'Manage POIs' }).click();
  await expect(page.getByRole('cell', { name: 'Manchester' }).first()).toBeVisible();
});
/** 
test('An admin can create and delete a poi', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'I Understand' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByTestId('email').click();
  await page.getByTestId('email').fill('test@admin.com');
  await page.getByTestId('email').press('Tab');
  await page.getByTestId('password').fill('password');
  await page.getByTestId('password').press('Enter');
  await page.getByRole('link', { name: 'Manage POIs' }).click();
  await page.getByRole('button', { name: 'Create New POI' }).click();
  await page.getByLabel('Name').click();
  await page.getByLabel('Name').fill('test');
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  await page.getByRole('link', { name: 'Mailing List' }).click();
  await page.getByRole('link', { name: 'Manage POIs' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
});
*/