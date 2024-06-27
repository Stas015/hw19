let arr = [1, 2, 3, 4, 5, 6];

let arr1 = [1, 2, 3];
let elementToAdd = 4;
arr[arr.length] = elementToAdd; // Додаємо елемент в кінець масиву
console.log(arr); // [1, 2, 3, 4]


let newarr = [1, 2, 3, 4];
let lastElement = arr[arr.length - 1]; // Зберігаємо останній елемент
arr.length = arr.length - 1; // Зменшуємо довжину масиву на 1
console.log(lastElement); // 4
console.log(arr); // [1, 2, 3]

let mapArr = [1, 2, 3, 4];
let result = [];
for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i] * 5; // Множимо кожен елемент на 5
}
console.log(result); // [5, 10, 15, 20]

let arrFilter = [1, 2, 3, 4, 5, 6];
let newresult = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        result[result.length] = arr[i];
    }
}
console.log(result); // [2, 4, 6]

// Реалізація reduce
let arrReduce = [1, 2, 3, 4, 5, 6];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum); // 21