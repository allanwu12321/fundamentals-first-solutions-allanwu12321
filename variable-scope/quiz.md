# Variable Scope Quiz

1. In JavaScript, where is a variable's scope determined?
   It is determined when a variable is declared, not initalized.

2. Explain the difference between **global scope** and **block scope**.
   global scope means that a variable is accessible from **anywhere in the code**. block scope means the variable is accessible from **within the code block it was declared in**.

3. When JavaScript attempts to reference a variable that does not exist or is outside of its scope, what error is thrown?
   ReferenceError

## Complete the following problems below having to do with variable scope

### Problem 1: Global vs Block Scope Basics

Predict the output of the following code:

    let message = "Global Scope";

    if (true) {
        let message = "Block Scope";
        console.log(message); // Output?
    }

    console.log(message); // Output?

1. What will `console.log(message)` inside the `if` statement print?
   Block Scope

2. What will `console.log(message)` outside the `if` statement print?
   Global Scope

3. When two variables have the same name, does **block scope** or **global scope** have more priority?

Run your code and inspect the results. Fix your answers if necessary.

### Problem 2: Predict the Output

Consider the following code snippet:

    let humanSound = "Hello";
    let birdSound = "Chirp";

    function makeSounds(){
        let dogSound = "Bark";
        let catSound = "Meow";
        humanSound = "Hi";

        console.log(humanSound); // [1]
        console.log(dogSound); // [2]
        console.log(catSound);
    }

    console.log(birdSound); // [3]
    makeSounds();
    console.log(humanSound); // [4]
    console.log(dogSound); // [5]

Without actually running this code yet, type below what you think will be logged to the console for each of the 5 labels above:

1. What will the `console.log` at [1] print?
   "Hi"

2. What will the `console.log` at [2] print?
   "Bark"

3. What will the `console.log` at [3] print?
   "Chirp"

4. What will the `console.log` at [4] print?
   "Hi"

5. What will the `console.log` at [5] print?
   ReferenceError

After answering the questions above, copy and run the code in the `example` directory and take note of the output. Which ones (if any) did you get wrong?

### Problem 3: Real-World Scenario

When variables have different scopes, they can actually share the same variable names!

Consider the following code snippet:

    let name = "Alice";

    if (true) {
        let name = "Bob";
        if (true) {
            let name = "Charlie";
            console.log(name); // [1]
        }
        console.log(name); // [2]
    }

    console.log(name); // [3]

1. What will the `console.log` at [1] print?
   "Charlie"

2. What will the `console.log` at [2] print?
   "Bob"

3. What will the `console.log` at [3] print?
   "Alice"

4. When two variables both have the same name, but are in two block-level scopes, does the inner code block or outer code block take priority? (Hint: For [1], which name printed out?)
   The inner code block

After answering the questions above, copy and run the code in the `example` directory and take note of the output.

> **Note:** Although it's technically _possible_ to name your variables like this, it's certainly not recommended. This code was written this way for the purpose of the exercise, but always try to avoid using the same variable names in your actual programs.

## Tips:

1. How to write `Code Examples` in markdown

**for JS**:

```javascript
let data = "Howdy";
```

**for HTML**:

```html
<div>
    <p>This is text content</p>
</div>
```

**for CSS**:

```css
div {
    width: 100%;
}
```
