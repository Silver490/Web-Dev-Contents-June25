/*  Leetcode Question
2620. Counter
Easy
Given an integer n, return a counter function. This counter function
 initially returns n and then returns 1 more than the previous 
 value every subsequent time it is called (n, n + 1, n + 2, etc).
*/

let createCounter = function(n){
    let count  = n;
    return function(){
        count++;
        return count;
    }
}

const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());



// Revision of Closure
// A closure is a function that remembers its outer variables and can access them.

function outer(){
    const a = 10;
    function inner(b){
        const sum = a + b
        return sum;
    }
    return inner
}

const ans = outer()
console.log(ans(5));