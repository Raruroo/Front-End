// 1.
// //JavaScript Variable & Operators
// //1. JavaScript Variable
// let fullName = "John Doe" // camel case
// let FullName = "John Doe" // pascal case
// let full_Name = "John Doe" // snake case

// // Tipe-tipe data
// const gender  = "male" //string
// let age = 30 //Number
// let weight = 90.6 //Number float
// let isMarried = false //Boolean
// let grade = null //null
// let address //undefined

// console.log(gender, age, weight, isMarried, grade, address)

//2.
//JavaScript Operator
// a.Arithmetic Operator (+, -, *, /, %, **)
// let bil1 = 20
// let bil2 = 5 
// console.log(bil1 + bil2) //25
// console.log(bil1 - bil2) //15
// console.log(bil1 * bil2) //100
// console.log(bil1 / bil2) //4
// console.log(bil1 & bil2) //0
// console.log(bil1 ** bil2) //3200000

//mini exercise
//Buatlah Program yg menghitung luas lingkaran
//dimana r/jari2 anda tentukan sendiri


// const PHI = 3.14
// let r = 7
// let luas = PHI * (r * r)
// console.log(luas)

//b. Assignment Operator(=, +=, -=, *=, /=)
// let bilangan = 5
// bilangan = bilangan + 10 //15
// bilangan += 5 //20

//c.String Operaton (+) concatination
const firstName = "John"
const lastName = "Doe"
const fullName = firstName + " " + lastName
console.log(fullName)
//d. Relational Operator (==, ===, >, <, >=, <=, !=)
let bil1 = 10
let bil2 = 20
let bil3 = "10"

console.log(bil1 == bil3) // true
console.log(bil1 === bil3)//false
console.log(bil1 > bil2)//false
console.log(bil1 < bil2)//true

//e. Logical Operator (&&, ||, !)
console.log(true && true) // true
console.log(true && false)//false
console.log(false && true)//false
console.log(false && false)//false

console.log(true || true)//true
console.log(true || false)//true
console.log(false || true)//true
console.log(false || false)//false

console.log(!true)//false
console.log(!false)//true

//f. Ternary Operator (? :)
let age = 16
let isEligible = age >= 17 ? "Bisa buat KTP" : "Belum bisa buat KTP"
console.log(isEligible)

//Mini Exercise
//Buat program yang dapat menghitung BMI (body mass index)
//Rumus BMI : berat (KG) / (tinggi (m) * tinggi (m))
//tampilkan hasilnya :
//jika BMI > 25 -> "BMI anda adalah _____, kategori kelebihan berat badan"
//jika BMI < 25 -> "BMI anda adalah _____, kategori normal"

const berat = 40
const tinggi = 173
let rumus = berat / (tinggi * tinggi)
let isBMI = rumus >= 25 ? "BMI anda adalah"+" "+ rumus + " " + "kategori kelebihan berat badan" : "adalah"+" " + rumus + " " + "kategori Normal"
console.log(isBMI)


