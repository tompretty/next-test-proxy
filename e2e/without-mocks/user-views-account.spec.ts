import { test, expect } from "@playwright/test";

test.describe("user views account", () => {
  test("displays account details mocked at the suite level", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(page.getByText("John")).toBeVisible();
    await expect(page.getByText("Doe")).toBeVisible();
  });
});
