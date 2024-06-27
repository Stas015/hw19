let arr = [1, 2, 3, 4, 5, 6];

// Реалізація push
let arr1 = [1, 2, 3, 4, 5, 6];
let elementToAdd = 7; //додаємо 7
arr[arr.length] = elementToAdd;
console.log(arr); // [1, 2, 3, 4, 5, 6, 7]

// Реалізація pop
let arrPop = [1, 2, 3, 4, 5, 6];
let lastElement = arr[arr.length - 1];
arr.length = arr.length - 1;
console.log(lastElement); // 6
console.log(arr); // [1, 2, 3, 4, 5]

// Реалізація map
let arrMap = [1, 2, 3, 4, 5, 6];
let result = [];
for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i] * 5;
}
console.log(result); // [5, 10, 15, 20, 25, 30]
}
console.log(result); // [5, 10, 15, 20]

// Реалізація filter
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
