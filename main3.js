let arr = [];

for (let i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random() * 75) + 1;
}

let max = Math.max(...arr);
let min = Math.min(...arr);

let sum = max + min;

console.log("Массив:", arr);
console.log("Максимальное значение:", max);
console.log("Минимальное значение:", min);
console.log("Сумма минимального и максимального значения:", sum);
