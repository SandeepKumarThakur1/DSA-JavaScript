// Ternary Operator in JavaScript
// Ternary Operator is a shorthand for if-else statement. It is also known as conditional operator.

// Syntax:
// condition ? expression1 : expression2;

// If the condition is true, the ternary operator returns the value of expression1; otherwise, it returns the value of expression2.

// Example:
let a = 10;
let b = 20; 
let result = (a > b) ? "a is greater than b" : "a is less than b";
console.log(result); // a is less than b

// Method 2
console.log((a > b ? "a is greater than b" : "a is less than b"))

// Nested Ternary Operator
// We can also use nested ternary operators in JavaScript.

// Example:
let num1 = 10;
let num2 = 20;
let num3 = 30;
let result2 = (num1 > num2) ? "num1 is greater than num2" : (num2 > num3) ? "num2 is greater than num3" : "num3 is greater than num2";
console.log(result2); // num3 is greater than num2