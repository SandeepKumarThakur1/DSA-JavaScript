// Math Problems:

// Q no 1 : Calculate area and perimeter of rectangle
let l = 5;
let b = 10;

let area = l * b;
console.log("Area of Rectangle : " + area);

let perimeter = 2 * (l + b);
console.log("Area of Perimeter : " + perimeter);

// Q no 2 : Generate OTP
console.log(Math.trunc(Math.random() * 9000 + 1000));

// Q no 3 : Area of Triangle by heron's Formula
let x = 5;
let y = 4;
let z = 7;

let s = (x + y + z) / 2;
console.log("The value of S : " + s);
console.log(Math.floor(Math.sqrt(s * (s - x) * (s - y) * (s - z))));

// Q no 4 : Circumference of Circle
let r = 12;
console.log(2 * (Math.PI * r).toFixed(2));
