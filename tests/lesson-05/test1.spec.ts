import { test } from '@playwright/test';

test('Bài 1', async ({ page }) => {
    await test.step("Truy cập trang", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click bài 1", async () => {
        await page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']").click();
    });

    await test.step("điền fill", async () => {
        await page.locator("//input[@id='username']").fill("Thao Nguyen");
        await page.locator("//input[@id='email']").pressSequentially
            ("nguyenminhphuongthao@gmail.com", { delay: 300 });
    });

    await test.step("Radio button/ checkbox", async () => {
        // let isCheckMale = await page.locator("//input[@id='male']").isChecked();
        // console.log(isCheckMale);

        await page.locator("//input[@id='male']").check();
        await page.locator("//input[@id='reading']").check();

        // isCheckMale = await page.locator("//input[@id='male']").isChecked();
        // console.log(isCheckMale);
    });

    await test.step("Select option", async () => {
        await page.locator("//select[@id='interests']").selectOption("music");
        await page.locator("//select[@id='country']").selectOption("canada");
        await page.locator("//input[@id='dob']").fill("2025-03-16");
        await page.locator("//input[@id='profile']").setInputFiles("tests/data-test/data-test.txt");
        await page.locator("//textarea[@id='bio']").fill("Hello mọi người, mình tên là Thảo nhé!");
        await page.locator("//input[@id='rating']").fill("8");
        await page.locator("//input[@id='favcolor']").fill("#0000ff");
    });

    await test.step('Hover Newsletter', async () => {
        // hover vào checkbox
        await page.locator('//input[@id="newsletter"]').hover();

        // sau đó check luôn
        await page.locator('//input[@id="newsletter"]').check();
    });

    await test.step("Toggle ", async () => {
        // let isEnabled = await page.locator("//input[@id='toggleOption']").isChecked();
        // console.log(isEnabled);

        await page.locator("//input[@id='toggleOption']").click();

        // isEnabled = await page.locator("//input[@id='toggleOption']").isChecked();
        // console.log(isEnabled);
    });

    await page.locator("//input[@id='starRating']").fill("3.5");
    await page.locator("//input[@id='customDate']").fill("2025-10-16");

    await test.step("Step 2", async () => {
        await page.locator("//button[text()='Register']").click();
    });

    
});