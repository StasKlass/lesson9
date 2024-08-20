let arr = [];

for (let i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random() * 100) + 1;
}

let max = Math.max(...arr);
let min = Math.min(...arr);

console.log("Массив:", arr);
console.log("Максимальное значение:", max);
console.log("Минимальное значение:", min);
