// Function Currying
// Currying transforms a function so it can be called with arguments one at a time.

// The sum function uses currying to accumulate values across chained calls
function sum(x) {
    if (!x) return 0; // If no argument, return 0
    let ans = x; // Initialize ans with first argument

    // Helper function forms closure over 'ans'
    return function helper(y) {
        // CLOSURE: {ans}
        if (!y) return ans; // If no argument, return accumulated sum
        ans += y; // Add argument to ans
        return helper; // Return itself for further chaining
    };
}

// Usage examples:
console.log(sum()); // 0
console.log(sum(1)()); // 1
console.log(sum(1)(2)()); // 3
console.log(sum(1)(2)(3)()); // 6
console.log(sum(1)(2)(3)(4)()); // 10
