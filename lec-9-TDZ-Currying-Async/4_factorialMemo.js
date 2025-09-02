    // memoize is a higher-order function that takes a function 'fn' 
// and returns a memoized version of it


function memoize(fn) {
    let cache = {}; // cache object to store previously computed results

    // Return a new function that checks cache before computing
    return function (n) {
        if (cache[n]) return cache[n]; // Return cached result if available
        let ans = fn(n); // fn = factorial , Compute result if not cached
        cache[n] = ans; // Store result in cache
        return ans;
    };
}



// factorial function calculates factorial of n
function factorial(n) {
    console.log("Calculating Fact of", n); // Log when calculation happens
    let ans = 1;
    // Loop from 1 to n-1 (should be 1 to n for correct factorial)
    for (i = 1; i <= n; i++) ans *= i;
    return ans;
}


// Create a memoized version of factorial
// calling memoize and passing factorial fun as arguments
let memoFactorial = memoize(factorial); 

// Test memoized factorial
console.log(memoFactorial(5)); // Calculates and caches factorial of 5
console.log(memoFactorial(5)); // Returns cached result
console.log(memoFactorial(6)); // Calculates and caches factorial of 6

