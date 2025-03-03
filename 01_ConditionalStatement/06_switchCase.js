// Switch Case

// Switch case is a conditional statement that evaluates an expression and executes the corresponding case.
// It is used when we have multiple conditions to check.

// Difference between if-else and switch-case:
// If-else is used when we have to check multiple conditions.
// Switch-case is used when we have to check only one condition.

// Example:

let day = 3;

switch (day) {
    case 1:
        console.log("Sunday"); // down fall through
        
    case 2:
        console.log("Monday");
        break;
        
    case 3:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid Day");
}