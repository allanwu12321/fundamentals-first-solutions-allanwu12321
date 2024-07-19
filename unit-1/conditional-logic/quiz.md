# Conditional Logic Quiz

1. What is a "conditional statement" used for in JavaScript?
   It is used to help make you make decisions in code. It lets you run one block of code if a condition is true, or another if it is false.

2. What 2 parts are an `if` statement made up of? List and describe both.
   It is made up of the if condition, which contains a value or expression that evaluates to a boolean value and the code block, which contains code to run depending on if the condition is true or false.

3. What is the purpose of an `else` clause in an `if` statement?
   the `else` clause acts as a "catch-all" or default. If all the above conditions are false, the code in the `else` block will run.

4. Which built-in function should we use to get input from the user?
   `prompt()`

5. Which operator is the logical `and` operator and what purpose does it serve?
   The `&&` means both conditions must be met in order to be true. If one or both conditions are `false`, the entire expression will be `false`.

6. Which operator is the logical `or` operator and what purpose does it serve?
   The `||` means at least one condition must be met in order to be true. If one condition is `true`, then the entire expression will be `true`.

#### Truth Table Exercise

Fill in the missing values in this truth table by typing the expected boolean value to the corresponding number below:

> **Note:** Operations in parentheses have priority, so they should be evaluated first, and then the final result should come from combining the inner results.

| p       | q       | !p      | p OR q | p AND q | (!p) OR (p AND q) |
| ------- | ------- | ------- | ------ | ------- | ----------------- |
| `true`  | `true`  | **1**   | `true` | `true`  | **5**             |
| `true`  | `false` | `false` | **2**  | `false` | **6**             |
| `false` | `true`  | `true`  | `true` | **4**   | **7**             |
| `false` | `false` | `true`  | **3**  | `false` | **8**             |

Fill in the boolean values below.

1. When `p = true` and `q = true`, `!p` should be:
   false

2. When `p = true` and `q = false`, `p OR q` should be:
   true

3. When `p = false` and `q = false`, `p OR q` should be:
   false

4. When `p = false` and `q = true`, `p AND q` should be:
   false

5. When `p = true` and `q = true`, `(!p) OR (p AND q)` should be:
   true

6. When `p = true` and `q = false`, `(!p) OR (p AND q)` should be:
   false

7. When `p = false` and `q = true`, `(!p) OR (p AND q)` should be:
   true

8. When `p = false` and `q = false`, `(!p) OR (p AND q)` should be:
   true
