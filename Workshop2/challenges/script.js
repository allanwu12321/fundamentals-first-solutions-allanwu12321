// // Challenge 1: Temperature Converter
// // Prompt: Write a program that converts temperatures from Celsius to Fahrenheit based on user input
// let c = prompt("Provide a temperature in Celsius:");
// let f = (9 / 5) * C + 32;
// console.log(c + " degrees Celsius is " + f + " degrees Fahrenheit.");

// // Challenge 2: Simple Calculator
// // Prompt: Create a small calculator that performs basic arithmetic operations based on user input

// let num1 = parseInt(prompt("Provide a number:"));
// let num2 = parseInt(prompt("Provide another number:"));
// let operation = prompt(
//     "Provide an operation(addition, subtraction, multiplication, division):"
// );

// if (operation === "addition") {
//     console.log("result: " + (num1 + num2));
// } else if (operation === "subtraction") {
//     console.log("result: " + (num1 - num2));
// } else if (operation === "multiplication") {
//     console.log("result: " + num1 * num2);
// } else if (operation === "division") {
//     console.log("result: " + num1 / num2);
// } else {
//     console.log("Please enter a valid operation");
// }

// Practice Compound Assignment:
let x = 7;

x -= 1; // Also works: x-- or --x
x /= 2;
x += 14;
x **= 2;
x *= 3;
x %= 13;

console.log(x);

// Practice Truthy vs Falsy:

// [1]:
let value1 = "";
if (value1) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

// [2]:
let value2 = "hello";
if (value2) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

// [3]:
let value3 = 0;
if (value3) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

// [4]:
let value4 = 183;
if (value4) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

// [5]:
let value5;
if (value5) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

// [6]:
let value6 = NaN;
if (value6) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

// [7]:
let value7 = true;
if (value7) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

// More Practice for Truthy/Falsy:
// Write a program that asks the user for their name and logs a greeting to them, like "Hello David!".
// If the user doesn't input any name, output "Hello, stranger" instead.
// Use what we learned about truthy/falsy values in your conditional statement.
