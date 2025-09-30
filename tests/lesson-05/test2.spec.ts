import { test } from '@playwright/test';

test('Bài 2', async ({ page }) => {
    await test.step("Truy cập trang", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click bài 2", async () => {
        await page.locator("//a[text()='Bài học 2: Product page']").click();
    });

    await test.step("click button car", async () => {
        await page.locator("//button[@data-product-id='1']").click();
        await page.locator("//button[@data-product-id='1']").click();

        await page.locator("//button[@data-product-id='2']").click();
        await page.locator("//button[@data-product-id='2']").click();
        await page.locator("//button[@data-product-id='2']").click();

        await page.locator("//button[@data-product-id='3']").click();
    });


});