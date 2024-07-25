// Demo 1: Nearest Store
// Write a function nearestStore that takes an array of objects representing stores
// and returns the id of the store that is closest to the user.
function nearestStore(stores) {}

// Examples:
let stores = [
    { id: 112, name: "Store A", metersFromUser: 243 },
    { id: 267, name: "Store B", metersFromUser: 59 },
    { id: 362, name: "Store C", metersFromUser: 342 },
    { id: 335, name: "Store D", metersFromUser: 8943 },
    { id: 321, name: "Store E", metersFromUser: 200 },
];

console.log(nearestStore(stores)); // Output: 267

// Demo 2: for...in Loops
// Write a function logAll that takes an object an logs all of the object's properties
// and values to the console
// Example: name: Alice
function logAll(obj) {}

let person = {
    name: "Alice",
    age: 30,
    occupation: "Engineer",
};
logAll(person);
// Output:
// name: Alice
// age: 30
// occupation: Engineer

let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
};
logAll(car);
// Output:
// make: Toyota
// model: Camry
// year: 2020

let book = {
    title: "1984",
    author: "George Orwell",
    pages: 328,
};
logAll(book);
// Output:
// title: 1984
// author: George Orwell
// pages: 328
