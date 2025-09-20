//1.
function multiply(a, b) {
    let nhan = a * b;
    return nhan;
}

console.log(multiply(2, 3));
console.log(multiply(5, 6));

//2.
function findMin(a, b, c) {
    if (a > b) return a;
    if (b > c) return b;
    return c;
}

console.log(findMin(3, 9, 5));
console.log(findMin(90, 89, 56));

//3.

let students = [
    {
        name: "Thao",
        score: 8
    },
    {
        name: "Nam",
        score: 6
    },
    {
        name: "Trâm",
        score: 9
    }

];

let threshold = [7];

function getTopStudents(students, threshold) {
    let result = [];

    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            result.push(students[i]);
        }
    }

    return result;
}

console.log(getTopStudents(students, threshold));

//5.

let principal = 34000;
let rate = 5;
let years = 4;
function calculateInterest(principal, rate, years) {
    const total = principal + principal * rate * years / 100;
    return total;
}

console.log(calculateInterest(principal, rate, years));

