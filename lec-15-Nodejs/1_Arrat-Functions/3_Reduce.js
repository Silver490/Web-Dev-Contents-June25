// Reduce: it returns a single value of after performing a operation on an array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = arr.reduce((acc, value, index, a) => {
    // initially acc = 1 and value = 2 ,if acc is not initialized
    return acc + value;
});

console.log(sum);


let product = arr.reduce((acc, value, index, a) => {
    // initially acc = 1 and value = 2 ,if acc is not initialized
    return acc * value;
}, 1);

console.log(product);


let max = arr.reduce((acc,val)=>{
    // return acc > val ? acc : val
    if(acc>val) return acc
    else return val
})

console.log(max);


/* Library vs Framework:

Library:
A collection of functions and utilities you call when needed.
You control the flow of your code.
Example: jQuery, Lodash.

Framework:
Provides a structure and controls the flow of your application.
You fill in the details; the framework calls your code.
Example: React, Angular, Django
*/