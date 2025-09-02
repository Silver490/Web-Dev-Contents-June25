// fibonacciMemoize.js
// This function returns a memoized version of the Fibonacci function

function fibonacci(n) {
    if(n<0) return undefined

    console.log("Calculating Fibonacci for:",n);
    let fib = [0, 1];
    for (i = 2; i <= n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib;
}


function memoize(fn){
    let cache = {}
    function memFib(n){
        if(cache[n]){
            // If the result is already cached, return it
            console.log("Returning from cache for:", n);
            return cache[n];
        }
        let ans = fn(n);
        cache[n] = ans
        return ans;
    }
    return memFib
}

let memoFibonacci = memoize(fibonacci)

console.log(memoFibonacci(-2));
console.log(memoFibonacci(3));
console.log(memoFibonacci(2));