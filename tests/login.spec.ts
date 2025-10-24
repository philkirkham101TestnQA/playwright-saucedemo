import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";

test.describe("Login Tests", () => {
  test("should login successfully with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");
    await expect(page).toHaveURL(/inventory.html/);
  });

  test("should show error for invalid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login("wrong_user", "wrong_pass");
    await loginPage.assertErrorMessage(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });
});
