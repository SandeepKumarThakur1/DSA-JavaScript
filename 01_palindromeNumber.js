// Palindrome Number
// An Integer is a palindrome when it reads the same forward and backward.

// Input a = 121 ------>>>> Output: true
// Input a = 10  ------>>>> Output: false


const isPalindrome = (a) => {
    return a < 0 ? false : a === +a.toString().split("").reverse().join("");
    // console.log(+"121") ==> + convert into a Number.

}
// 121 => "121" => ["1","2","1"] => ["1","2","1"] => 121

const res = isPalindrome(121)
console.log(res)