// Demo 1: Anonymous Callbacks
// Use forEach to log each fruit to the console in all upper case
let fruits = ["Apple", "Banana", "Cherry", "Date"];

// Normal Callback
// let fruitsCallback = function (fruit) {
//     console.log(fruit.toUpperCase());
// };
// fruits.forEach(fruitsCallback);

// Anonymous Callback
fruits.forEach(function (fruit) {
    console.log(fruit.toUpperCase());
});

// Demo 2: Array.map()
// Use the Array.map() function to create a new array of temperatures converted from
// Celsius to Fahrenheit and log it to the console:
// F = (9/5) * C + 32
let tempsInC = [0, 10, 20, 30, 40];

let tempsInF = tempsInC.map(function (temp) {
    return (9 / 5) * temp + 32;
});

console.log(tempsInF);
// Expected array: [32, 50, 68, 86, 104]

// Demo 3: Array.filter()
// Use the Array.filter() function to create a new array of ages that are 18 or older
// and log it to the console.
let ages = [18, 22, 30, 15, 40, 12, 25];

let adults = ages.filter(function (age) {
    return age >= 18;
});

console.log(adults);
// Expected array: [18, 22, 30, 40, 25]
