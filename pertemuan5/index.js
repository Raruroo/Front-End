// IIFE & Callback Function
// 1. IIFE (Immediately Invoked Function Expression)
// self-executing annonymous fuction

(function () { 
    console.log("Hello World")
})();

// IIFE with parameter & return value
let output = (function (fullname) {
    return "Hello " + fullname
})("Jhon Doe");
console.log(output);

// 2. Callback Function
// Function passed into another fuction as an argument
function greetings(callback) {
    callback()
}
// callbacl fuction must be an anonymous fuction
greetings(function () {
    console.log("Hello Callback")
});

// callback with parameter & return value
function greetings(callback) {
    let result = callback("John Doe");
    console.log(result);
}

// callback fuction must be an anonymous fuction