// Factors of Number

let pr = prompt("Enter Number..");

if (pr === null) {
  console.log("Canceled");
} else {
  let ans = Number(pr);

  if (isNaN(ans)) {
    console.log("Invalid Input");
  } else {
    if (ans > 0) {
      // console.log("is positive");
      var fact = 1;
      for (let i = 1; i <= ans; i++) {
        // console.log(i)
        fact = fact * i; // fact += i
        console.log(i);
      }
      console.log(fact);
    } else {
      console.log("should be +ve and more then 0");
    }
  }
}
