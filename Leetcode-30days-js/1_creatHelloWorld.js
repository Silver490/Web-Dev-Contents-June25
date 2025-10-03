// Different ways to create functions in JavaScript

// 1. Nornal Function
function add(a, b) {
    return a + b;
}

console.log("Normal Function:", add(2, 3)); // Output 5



// 2. Annonymous Function : Function without a name put into a variable
let sum = function (a, b) {
    return a + b;
};
console.log("Annonymous Function:", sum(5, 7)); // Output 12



// 3. IIFE (Immediately Invoked Function Expression)
//runs immediately after it's defined, no need to call it separately

const f = ((a, b) => {
    return a + b;
})(4, 6);

console.log("IIFE Function:",f); // Output 10




// 4. Arrow Function : A shorter syntax for writing functions
let s = (a, b) => {
    return a + b;
};
console.log("Arrow Function:", s(8, 12)); // Output 20


// 5. Function withim a Function
function outerFunction(){
    return function innerFunction(a, b){
        return a + b;
    }

    // return innerFunction;
}

const innerFunc = outerFunction();
console.log("Function within a Function:", innerFunc(10, 15)); // Output 25


// rest operator
function add1(a, b, ...args) {
    return a + b;
}

console.log("Normal Function with rest opertor:", add1(2, 3, 7)); // Output 5





/******************************************************************************** */

// LeetCode Problem: 1. Write a function createHelloWorld.
// It should return a new function that always returns "Hello World".

var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
        
    }
};

console.log(createHelloWorld()()); // Output "Hello World"