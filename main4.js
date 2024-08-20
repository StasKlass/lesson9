let arr = [];

for (let i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random() * 50) + 1;
}

let sum = arr.reduce((acc, current) => acc + current, 0);

console.log("Массив:", arr);
console.log("Сумма всех элементов массива:", sum);
