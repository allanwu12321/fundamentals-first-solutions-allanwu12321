// Challenge 1: Given the below array of objects, complete the below tasks:

let people = [
    {
        name: "Sandra",
        hobby: "playing soccer",
        phoneNumber: "123-456-7777",
        shoeSize: 6,
    },
    {
        name: "Bill",
        hobby: "woodworking",
        phoneNumber: "123-456-8888",
    },
    {
        name: "Paul",
        job: "marketing specialist",
        phoneNumber: "123-456-9999",
        shoeSize: 9,
    },
    {
        name: "Ariel",
        shoeSize: 5,
        job: "barista",
    },
    {
        name: "Ben",
        hobby: "playing video games",
        phoneNumber: "123-456-0000",
    },
];

// Challenge 1.1: Log a message to the console for each person who has a hobby
// Example: Sandra likes playing soccer.

// Challenge 1.2: Log a message to the console for each person who has a shoeSize
// Example: Sandra has a shoe size of 6.

// Challenge 1.3: Log a message to the console for each person who has a phone number
// Example: Sandra's phone number is 123-456-7777

// Challenge 2: Factorial
// Declare a function called "factorial" that takes a number and returns its factorial.
// The factorial of a number is calculated: 4! = 4 * 3 * 2 * 1 = 24
function factorial(num) {}

// factorial Examples:
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040
console.log(factorial(8)); // 40320

// Practice: Farthest Driver
// Declare a function farthestDriver which takes one input: an array of objects representing drivers
// farthestDriver should return the name of the driver that's farthest from the user.
function farthestDriver(drivers) {}

let drivers = [
    {
        id: 101,
        firstName: "Jenny",
        feetFromUser: 5193,
    },
    {
        id: 204,
        firstName: "Nigel",
        feetFromUser: 245,
    },
    {
        id: 33,
        firstName: "Andreas",
        feetFromUser: 78,
    },
    {
        id: 443,
        firstName: "Boris",
        feetFromUser: 8331,
    },
];

console.log(farthestDriver(drivers)); // 443

// Practice: Find Key Name
// Declare a function findKey which takes 2 inputs: an object and a data value.
// The function finds and returns the key name in the object that corresponds to the
// given data value. If the value is not found, the function returns null.
function findKey(obj, value) {}

// findKey Examples:
let myObject = { a: 1, b: 4, c: 3, d: 8, e: 13, f: 6 };
console.log(findKey(myObject, 4)); // b
console.log(findKey(myObject, 1)); // a
console.log(findKey(myObject, 13)); // e

// Challenge: Total Letters in a Sentence
// Write a function called totalLetters that takes a sentence string
// and returns the number of letters in the string.
// The number of letters does NOT include spaces.
// Hint: Use the split() function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
function totalLetters(sentence) {}

// totalLetters Examples:
let sentence1 = "This is an example of a sentence";
console.log(totalLetters(sentence1)); // 26

let sentence2 = "This sentence has more words than the last one";
console.log(totalLetters(sentence2)); // 38

let sentence3 = "Sentences can be short";
console.log(totalLetters(sentence3)); // 19
