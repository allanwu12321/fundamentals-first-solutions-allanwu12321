// Higher Order Programming Exercise here

// Calculator Exercise:
// Pre-defined Functions
let addition = function (num1, num2) {
    return num1 + num2;
};

let subtraction = function (num1, num2) {
    return num1 - num2;
};

let multiplication = function (num1, num2) {
    return num1 * num2;
};

let division = function (num1, num2) {
    return num1 / num2;
};

// Define the calculator function here:
function calculator(num1, num2, operation) {
    return operation(num1, num2);
}

console.log(calculator(7, 15, addition));
console.log(calculator(35, 8, subtraction));
console.log(calculator(681, 3, division));

// Poor man's forEach Exercise
function forEach(array, func) {
    for (let i = 0; i < array.length; i++) {
        func(array[i]);
    }
}

let yellIt = function (str) {
    console.log(str.toUpperCase());
};

let words = ["letters", "words", "sentences", "paragraphs"];
forEach(words, yellIt);

// Print Each Song Title Exercise
// Example song objects here
let exampleSongs = [
    { title: "Intro", artist: "The xx", minutes: 127 },
    { title: "Free Fallin'", artist: "Tom Petty", minutes: 256 },
    { title: "What You Know", artist: "Two Door Cinema Club", minutes: 191 },
    { title: "Closer", artist: "The Chainsmokers", minutes: 244 },
    { title: "Gooey", artist: "Glass Animals", minutes: 289 },
];

function printSongTitle(song) {
    console.log(song.title);
}

exampleSongs.forEach(printSongTitle);
