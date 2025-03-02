// Swap two variables via 3 methods

let a = 20;
let b = 10;
let c;

// Method 1
// [a,b] = [b,a]

// Method 2
// c = a;
// a = b;
// b = c;

// Method 3
a = a + b;
b = a - b;
a = a - b;

console.log(a)
console.log(b)