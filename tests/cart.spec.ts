import { test, expect } from "@playwright/test";

test("add and remove item from cart", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.fill("#user-name", "standard_user");
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button");

  await page.click("text=Add to cart");
  await page.click(".shopping_cart_link");
  await expect(page.locator(".cart_item")).toHaveCount(1);

  await page.click("text=Remove");
  await expect(page.locator(".cart_item")).toHaveCount(0);
});
