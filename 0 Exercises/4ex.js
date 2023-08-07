
// Coding challanges and interview questions

// challange time - 6
 
// using map() and filter() perform :-
// 1. Find the square root of each element in the array
// 2. Multiply each element by 2 and return only those elements which are greater than 10

// Array.prototype.map()
// syntax - 
//  let newArray = arr.map( calback( currentValue[ , index[ , array]])) {
//      returns element for newArray, after executing something 
//  }
// it returs a new array containing the results of calling a function on every element in the array.

// Example num > 9 chahiye - 

const arr = [1,4,9,16,25];

let newArr = arr.map(
    (currentElement, index, array) => {
        return currentElement > 9;
    }
)
console.log(arr);
console.log(newArr);    

let newArr1 = arr.map(
    (currentElement, index, array) => {
        return `Index no. = ${index} and the value is ${currentElement} belongs to ${array}`;
    }
)
console.log(newArr1);


// Ans - 1
let array = [25,36,49,64,81];
let sqrt = array.map(
    (currentElement, index, array) => {
        return Math.sqrt(currentElement);
    }
)
console.log(array);
console.log(sqrt);

// Ans - 2
// this process is called chaining function which is allowed in map()
// in this chaining function map() is followed by filter()
let array2 = [2,3,4,6,8];
console.log(array2);

let greaterThan10 = array2.map(
    (currentElement, i, array) => {
        return currentElement*2;
    }
).filter(
    (currentElement, index, array) => {
        return currentElement > 10;
    }
)
console.log(greaterThan10);


// challange time - 7

// Multiply each element by 2 and return only those elements which are greater than 10 
// and find the sum of those remaining elements which are (after multiplying by 2) greater than 10

// reduce() - flattens an array, it meand it converts 3D or 2D array to a 1D array
// the reduce() executes a reducer function (which we provide) on each element of the array
// resultion in single output value.
// reducer function takes 4 arguments - 
// 1. accumulator
// 2. current value
// 3. current index
// 4. array

let array3 = [2,3,4,6,8];

console.log(array3);

let greaterThanTen = array3.map(
    (currentElement, i, array) => {
        return currentElement*2;
    }
).filter(
    (currentElement, index, array) => {
        return currentElement > 10;
    }
)
console.log(greaterThanTen);

// accumulator - ka matlab ikkattha karna
let sumOfRemainingElements = greaterThanTen.reduce(
    (accumulator, currentElement, index, array) => {
        return accumulator += currentElement;
    }
)
console.log(sumOfRemainingElements);


// ***** NOTE - reduce() ko bhi map() k sath chain kar sakte h. Aur Multiple chaining bhi possible h map() k sath. *****
// jaise -  map().filter().reduce()


// map(), filter() and reduce() combined - 
let array4 = [2,3,4,6,8];

console.log(array4);

let greaterThanTenAndThenSumOfTheRemainingElements = array4.map(
    (currentElement, index, array) => {
        return currentElement*2;
    }
).filter(
    (currentElement, index, array) => {
        return currentElement > 10;
    }
).reduce(
    (accumulator, currentElement, index, array) => {
        return accumulator += currentElement;
    }, 8 // ye h initial value jo - reduce() ka ek aur property h
)
console.log(greaterThanTenAndThenSumOfTheRemainingElements);


// 8. interviwe question 

// Difference b/w forEach() and map()
// Ans - forEach() - mutates the original array and returns undefined
//       map() - does not mutate the original array instead it creates a new array and returns the new array