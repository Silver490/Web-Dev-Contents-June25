// function is a data type in JavaScript
// that's why it can be assigned to a variable
// we have to use the variable name to call the function

let sum = function (a, b) {
    return a + b;
};
console.log(sum(5, 3)); // Outputs: 8



/*
if done like this, it will not work
let sum = function add(a, b){
        return a+b; 
    }
console.log(add(5, 3)); // Outputs: ReferenceError: add is not defined
*/
