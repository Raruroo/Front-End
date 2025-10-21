// // Rest Parameter & Spread Operator
// // 1. Rest Parameter
// // a. Bertipe data Array
// const funct1 = (...rest) => { // berfungsi untuk menghandle/simpan parameter yang banyak
//     console.log(rest); 
// };

// funct1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// const funct2 = (param1, param2, ...rest) => { // bisa digabung juga
//     console.log(param1, param2, rest); 
// };

// funct2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// // mini exercise
// // buat fungsi untuk menjulahkan semua nilai
// // pada argumen fungsi mengguanakan rest parameter
// const sumAll = (...numbers) => {
//     let total = 0;
//     rest.forEach((num) => (total += num));
//     console.log(total);
// }

// 2 Spread Operator
// Berkaitan dengan Array dan Object
// a. Array
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
console.log(...arr1);

// kegunaan soread opreator oada Array
//1. duplicate Array
const arr2 = [...arr1];
console.log(arr2);

//2. menggabungkan Array
let arr3 = [1, 2, 3];
let arr4 = [4, 5, 6];
let arr5 = [7, 8, 9];

let combineArr = arr3.concat(arr4, arr5);
console.log(combineArr); // cara lama

let arr6 = [...arr3, ...arr4, ...arr5];
console.log(arr6); // cara baru

// Kegunaan soread opreator pada Object
// 1. duplicate Object
const obj1 = {
    name: "John",
    age: 30,
};
const obj2 = {...obj1, address: "New York"}; // menambahkan properti baru pada object
console.log(obj2);

//2. menggabungkan Object
let obj3 = {a: 1, b: 2};
let obj4 = {c: 3, d: 4};

let combineObj = Object.assign({}, obj3, obj4); // cara lama
console.log(combineObj);

let obj5 = {...obj3, ...obj4}; // cara baru
console.log(obj5);
