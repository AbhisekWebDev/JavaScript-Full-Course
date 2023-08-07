
// Coding challanges and interview questions

// challange time - 8

// Display only 280 characters of a string like the one used in twitter

let myTweets = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

let myActualTweets = myTweets.slice(0, 280);
console.log(myActualTweets);
console.log(myActualTweets.length);


// challange time - 9

// Return the unicode of the last char of a string

let string = "Hello Abhisek";
let lastChar= string.length - 1;
let secondLastChar= string.length - 2;
console.log(lastChar);
console.log(secondLastChar);
charCode = string.charCodeAt(lastChar);
console.log(charCode);


// 9. interview question

// Difference b/w slice, splice, split, shift, unshift, pop, push, substr, substring *****

// Ans - 

// slice vs. splice : -
    // slice returns a piece of the array but it doesn't affect the original array. 
    // splice changes the original array by removing, replacing, or adding values and returns the affected values.

// slice vs. substring : -
    // The slice() method returns an empty string if this is the case. If either or both of the arguments are negative or NaN , 
    // the substring() method treats them as if they were 0 

// substr vs. substring : -
    // The second argument of the substring method takes the end index, which is excluded from the final substring, 
    // while the second argument of substr method takes the maximum length of the expected substring.

// slice vs. split : -
    // Slice() is used to extract elements from an array and return a new array, and it would not modify the origin array. 
    // Split() is used to convert the input string into an array by the separator, and since string is immutable, it would not modify the origin string.


// 10. interview question

// Difference b/w onclick and addEventListener 
// Ans - addEventListener does not overrides an existing event handlers
//       whereas onclick ovverrides any existing event handlers


// 11. interview question

// Difference b/w setTimeout() and setInterval()
// Ans - setTimeout() stops after reaching at the given timeout
//       setInterval() runs in infinity and we have to explicitly stop the interval by calling clearInterval()


// challange time - 10

// use of this keyword

let bio = {
    name : {
        fName : "Abhisek",
        lName : "Kumar",
    },
    age : 26,
    city : "Kolkata",

    getBio() {
        console.log(`My name is ${this.name.fName} and i live in ${this.city}`);
    }
}
bio.getBio();


// 12. interview queation 

// What is scope chain and lexical scoping?
// Ans - scope chain is used to resopve the value of variable names
//       scope chain is lexically defined, means that we can see what the scope chain will be byh looking at the code.
//       lexical scoping means, the inner function can ge access to their parent function variables but vice-versa is not true.

// lexical scoping ex:-

let a = "Hi "; //global scope

function fun1() { // parent function
    let b = " Abhisek ";

    function fun2() { // child function
        let c = " Wassup?";
        console.log(a+b+c); // jo variables globally defined h aur jo variables parent function k andr defined h un sab ko child function access kr skta h - isi ko lexical scoping bolte h
    }
    fun2();

    // console.log(a+b+c); // yaha par variable c ko accse nhi kiya ja skta but a aur b ko kiya ja skta h
}
fun1();


// 13. interview question

// What is event Loop?
// Ans - To avoid blocking, JavaScript uses an event loop to handle asynchronous operations. 
//       The event loop is essentially a loop that runs continuously and checks for tasks that are waiting to be executed. 
//       These tasks are added to a queue, and the event loop runs through the queue, executing each task in order.


// 14. interview question 

// What is function currying?
// Ans - currying in JS transforms a function with multiple arguments into a nested series of functions, each taking a single argument. 
//       Currying helps you avoid passing the same variable multiple times, and it helps you create a higher order function.

// function currying ex:-

function sum(num1) {
    console.log(num1);
    return function(num2) {
        console.log(num2);
        return function(num3) {
            console.log(num3);
            console.log(num1, num2, num3);
            console.log(num1 + num2 + num3);
        }
    }
}
sum(6)(7)(8);