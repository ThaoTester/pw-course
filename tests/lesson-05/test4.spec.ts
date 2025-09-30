import { test } from '@playwright/test';

test('Bài 4', async ({ page }) => {
    await test.step("Truy cập trang", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click bài 4", async () => {
        await page.locator("//a[text()='Bài học 4: Personal notes']").click();
    });

    await test.step("thêm 10 note", async () => {
        await page.locator("//input[@id='note-title']").fill(`Tổng Bí thư: 'Không gì có thể ngăn cản Việt Nam vươn mình'`);
        await page.locator("//textarea[@id='note-content']]").fill(`Hà Nội Tổng Bí thư Tô Lâm khẳng định "không gì có thể ngăn cản Việt Nam vươn mình phát triển giàu mạnh và thịnh vượng", tại Lễ hưởng ứng Ngày hội Đổi mới sáng tạo quốc gia 2025.`);
        await page.locator("//button[@id='add-note']").click();

        await page.locator("//input[@id='note-title']").fill(`Việt Nam có thể làm chủ công nghệ lò hạt nhân công suất nhỏ vào năm 2040`);
        await page.locator("//textarea[@id='note-content']]").fill(`Viện Nghiên cứu hạt nhân Đà Lạt đang lên kế hoạch phát triển lò phản ứng hạt nhân module nhỏ, mục tiêu có 8-10 tổ máy trước năm 2035, và làm chủ công nghệ vào năm 2040, theo Viện trưởng Cao Đông Vũ.`);
        await page.locator("//button[@id='add-note']").click();

        await page.locator("//input[@id='note-title']").fill(`Triển vọng và chi phí của điện mặt trời trong vũ trụ`);
        await page.locator("//textarea[@id='note-content']]").fill(`Khai thác điện mặt trời có nhiều tiềm năng và lợi thế so với hệ thống sản xuất năng lượng trên mặt đất nhưng cần vượt qua một số trở ngại để biến công nghệ này thành hiện thực. `);
        await page.locator("//button[@id='add-note']").click();

        await page.locator("//input[@id='note-title']").fill(`Trung Quốc dùng thị thực K hút nhân tài công nghệ`);
        await page.locator("//textarea[@id='note-content']]").fill(`Thị thực K có hiệu lực từ ngày 1/10, cho phép nhân tài công nghệ đến Trung Quốc làm việc mà không gặp nhiều rào cản pháp lý.`);
        await page.locator("//button[@id='add-note']").click();

        await page.locator("//input[@id='note-title']").fill(`Nam châm siêu dẫn mạnh gấp 700.000 từ trường Trái Đất`);
        await page.locator("//textarea[@id='note-content']]").fill(`Các nhà khoa học Trung Quốc hôm 28/9 thông báo tạo thành công từ trường ổn định với cường độ 351.000 gauss (G) bằng nam châm siêu dẫn, thiết lập kỷ lục thế giới.`);
        await page.locator("//button[@id='add-note']").click();

        await page.locator("//input[@id='note-title']").fill(`Trung Quốc triển khai robot mới nhiều gấp 10 lần Mỹ`);
        await page.locator("//textarea[@id='note-content']]").fill(`Trung Quốc đứng đầu thế giới về tự động hóa sản xuất với số robot công nghiệp triển khai trong nhà máy năm 2024 chiếm 54% toàn cầu.`);
        await page.locator("//button[@id='add-note']").click();

        await page.locator("//input[@id='note-title']").fill(`Hơn 30 nhà khoa học thảo luận về tương tác vi khuẩn - vật chủ`);
        await page.locator("//textarea[@id='note-content']]").fill(`Các giáo sư, nhà khoa học, nghiên cứu sinh đến từ 12 quốc gia cùng bàn luận, làm rõ cơ chế nền tảng trong tương tác vi sinh vật - vật chủ.`);
        await page.locator("//button[@id='add-note']").click();

        await page.locator("//input[@id='note-title']").fill(`Startup Phần Lan trở thành 'đế chế' nhẫn thông minh tỷ USD thế nào`);
        await page.locator("//textarea[@id='note-content']]").fill(`Từ chiến dịch gây quỹ cộng đồng khiêm tốn, Oura vươn lên dẫn đầu thị trường nhẫn thông minh, giúp định hình lại cách theo dõi sức khỏe cá nhân.`);
        await page.locator("//button[@id='add-note']").click();

        await page.locator("//input[@id='note-title']").fill(`Từ chiến dịch gây quỹ cộng đồng khiêm tốn, Oura vươn lên dẫn đầu thị trường nhẫn thông minh, giúp định hình lại cách theo dõi sức khỏe cá nhân.`);
        await page.locator("//textarea[@id='note-content']]").fill(`Bảng gọi tầng thông minh, hệ thống phòng chống thiên tai, công nghệ chống trôi thang... được giới thiệu tại Hội thảo công nghệ thang máy Shanghai Mitsubishi 2025.`);
        await page.locator("//button[@id='add-note']").click();

        await page.locator("//input[@id='note-title']").fill(`Hạ tầng AI là trụ cột sống còn cho tương lai số`);
        await page.locator("//textarea[@id='note-content']]").fill(`Cuộc đua toàn cầu về AI thực chất là cuộc đua hạ tầng, việc đầu tư vào hạ tầng AI trở thành điều kiện tiên quyết, theo ông Nguyễn Hoàng Hưng, Giám đốc Công nghệ Viettel AI.`);
        await page.locator("//button[@id='add-note']").click();
    });

    await test.step("tìm kiếm", async () => {
        await page.locator("//input[@id='search']").fill(`Tổng Bí thư: 'Không gì có thể ngăn cản Việt Nam vươn mình'`);
    });

});