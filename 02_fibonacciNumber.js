// Fibonacci Number
// Fibonacci Series -> 0,1,1,2,3,5,8,13,21,34,55,89,144,233...

const fibonacci = (n) => {
    let arr = [0,1]
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
    }
    return arr
}
const res = fibonacci(5)
console.log(res)