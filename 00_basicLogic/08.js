// Unary Operator :-> [ ++, -- ]

// Q no 1 : 
let  i = 11;
i = i++ + ++i; // i = 11 + 13
console.log("i = " + i) // 24

// Q no 2 :
let a = 11 , b = 22;
let c = a + b + a++ + b++ + ++a + ++b; // c  = 11 + 22 + 11 + 22 + 13 + 24
console.log("a = " + a); // 13
console.log("b = " + b); // 24
console.log("c = " + c); // 103

// Q no 3 :
let abc = true; // In Js True value is 1 and false is 0;
abc++; 
console.log("abc = " + abc); // 2

// Q no 4 :
// let num = 11++; // Error -> Invalid left-hand side expression in postfix operation
// console.log(num)

