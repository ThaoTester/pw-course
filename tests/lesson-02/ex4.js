const input = 170;

const height = input - 100;

const weight = height * 9 / 10;
const weight_max = height;
const weight_min = height * 8 / 10;

console.log("Cân nặng lý tưởng: ", weight + " kg || Cân nặng tối đa:", weight_max + " kg || Cân nặng tối thiểu: ", weight_min + " kg");