// Math Functions
console.log(Math.round(24.4));
console.log(Math.ceil(24.4));
console.log(Math.floor(24.4)); 
console.log(Math.trunc(24.456)); // Remove the decimal part
console.log(Math.pow(2,3)); // 2^3
console.log(Math.sqrt(36));
console.log(Math.cbrt(525)); // Returns the cube root of number.
console.log(Math.abs(-55)); // Returns the positive value.
console.log(Math.max(45,25,65));
console.log(Math.min(45,25,65));
console.log(Math.random()); // Return 0 to 1 value
console.log(Math.floor(Math.random() * 10 + 1));

// After decimal return 2 digits
let a = 45.451245
console.log(Number(a.toFixed(2)))