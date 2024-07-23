// Functions Exercise here

// Example Function and Calls
function addTwoNumbers(num1, num2) {
    let result = num1 + num2;
    return result;
}
// Example Calls
let addTwoNumbersResult1 = addTwoNumbers(2, 2);
console.log("AddTwoNumbers Exercise:", addTwoNumbersResult1);

let addTwoNumbersResult2 = addTwoNumbers(1, 4);
console.log("AddTwoNumbers Exercise:", addTwoNumbersResult2);

// Rest of Exercise Here:

// Exercise: addAndMultiplyBy5
function addAndMultiplyBy5(num1, num2) {
    let result = (num1 + num2) * 5;
    return result;
}
// Example Calls
let addAndMultiplyBy5Result1 = addAndMultiplyBy5(10, 5);
console.log("addAndMultiplyBy5 Exercise: ", addAndMultiplyBy5Result1);

let addAndMultiplyBy5Result2 = addAndMultiplyBy5(8, 12);
console.log("addAndMultiplyBy5 Exercise: ", addAndMultiplyBy5Result2);

// Exercise: hoursToMinutes
function hoursToMinutes(hours) {
    let minutes = hours * 60;
    return minutes;
}
// Example Calls
let hoursToMinutesResult1 = hoursToMinutes(2);
console.log("hoursToMinutes Exercise: ", hoursToMinutesResult1);

let hoursToMinutesResult2 = hoursToMinutes(10);
console.log("hoursToMinutes Exercise: ", hoursToMinutesResult2);

// Exercise: getGreeting
function getGreeting(name) {
    let greeting = "Hello " + name + "!";
    return greeting;
}
// Example Calls
let getGreetingResult1 = getGreeting("Joe");
console.log("getGreeting Exercise: ", getGreetingResult1);

let getGreetingResult2 = getGreeting("Kevin");
console.log("getGreeting Exercise: ", getGreetingResult2);

// Exercise: giveMeBiggest
function giveMeBiggest(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
// Example Calls
let giveMeBiggestResult1 = giveMeBiggest(100, 999);
console.log("giveMeBiggest Exercise: ", giveMeBiggestResult1);

let giveMeBiggestResult2 = giveMeBiggest(-1, 1000);
console.log("giveMeBiggest Exercise: ", giveMeBiggestResult2);

// Exercise: getLast
function getLast(arr) {
    let last = arr[arr.length - 1];
    return last;
}
// Example Calls
let getLastResult1 = getLast([67, 7, 1, 5]);
console.log("getLast Exercise: ", getLastResult1);

let getLastResult2 = getLast([1, 5, 7, -12, 6, 2, 5]);
console.log("getLast Exercise: ", getLastResult2);

// Exercise: multiplyAll
function multiplyAll(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        product = product * arr[i];
    }
    return product;
}
// Example Calls
let multiplyAllResult1 = multiplyAll([1, 2, 3, 4]);
console.log("multiplyAll Exercise: ", multiplyAllResult1);

let multiplyAllResult2 = multiplyAll([123, 6, 2, 66, 2]);
console.log("multiplyAll Exercise: ", multiplyAllResult2);

// Exercise: getLargest
function getLargest(arr) {
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
// Example Calls
let getLargestResult1 = getLargest([7, 2, 7, 9, 3, 8, 12]);
console.log("getLargest Exercise: ", getLargestResult1);

let getLargestResult2 = getLargest([6, 2, 87, 1, 4, 23]);
console.log("getLargest Exercise: ", getLargestResult2);
