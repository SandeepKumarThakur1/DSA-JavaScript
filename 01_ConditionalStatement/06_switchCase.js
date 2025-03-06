// Switch Case

// Switch case is a conditional statement that evaluates an expression and executes the corresponding case.
// It is used when we have multiple conditions to check.

// Difference between if-else and switch-case:
// If-else is used when we have to check multiple conditions.
// Switch-case is used when we have to check only one condition.

// Example:

let day = 1;

switch (day) {
  case 1:
    console.log("Sunday"); // fall through condition
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;

  default:
    console.log("Invalid Day");
}

let month = 3;
switch (month) {
  case 1:
  case 2:
  case 3:
    console.log("Jan");
    break;

  default:
    console.log("Wrong Input");
}

switch (true) {
  case 19 < 6:
    console.log("Hello");
    break;
  case 19 > 8:
    console.log("hey");
    break;

  default:
    console.log("Invalid");
}

let num = 0.2 + 0.8;
switch (num) {
  case 0.4:
    console.log("hello");
    break;
  case 0.5:
    console.log("hey");
    break;

  default:
    console.log("namaste");
}
