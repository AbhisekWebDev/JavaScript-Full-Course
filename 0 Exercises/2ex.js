
// Coding challanges and interview questions

// challange time - 3

// WAP to find whether the given year is leap year or not

let year = 2020;
console.log(year);

if(year % 4 === 0) {
    if(year % 100 === 0) {
        if(year % 400 === 0) {
            console.log(`The year ${year} is a Leap year`);
        } else {
            console.log(`The year ${year} is not a Leap year`);
        }
    } else {
        console.log(`The year ${year} is a Leap year`);
    }
} else {
    console.log(`The year ${year} is not a Leap year`);
}


// 3. interview question

// What is truthy and falsy in JS?
// We have total 5 falsy values : - 0, "", undefined, null, NaN

// if condition me agar false value put krenge to hamesha wo else ko hi console krega
// ex - 

if("") {
    console.log("We lost");
} else {
    console.log("We won");
}


// 4. interview question

// JS me aisa konsa operator h jo 3 operands ko accept krta h? 
// Ans - Ternary operator

// ex - 
var age = 17;
check = (age >= 18) ? "you can vote" : "you cant vote";
console.log(check);


// challange time - 4

// Find the area of circle, triangle and rectangle using switch

var area = "rectangle";

var PI = 3.14, l = 5, b = 4, r = 3;

// if(area == "circle") {
//     console.log("The area of a circle is : " + (PI*r**2));
// } else if(area == "triangle") {
//     console.log("The area of a triangle is : " + (l * b)/2);
// } else if(area == "rectangle") {
//     console.log("The area of a rectangle is : " + (l * b));
// } else console.log("Invalid");

// Switch statement evaluates an expression, matches the expression's value to a case clause 
// and executes statements associated with that case

switch(area) {
    case 'circle' :
        console.log("The area of a circle is : " + (PI*r**2));
        break;
    
    case 'triangle' :
        console.log("The area of a triangle is : " + (l * b)/2);
        break;

    case 'rectangle' :
        console.log("The area of a rectangle is : " + (l * b));
        break;

    default : console.log("Invalid");
}


// 5. interview question

// What us the diff. b/w function parameter and function arguments?
// Ans - parameters are the names listed in the function definition inside parenthesis
//       arguments are the values passed to the function

// ex - 

function sum(a, b) { // parameters
    var total = a + b;
    console.log(total);
}

sum(70, 30); // arguments 
sum(20, 30);


// 6. interview question

// Why functions?
// Ans - we can reuse code, define the code once and use it many times.
//       we can use code many times with different arguments to produce different results
// a.k.a - write once, read many.