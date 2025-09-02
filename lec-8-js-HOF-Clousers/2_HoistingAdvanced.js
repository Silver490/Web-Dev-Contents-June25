hello()

var hello = function() {
    console.log("Hello World!");
}

// hoisting does not apply to function expressions
// function expressions are not hoisted, so you cannot call them before they are defined
// this will throw an error: hello is not a function
// hello(); // Uncaught TypeError: hello is not a function

/** thats how hoisting works here
var hello;
hello()

function() {
    console.log("Hello World!");
}
*/
