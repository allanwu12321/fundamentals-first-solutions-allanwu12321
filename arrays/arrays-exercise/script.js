// Arrays Exercise here
let languages = ["HTML", "CSS", "JavaScript", "React", "Node", "SQL"];
console.log(languages);

let firstElement = languages[0];
console.log("The first element of the array is", firstElement);

let thirdElement = languages[2];
console.log("The third element of the array is", thirdElement);

let length = languages.length;
console.log("The length of the array is", length);

let lastElement = languages[languages.length - 1];
console.log("The last element of the array is", lastElement);

languages[3] = "Anglular";
console.log("Final languages array", languages);

let names = ["Luke", "leia", "Han", "Ron"];

console.log("Initial names array:", names);
let popped = names.pop();

names.push("Chewbacca");
names.push("Anakin");
names.push("Jar Jar");

let anakinIndex = names.indexOf("Anakin");
names[anakinIndex] = "Darth Vader";

console.log("Final names array:", names);
console.log("Popped:", popped);
