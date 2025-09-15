# Vesion Control System
**VCS (Vesion Control System):** hệ thống quản lý các phiên

**Google docs: **sử dụng VCS để dễ quản lý các phiên bản

**Local:** lưu ở máy cá nhân

**Centralize:** lưu ở 1 máy chủ tập trung 

**Distributed:** lưu ở nhiều máy khác nhau 

# GIT
- Dùng git do nhu cầu quản lý phiên bản và làm việc với nhiều người khác nhau

- Là một phần mềm

- Cài trên máy tính của bạn

- Là một commandline tool

- Là công cụ quản lý phiên bản,
 đưa file vào Git respository
Có các tính năng của Version Control System

- Git có 3 states (trạng thái)
    1. Working Directory: các file mới hoặc file có thay đổi

    2. Staging Area: các file đưa vào vùng chuẩn bị commit (tạo ra các phiên bản)
    3. Respository: các commit (phiên bản)

## Git - key takeaways
Khởi tạo thư mục: **git init**

Cấu hình:

**1. Cho 1 repo (đứng tại repo đó)**

        git config user.name "name"

        git config user.email “email”

**2. Cho toàn bộ máy tính (default)**
    
        git config --global user.name “user”

        git config --global user.email “email”

**3. Thêm file vào vùng staging**

Thêm 1 file: 

        git add <file_name>
( vd: git add file1.txt )

Thêm toàn bộ: 

        git add .

**4. Xem trạng thái file**

Xem trạng thái file: 

        git status

- File màu xanh: vùng staging

- File màu đỏ: vùng working

**5. Commit**

Commit: 

        git commit -m”mesage”

Kiểm tra lịch sử commit: 

        git log

## Git - commit convention

Convention = quy tắc
- Cả team làm việc với nhau theo 1 quy tắc
- Code gọn gàng, sạch sẽ

Convention sử dụng:
- Commit message cần rõ ràng, chuyên nghiệp
- Trong lớp học, dùng convention sau: 

        <type>: <short_description>

    type: loại commit
    - **Chore**: sửa nhỏ lẻ, chính tả, xóa file không dùng tới
    - **Feat**: thêm tính năng mới, test case mới
    - **Fix**: sửa lỗi 1 text trước đó

    short _description: mô tả ngắn gọn (50 ký tự), tiếng Anh hoặc tiếng Việt không dấu

    Vd: “chore: remove unused file”

## Git - simple workflow

Không dùng global config

            Init -> config -> add -> commit -> push

Dùng global config

            Init -> add -> commit -> push

# JavaScript
Cú pháp:

            console.log("nội dung");
            console.log('nội dung');

## Biến
Biến: có thể thay đổi được

**Khai báo biến:**

            <từ khóa> <tên biến> = <giá trị>

**Từ khóa: **

            var/let

var centerName = “Better Bytes Academy”;

let isLovePlaywright = true;

console.log(centerName);

console.log(isLovePlaywright);

**Quy tắc đặt tên biến**

- Bắt đầu bằng ký tự chữ, hoặc gạch dưới, hoặc $

    Vd: name, _name, $name

- Không chứ dấu cách

    My name => sai

- Không chứ các “từ khóa”, tức là các từ đã có trong Javascript 

    (vd: var, let, for, if,..)

**Thay đổi giá trị biến:** 

Gán lại tên biến cho giá trị mới

            <tên biến> = <giá trị>

var name = “Better Bytes Academy”;

name = “Playwright Việt Nam”;

**So sánh var/let:**
- let ra đời sau, là cú pháp hiện đại và an toàn hơn
- var ra đời trước, cú pháp cũ, ít sử dụng
- var cho phép khai báo lại, let thì không
- var có phạm vi global, còn let có phạm vi theo block
    - Code nằm trong cặp ngoặc nhọn được gọi là “một block code”

## Hằng

Hằng là các giá trị không thay đổi được

Hằng dùng để khai báo các giá trị không có nhu cầu thay đổi hoặc giá trị chỉ dùng 1 lần

**Khai báo hằng:**

            <từ khóa> <tên hằng> = <giá trị>

**Từ khóa: **

            const

const slogan = “Học kỹ - Hiểu bản chất”

