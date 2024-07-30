# Additional Topics

## map()

higher order array method that returns a new array with each item transformed by a provided transformation function

    let people = [ 'Alice', 'Bob', 'Candice'];
    let capitalizer = function(person) {
        return person.toUpperCase();
    }
    let capitalizedPeople = people.map(capitalizer) // ['ALICE', 'BOB', 'CANDICE'];

## filter()

higher order array method that returns a new array with only the items that pass a provided filtering function

    let people = [ 'Alice', 'Bob', 'Candice'];
    let longName = function(name) {
        return name.length > 5;
    }
    let longNamedPeople = people.filter(longName) // ['CANDICE'];
