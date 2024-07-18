# Additional Topics gone over

## Compound Assignment Operators

Usually, when we want to perform arithmetic on a number, we would need to use both an arithmetic operator and the assignment operator. For example, consider the code snippet below:

    let x = 5;
    x = x + 5;
    console.log(x);

The above code would output `10`, since we basically added `5` to `x`.

But, this is a very common operation that we're doing here, and writing `x = x + 5` can be tedious. An easier way of doing this would be to combine the two operators into a **compound assignment operator**, which does arithmetic and assignment at the same time. Let's rewrite the above snippet with the compound addition operator:

    let x = 5;
    x += 5;
    console.log(x);

This version of the code _still outputs `10`_. But notice how much simpler it is to type. We don't need to type the variable name twice.

This works for all the arithmetic operators: `+`, `-`, `*`, `/`, `**`, and `%`

## Truthy vs Falsy values

In JavaScript, every single value is considered **truthy** or **falsy**. The point of this is to determine how conditional statements should react to these values when placed in a conditional statement.

Typically, you would expect to recieve a `boolean` value in an `if` statement's condition. But, how would you expect `if(50)` to behave? Would the condition's code block execute? Would it throw an error? It _would_ actually execute the `if` condition's code block because the value `50` is truthy.

Of course, the obvious ones are that `true` is truthy, and `false` is falsy. Instead of telling you what values are truthy, we can actually just go over all of the **falsy** values, since there are only a limited number of them:

-   `false`
-   `0`
-   `""` (empty string)
-   `null`
-   `undefined`
-   `NaN` (Not a number)

When the 6 values above are placed in an `if` condition, the `if` statement will act as if the condition is `false`. All other values will be evaluated as if they were `true`.
