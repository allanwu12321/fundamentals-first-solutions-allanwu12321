// Objects Exercise here
let person = {
    firstName: "Allan",
    lastName: "Wu",
    hobby: "coding",
};

console.log("Initial person:", person);

console.log("This person's name is", person.firstName, person.lastName);
console.log("This person's hobby is", person["hobby"]);

person.job = "Software Engineer";
let propName = "previousJob";
person[propName] = "Cashier";

console.log("This person's previous job was", person.previousJob);
console.log("Final person:", person);

let shapes = [
    { name: "square", sides: 4 },
    { name: "triangle", sides: 3 },
    { name: "pentagon", sides: 5 },
];

let circle = {
    name: "circle",
    sides: 0,
};

shapes.push(circle);

for (let i = 0; i < shapes.length; i++) {
    console.log("A " + shapes[i].name + " has " + shapes[i].sides + " sides.");
}

console.log("Final shapes array:", shapes);

let numSides = parseInt(
    prompt("Please enter a number of sides you want to search for:")
);

let foundShape = null;

for (let i = 0; i < shapes.length; i++) {
    let currentShape = shapes[i];
    if (currentShape.sides === numSides) {
        foundShape = currentShape;
        break;
    }
}

if (foundShape === null) {
    console.log("No matching shape was found.");
} else {
    console.log("We found a shape! It's the " + foundShape.name + ".");
}
