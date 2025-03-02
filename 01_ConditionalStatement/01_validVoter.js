// Valid Voter

let age = 25;

if (isNaN(age)) {
  console.log("Wrong Input");
} else if (age >= 18) {
  console.log("You are valid Voter.");
} else {
  console.log("You are not valid Voter.");
}

// Notes:-

// NaN === NaN -> false
// isNaN(NaN) -> true
