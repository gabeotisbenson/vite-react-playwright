import { test, expect } from '@playwright/test';

test('Has title', async ({ page }) => {
  await page.goto('/');

	await expect(page).toHaveTitle(/Vite \+ [^\s]+ \+ TS/);
});
