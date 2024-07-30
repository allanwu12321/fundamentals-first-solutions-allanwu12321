// Challenge 1: Rewrite for loop
// Consider the food array below:
let food = [
    {
        name: "Apple",
        price: 0.5,
    },
    {
        name: "Carrot",
        price: 0.3,
    },
    {
        name: "Milk",
        price: 1.2,
    },
    {
        name: "Bread",
        price: 2.0,
    },
    {
        name: "Chicken",
        price: 5.0,
    },
];
// Below is a for loop that loops over an array and logs a message to the console.
// for (let i = 0; i < food.length; i++) {
//     let currentFood = food[i];
//     console.log("The " + currentFood.name + " costs " + currentFood.price);
// }
// Comment out the above for loop and rewrite it using forEach.
food.forEach(eachFood);
function eachFood(food) {
    console.log("The " + food.name + " costs " + food.price);
}

// Challenge 2: Full Names Only
// Using forEach, add each director's full name from the directors array
// into the directorNames array.

let directors = [
    {
        fullName: "Alfred Hitchcock",
        bestMovie: "Strangers on a Train",
    },
    {
        fullName: "Orson Welles",
        bestMovie: "Citizen Kane",
    },
    {
        fullName: "John Ford",
        bestMovie: "The Searchers",
    },
    {
        fullName: "Martin Scorsese",
        bestMovie: "Taxi Driver",
    },
    {
        fullName: "Steven Spielberg",
        bestMovie: "Jaws",
    },
];
let directorNames = [];
// Challenge 2 code here
directors.forEach(findName);
function findName(person) {
    directorNames.push(person.fullName);
}

console.log(directorNames);
// Expected output: [ "Alfred Hitchcock", "Orson Welles", "John Ford", "Martin Scorsese", "Steven Spielberg"]

// Practice: Anonymous Callback
// Write a function called logSquares that takes an array of numbers and
// logs the square of each of those numbers.
function logSquares(arr) {
    arr.forEach(function (num) {
        console.log(num ** 2);
    });
}

// Examples:
logSquares([1, 2, 3, 4, 5]); // 1 4 9 16 25
logSquares([8, 5, 7, 7, 3]); // 64 25 49 49 9
logSquares([325, 468, 43.5, 342]); // 105625 219024 1892.25 116964

// Practice: map()
// Write a function called getWordLengths that takes an array of strings and returns
// a new array with the lengths of each string.
// Use map() with an anonymous callback.
function getWordLengths(array) {
    return array.map(function (word) {
        return word.length;
    });
}

// Examples:
let fruits = ["apple", "banana", "cherry"];
console.log(getWordLengths(fruits));
// Output: [5, 6, 6]

let vegetables = ["carrot", "broccoli", "asparagus"];
console.log(getWordLengths(vegetables));
// Output: [6, 8, 9]

let countries = ["France", "Germany", "Italy"];
console.log(getWordLengths(countries));
// Output: [6, 7, 5]

// Practice: filter()
// Write a function called filterLongWords that takes an array of strings and returns
// a new array containing only the strings that have more than 5 characters.
// Use filter() with an anonymous callback.
function filterLongWords(array) {
    return array.filter(function (word) {
        return word.length > 5;
    });
}

// Examples:
let animals = ["dog", "elephant", "cat", "giraffe", "lion"];
console.log(filterLongWords(animals));
// Output: ['elephant', 'giraffe']

let cities = ["Paris", "London", "New York", "Sydney", "Tokyo"];
console.log(filterLongWords(cities));
// Output: ['London', 'New York', 'Sydney']

let programmingLanguages = ["JavaScript", "Python", "Java", "C", "Ruby"];
console.log(filterLongWords(programmingLanguages));
// Output: ['JavaScript', 'Python']

// Final Challenge:
/*
    Write a function called processWords that takes an array of words and:
    1. Filters the array to include only words that have more than 3 characters using filter()
    2. Converts the filtered words to uppercase using map()
    3. Logs each word to the console using forEach()

    All of the callbacks should be anonymous
*/

function processWords(words) {
    words
        .filter(function (word) {
            return word.length > 3;
        })
        .map(function (word) {
            return word.toUpperCase();
        })
        .forEach(function (word) {
            console.log(word);
        });
}

let words = ["cat", "dog", "elephant", "fox", "giraffe", "hi", "zebra"];

// The function processWords should log the following to the console:
// ELEPHANT
// GIRAFFE
// ZEBRA

processWords(words);