**Mặc định dùng const** - giúp code an toàn hơn, dễ đọc hơn

Chỉ dùng let khi chắc chắn cần gắn lại giá trị

Không dùng var

## Kiểu dữ liệu
Kiểu dữ liệu là loại dữ liệu mà biến đang mang

Có 8 kiểu dữ liệu, chia làm 2 nhóm:

Kiểu nguyên thủy:
- Number
- String
- Boolean
- Underfined
- Null
- Symbol
- bigInt

Kiểu tham chiếu:

- Object

**1. Number**

Số nguyên và số thực (ko phân biệt int/ float)

const age = 25;

const price = 19.9;

**2. String**

Chuỗi ký tự

const name = "John";

const message = 'Hello';

const template = `age: 10` (dùng dấu backtick)

**3. Boolean**

Giá trị logic

const isActive = true;

const isComplete = false;

**4. Để biết một biến có kiểu dữ liệu gì?**

            Typeof < variable >

## Toán tử so sánh
Dùng để so sánh 2 toán hạng. Kết quả trả về ở dạng boolean

Chia làm 3 nhóm:

- So sánh bằng: == và ===
- So sánh không bằng: !
- So sánh lớn hơn, nhỏ hơn
    - `>`
    - `<`
    - `>=`
    - `<=`

**1. So sánh hai bằng == (Loose Equality)**

So sánh giá trị sau khi chuyển đổi kiểu (type coercion)

	5 == “5” // true (chuyển string sang number)

	5 == “6” // false (chuyển string thành number)

	true == 1 // true (true chuyển thành 1)

	false == 0 // true (false chuyển thành 0)

**2. So sánh ba bằng === (Strict Equality) (nên dùng)**

So sánh giá trị và kiểu dữ liệu - không chuyển đổi kiểu

    5 === “5” //false (khác kiểu)

    true === 1 //false (khác kiểu)

    false ===  0 //false (khác kiểu)

    5 === 5 // true (cùng kiểu, cùng giá trị)

**3. So sánh không bằng != và !==**

    5 != “5” //false (chuyển string thành number)

    true != 1 //false (true chuyển thành 1)

    false != 0 //false (false chuyển thành 0)


    5 !== “5” //true (khác kiểu)

    true !== 1 // true (khác kiểu)

    false !== 0 //true (khác kiểu)

    5 !== 5 //false (cùng kiểu, cùng giá trị)

**4. So sánh > , < , >= , <=**

    5 > 10 //false

	5 >= 10 //false

	5 < 10 //true

	5 <= 10 //true

**Luôn sử dụng so sánh ba bằng!**

Chỉ sử dụng == khi có chủ đích, muốn so sánh mà không quan tâm tới kiểu dữ liệu.

## Toán tử logic

Dùng để kết hợp nhiều điều kiện và trả về boolean

- && (and): trả về đúng nếu cả 2 vế của mệnh đề đúng

- || (or): trả về đúng nếu một trong 2 vế của mệnh đề đúng

Vd:

Điều kiện nhận lương tháng 13: làm việc trên 6 tháng hoặc nhân viên chính thức

Điều kiện nhận lương tháng 14: làm việc trên 6 tháng và nhân viên chính thức

const isMoreThan6 = true;

const isOfficial = true;

const receive13 = isMoreThan6 || isOfficial;

const receive14 = isMoreThan6 && isOfficial;

## Toán tử 1 ngôi

Là toán tử chỉ cần 1 toán hạng để thực hiện.

        let x = 5;

        x++;

        ++x;

        x--;

        -- x;

**Prefix**: toán tử nằm ở phía trước - tăng trước, trả về sau

        ++x;

        -- x;

let a = 10;

b = ++a; // tăng lên 11 rồi trả về => b có giá trị là 11

**Postfix**: toán tử nằm phía sau - trả về trước, tăng sau

        x++;

        x--;

let c = 10;

d = c++; // trả về giá trị 10 cho d rồi mới tăng => d có giá trị 10

## Toán tử toán học

Tương đương như các phép tính + , - , * , /

        const firstNumber = 5;

        const secondNumber = 10;

        const result = firstNumber + secondNumber; // result = 15

Khi chia cho 0, sẽ ra kết quả infinity (vô cực)

## Câu điều kiện

