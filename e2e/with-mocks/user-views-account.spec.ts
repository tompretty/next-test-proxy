import {
  test,
  expect,
  http,
  HttpResponse,
} from "next/experimental/testmode/playwright/msw";

// suite level msw handlers
test.use({
  mswHandlers: [
    http.get("http://localhost:3001/api/account", () => {
      return HttpResponse.json({
        firstName: "Jane",
        lastName: "Doe",
      });
    }),
  ],
});

test.describe("user views account", () => {
  test("displays account details mocked at the suite level", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(page.getByText("Jane")).toBeVisible();
    await expect(page.getByText("Doe")).toBeVisible();
  });

  test("displays account details mocked at the test level", async ({
    page,
    msw,
  }) => {
    // test level msw handlers
    msw.use(
      http.get("http://localhost:3001/api/account", () => {
        return HttpResponse.json({
          firstName: "Jane",
          lastName: "Deer",
        });
      })
    );

    await page.goto("/");

    await expect(page.getByText("Jane")).toBeVisible();
    await expect(page.getByText("Deer")).toBeVisible();
  });
});
