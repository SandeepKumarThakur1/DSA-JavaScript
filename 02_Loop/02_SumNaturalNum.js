// Sum of n natural numbers and factorial of Number
//  1,2,3,4,5...

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
      var sum = 0;
      for (let i = 1; i <= ans; i++) {
        // console.log(i)
        sum = sum + i; // sum += i
        console.log(i);
      }
      console.log(sum);
    } else {
      console.log("should be +ve and more then 0");
    }
  }
}
