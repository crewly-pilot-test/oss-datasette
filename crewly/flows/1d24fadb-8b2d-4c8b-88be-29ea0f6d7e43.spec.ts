import { test, expect } from '@playwright/test';

const base = process.env.CREWLY_BASE_URL!;

test('pages carry a generator meta tag', async ({ page }) => {
  const res = await page.goto(base + '/');
  expect(res!.status()).toBe(200);
  const meta = page.locator('head meta[name="generator"]');
  await expect(meta).toHaveCount(1);
  await expect(meta).toHaveAttribute('content', /^Datasette \d/);
});
