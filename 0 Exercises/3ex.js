
// Coding challanges and interview questions

// 7. interview question 

// What is anonymous function?
// Ans - A function expression is similer to and has the same syntax
// as a funcrion decleration one can define "named" function expressions 
// (where the name of the expression might be ued in the call stack for example)
// or "anonyomus" function expression.

// A function without a name is called Anonymous Function

// ex - 

// This is function expression
function sum(a,b) {
    return a + b;
}

var funExpression = sum(8, 9);
// function ko ek variable me store krne ko hi function expression kehte h

console.log(funExpression);

// now --->

// this is anonymous function expression
var funExp = function(x, y) {
    return x + y;
}

console.log(funExp(5, 7));


// challange time - 5

// use splice() to perform - 
// 1. Add Dec at the end of an array
// 1.1 Add May in the months list
// 2. What is the return value of splice()
// 3. Update march to March
// 4. Delete june from the array
// 5. Delete all the elements after apr from the array 

const months = ['Jan', 'Feb', 'mar', 'Apr', 'June', 'July'];

// Ans - 1
console.log(months.length);
// syntax - splice(indexNumber, deleteCount, string)
const newMonth = months.splice(months.length, 0, "Dec");

// Ans - 1.1
console.log(months);
const newMonth1 = months.splice(months.length - 3, 0, "May");
console.log(months);

// Ans - 2
console.log(newMonth); // splice() returns an empty array ---> output : []
// reason - splice delete count ko dekhta h, aur isme deleteCount 0 h islye empty array output show kr rha h
// agar deleteCount k jagah pr kuch delete kre to wo deleted element ka output show krega

// Ans - 3
const indexOfMonth = months.indexOf('mar');
if(indexOfMonth != -1) {
    const updateMonth = months.splice(indexOfMonth, 1, 'Mar');
    console.log(months);
} else {
    console.log("Not Found");
}

// Ans - 4
const indexOfDeleteMonth = months.indexOf('June');
if(indexOfMonth != -1) {
    const deleteMonth = months.splice(indexOfDeleteMonth, 1);
    console.log(months);
    console.log(deleteMonth);
} else {
    console.log("Not Found");
}

// Ans - 5
const index = months.indexOf('Apr');
if(index != -1){
    const deleteRestOfMonthsAfterApril = months.splice(index, Infinity);
    console.log(months);
    console.log(deleteRestOfMonthsAfterApril);
} else {
    console.log("Not Found");
}


