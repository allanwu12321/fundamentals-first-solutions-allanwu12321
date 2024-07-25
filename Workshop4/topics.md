# Additional Topics

## Template Literals

So far, we've used `console.log` to log out a lot of things, including statements and sentences. But using string concatenation to log sentences can get pretty tedious. For example, let's say that we have two variables `firstName` and `lastName`:

    let firstName = "Allan";
    let lastName = "Wu";

If we wanted to log a message to the console that says: "My name is Allan Wu.", then I would have to do this:

    console.log("My name is " + firstName + " " + lastName + ".");

Although it works fine, that's a lot of string concatenation going on, especially when we just want to add a space or period at the end. To shorten this process, we can use JavaScript's **template literals**, which allow us to type out a sentence, then insert variable values when needed. To rewrite the above sentence as a template literal, we would say:

    console.log(`My name is ${firstname} ${lastName}.`);

This syntax is much simpler to write and read. Notice that we use a "`" instead of double or single quotes like we do with strings.

## for...in Loops

Most of the time, a normal `for` loop will be able to accomplish your looping needs. One of the exceptions to this rule is looping over object keys. An Object's keys do not follow the same pattern as an Array's indexes, so we can't simply use a loop variable `i` that increments by `1` each iteration.

For this case, we have to use a `for...in` loop to loop over an object's keys. Consider the below object:

    let obj = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5
    }

To loop over an object's keys, we would do:

    for(let key in obj){
        console.log(key); // prints out "a b c d e" each on new lines
    }

Of course, we could use these key values to loop over an object's properties as well:

    for(let key in obj){
        console.log(obj[key]); // prints out "1 2 3 4 5" each on new lines
    }

One use case that we didn't go over in the workshop is using `for...in` loops with arrays. Consider the array:

    let arr = ["Fee", "Fi", "Fo", "Fum"];

If we use a `for...in` loop with the `arr` Array, we would see this:

    for(let i in arr) {
        console.log(i); // prints out "0 1 2 3" each on new lines
    }

So, `for...in` loops used on Arrays will loop over the index numbers.

## String properties

Although strings are primitive types in JavaScript, they actually have properties and built-in methods to work with them -- very similar to Arrays.

You've already seen a few of them: `toUpperCase`, `toLowerCase`, and `.length`. The way that JavaScript allows a primitive data type to have properties and methods is called an object wrapper. Essentially, when we call a method or attempt to access a property on a string, JavaScript will temporarily turn it into an object representing a string, perform the operation with this temporary object, and then turn it back into a primitive string. This all happens behind the scenes, so it makes it _appear_ as if primitive strings had properties and methods.

A few important methods to note are: `concat()`, `trim()`, `replace()`, `includes()`, `substring()`
