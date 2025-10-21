// javascript conditional & loop
// // 1. JavaScript conditional

// // if - else
// suhu = 35

// if (suhu >= 38) {
//     console.log("Suhu Panas");
// } else {
//     console.log("Suhu Normal");
// }

// // if - else if - else
// // jika nilai 91 - 100, maka nilai A
// // jika nilai 81 - 90, maka nilai B
// // jika nilai 71 - 80, maka nilai C
// // jika nilai <= 70, maka nilai D
// nilai = 75

// if (nilai >= 91 && nilai <= 100) {
//     console.log("Nilai A");
// } else if (nilai >= 81 && nilai <= 90) {
//     console.log("Nilai B");
// } else if (nilai >= 71 && nilai <= 80) {
//     console.log("Nilai C");
// } else if (nilai <= 70) {
//     console.log("Nilai D");
// } else {
//     console.log("Nilai Invalid");
// }

// // switch - case
// let hari = 1
// switch (hari) {
//     case 1:
//         console.log("Hari minggu");
//         break;
//     case 2:
//         console.log("Hari senin");
//         break;
//     case 3:
//         console.log("Hari selasa");
//         break;
//     case 4:
//         console.log("Hari rabu");
//         break;
//     case 5:
//         console.log("Hari kamis");
//         break;
//     case 6:
//         console.log("Hari jumat");
//         break;
//     case 7:
//         console.log("Hari sabtu");
//         break;
//     default:
//         console.log("Hari tidak valid");
//         break;
// }



// 2. JavaScript loop

// // for loop
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// // while loop
// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// // do while loop
// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 10);

let numbers = [1, 2, 3, 4, 5]
// console.log(numbers);
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// build-in method array
// 1. forEach()
numbers.forEach(function (value){
    console.log(value);
})

// // 2. map()
// let output = numbers.map(function(value){
//     return value;
// })
// console.log(output);

// // 3. filter()
// let output = numbers.filter(function(value){
//     return value > 2;
// })
// console.log(output);

// 4. find()
let output = numbers.find(function(value){
    return value > 2;
})
console.log(output);