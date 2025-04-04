import { test, expect } from "@playwright/test";

test.describe("user views account", () => {
  test("displays account details", async ({ page }) => {
    await page.goto("http://localhost:3000");

    await expect(page.getByText("John")).toBeVisible();
    await expect(page.getByText("Doe")).toBeVisible();
  });
});
