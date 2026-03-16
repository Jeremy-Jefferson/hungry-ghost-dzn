import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should load the homepage', async ({ page }) => {
    await page.goto('/');
    
    // Check that the page loads
    await expect(page).toHaveTitle(/Hungry Ghost/i);
  });

  test('should have working navigation', async ({ page }) => {
    await page.goto('/');
    
    // Check navigation links exist
    await expect(page.getByRole('link', { name: /work/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /services/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /about/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /contact/i })).toBeVisible();
  });

  test('should navigate to contact page', async ({ page }) => {
    await page.goto('/');
    
    // Click contact link
    await page.getByRole('link', { name: /contact/i }).click();
    
    // Check contact page loads
    await expect(page).toHaveURL(/contact/);
    await expect(page.getByRole('heading', { name: /start a project/i })).toBeVisible();
  });
});

test.describe('Contact Form', () => {
  test('should show validation errors for empty form', async ({ page }) => {
    await page.goto('/contact');
    
    // Submit empty form
    await page.getByRole('button', { name: /start the conversation/i }).click();
    
    // Check for validation message
    await expect(page.getByText(/please fill out all required fields/i)).toBeVisible();
  });

  test('should show error for invalid email', async ({ page }) => {
    await page.goto('/contact');
    
    // Fill form with invalid email
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'not-an-email');
    await page.fill('textarea[name="message"]', 'Test message');
    
    // Submit form
    await page.getByRole('button', { name: /start the conversation/i }).click();
    
    // Check for email validation error
    await expect(page.getByText(/valid email address/i)).toBeVisible();
  });
});

test.describe('Work Page', () => {
  test('should load work index page', async ({ page }) => {
    await page.goto('/work');
    
    // Check work page loads
    await expect(page).toHaveURL(/work/);
  });

  test('should filter by brand design', async ({ page }) => {
    await page.goto('/work');
    
    // Click brand design filter
    await page.getByRole('link', { name: /brand systems/i }).click();
    
    // Check URL changed
    await expect(page).toHaveURL(/brand-systems/);
  });
});
