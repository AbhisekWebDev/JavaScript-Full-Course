
// Coding challanges and interview questions

// challange time - 1

console.log(10 + "10"); // = 1010

console.log(9 - "5"); // = 4 (bug)

console.log("Java" + "Script"); // = concat = JavaScript

console.log("" + ""); // = blank output

console.log("" + 0); // = 0

console.log("Abhisek" - "Kumar"); // = NaN

console.log(true + true); // = 2

console.log(true + false); // = 1

console.log(false + true); // = 1

console.log(false - true); // = -1


// 1. interview question

// What is the difference b/w null and undefined

let abhi = null;
console.log(abhi);

let kumar;
console.log(kumar);


// 2. interview question

// what is NaN?
// NaN is a property of the global object.
// it is a variable in global scope
// initial value of NaN is - Not a Number

var phNo = 9876543210;
var name = "abhi";
console.log(isNaN(phNo));
console.log(isNaN(name));

// adding validation using isNaN()
if(isNaN(name)) {
    console.log("enter valid ph no");
}


// challange time - 2

console.log(NaN === NaN); // = false

console.log(Number.NaN === NaN); // = false

console.log(isNaN(NaN)); // = true

console.log(Number.isNaN(NaN)); // = true