Dúng để kiểm tra 1 đoạn logic trước khi chạy

Nếu điều kiện đúng thì mới chạy

Có các loại điều kiện:
- if
- if … else
- if … else if … else
- switch … case

**Cú pháp:**

        if (<điều kiện>){
            // code …
        }


        let hour =;
        if (hour <= 11) {
            console.log(“good morning”);
        }

**Kết hợp nhiều điều kiện**

        let hour = 8;
        if (hour >= 6 && hour <=11) {
            console.log(“good morning”);
        }
**Kết hợp nhiều điều kiện**

        let hour = 8;
        if (hour >= 6) {
	        if (hour <= 11) {
		        console.log(“good morning”);
 	        }
        }

## Vòng lặp
Dùng để lặp lại 1 đoạn logic

Có thể lặp một số lần nhất định, hoặc lặp vô hạn, tùy theo điều kiện dừng

Có các loại vòng lặp:
- for (i)
- for (of)
- for (each)
- for (in)
- while
- do … while

**Cú pháp vòng lặp for (i)**

        for (<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhật> ){
            // code
        }

Điều kiện khởi tạo: chạy 1 lần duy nhất, khi vòng lặp bắt đầu.

Điều kiện lặp: nếu chạy đúng thì chạy tiếp, sai thì dừng.

Cập nhật: chạy vào mỗi cuối vòng lặp, để thay đổi giá trị của biến đếm.

# Viết file ở dạng markdown

**1. Tiêu đề**

Dùng `#` để tạo tiêu đề. Nhiểu `#` hơn tạo tiêu đề nhỏ hơn.

`#` Tiêu đề 1

`##` Tiêu đề 2

`###` Tiêu đề 3

**2. In đậm à in nghiêng**

Dùng `**` và `*` cho in nghiêng

`**`Chữ in đậm`**`

`*`Chữ in nghiêng`*`

**3. Danh sách**

Danh sách có thứ tự dùng số, danh sách không thứ tự dùng dấu `-` hoặc `*`

1. Mục thứ nhất
2. Mục thứ hai

`-` Mục không thứ tự

`*` Mục không thứ tự

**4. Đường dẫn và hình ảnh**

Dùng `[]()` để chèn liên kết và `![]()` để chèn hình ảnh.

`[Liên kết]`(https://example.com)

`![Hình ảnh]`(https://example.com/image.jpg)

Markdown giúp bạn dễ dàng viết nội dung có định dạng mà không cần sử dụng công cụ soạn
thảo phức tạp.

File markdown có đuôi là .md

[Hướng dẫn bằng video](https://youtu.be/fcnAY0vT53M)

# Kiến thức bổ sung để làm bài: toán tử `chia dư (%)`

**% sẽ trả về phần dư của phép tính.**

Giả sử:

        3%3 = 0 (vì 3 chia hết cho 3 dư 0)

        3%2 = 1 (vì 3 không chia hết cho 2, dư 1)

        3%1 = 0 (vì 3 chia hết 1 dư 0)

        1%2 = 1 (vì 1 không chia hết cho 2, dư 1)

        100%80 = 20 (vì 100 không chia hết cho 80, dư 20)

**Ứng dụng tìm số chẵn, lẻ:**

Nếu là số lẻ, chia dư cho 2 = 1: 

        x % 2 === 1

Nếu là số chẵn, chia dư cho 2 = 0: 

        x % 2 === 0

# Kiến thức bổ sung để làm bài: in kết hợp giá trị chuỗi và biến với `console.log()`

Dùng console.log(“message”) để in ra giá trị kiểu chuỗi, hay `console.log(<variable_name>)` để in ra giá trị của biến.

Để in ra kết hợp giá trị kiểu chuỗi và giá trị của biến, ta có hai cách như sau:

        console.log(“Dùng dấu cộng như sau: “ + name)

        console.log(“Hoặc dùng dấu phẩy: “, name)

# Kiến thức bổ sung để làm bài: nối chuỗi với toán tử +

Để nối chuỗi từ hai biến, ta sử dụng dấu cộng (+):

        const str1 = “Hello”;

        const str2 = “Playwright Viet Nam”

        console.log(str1 + str2); // HelloPlaywright Viet Nam






































