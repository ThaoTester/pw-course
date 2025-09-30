import { test } from '@playwright/test';

test('Bài 3', async ({ page }) => {
    await test.step("Truy cập trang", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click bài 3", async () => {
        await page.locator("//a[text()='Bài học 3: Todo page']").click();
    });

    // await test.step("thao tác", async () => {
    //     await page.locator("//input[@id='new-task']").fill("Task 1");
    //     await page.click("//button[@id='add-task']");

    //     page.on('dialog', async dialog => dialog.accept());
    //     await page.click("//button[@id='task-1-delete']")
    // });

    await test.step('Thêm 100 todo', async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
            await page.locator("//button[@id='add-task']").click();
        }
    });

    await test.step('Xoá todo số lẻ', async () => {
        page.on('dialog', async dialog => dialog.accept());
        for (let i = 1; i <= 100; i += 2) {
            if (i % 2 !== 0) {
                await page.click(`//button[@id='task-${i}-delete']`);
            }
        }
    })
});
