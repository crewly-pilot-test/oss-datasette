import { test, expect } from '@playwright/test';

const base = process.env.CREWLY_BASE_URL!;

test('footer links to the versions page', async ({ page }) => {
  await page.goto(base + '/');
  const link = page.locator('footer.ft a', { hasText: 'Versions' });
  await expect(link).toHaveCount(1);
  await expect(link).toHaveAttribute('href', /\/-\/versions$/);
  await link.click();
  await expect(page).toHaveURL(/\/-\/versions$/);
  await expect(page.locator('body')).toContainText('datasette');
});
