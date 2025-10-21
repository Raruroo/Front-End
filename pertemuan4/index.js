//JavaScript Function
//Cara 1. Fuction Declaration
function greetings() {
    console.log("Hello, Welcome to JavaScript! 1")
}

greetings()//Call function

//cara 2. Function Expression
const greetings2 = function () { 
    console.log("Hello, Welcome to JavaScript! 2")
}

greetings2()

//Function with input (argument & parameter)
//and output (return value)

//cara 1
//                           parameter
function greetings3(FullName) {
    return "hello " + FullName + ", Welcome to JavaScript! 3"
}
//                           argument
let output = greetings3("John Doe")
console.log(output)

//cara 2
const greetings4 = function (FullName, age, address) { 
    return "hello " + FullName + ", Welcome to JavaScript! 4" + " You are " + age + " years old and live at " + address
}

let output2 = greetings4("Jane Doe", 25, "123 Main St")
console.log(output2)

//Gobal, Local, and Block Scope vriable
let x = 10 //global Variable
console.log("Global Scope x: ", x) //10
function func1() {
    console.log("Func1: ", x) //10
    if(true) {
        console.log("If Block: ", x) //10
    }
}//selain diluar function, x bisa diakses juga di dalam function
func1()

let xx = 10 //global Variable
console.log("Global Scope x: ", xx) //10
function func1() {
    let y = 20 //local variable
    console.log("Func1 Local xx: ", xx) //10
    console.log("Func1 Local y: ", y) //20
    if(true) {
        let z = 30 //block variable
        console.log("If Block: ", xx) //10
        console.log("If Block Local y: ", y) //20
        console.log("If Block Local z: ", z) //30
    }
}//selain diluar function, x bisa diakses juga di dalam function
func1()