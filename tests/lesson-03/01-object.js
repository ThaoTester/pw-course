//1. 
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
}

console.log("Năm sản xuất của xe: ", car["year"]);

//2.
let person = {
    name: "Thảo",
    address: {
        street: "Lạc Thiện",
        city: "Nha Trang",
        country: "Khánh Hòa"
    }
}

console.log(`Tên đường của ${person.name} là:`, person.address.street);

//3
let student = {
    name: "Phương Thảo",
    grades: {
        math: 8,
        english: 9,
    }
}

console.log(`Điểm môn toán của ${student.name} là:`, student["grades"]["math"]);

//4.
let settings = {
    volume: 50,
    brightness: 40,
}

settings.volume = 65;

console.log(settings);

//5.
let bike = {

}

bike.color = "red";

console.log(bike);

//6. 
let employee = {
    name: "Thảo Nguyễn",
    age: 18,
}

delete employee.age;

console.log(employee);

//7. 
let school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"],
}

console.log(school);

