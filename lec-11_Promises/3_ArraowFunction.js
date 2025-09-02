function HELLO() {
    // This function will be hoisted
    console.log("Hello World");
}


let hello = function () {
    // this will not be hoisted
    console.log("Hello from a function expression");
};



// 2. Arrow function syntax
let cb = () => {
    console.log("Hello from the Arrow Function");
};

cb(); // Calling the arrow function

// 3. Arraow function advantages
// - More concise syntax
// - No binding of 'this', which can be useful in certain contexts
// - Cannot be used as constructors (no 'new' keyword)


function sum(a, b) {
    return a + b; // This function will return the sum of a and b
}

let add = (a, b) => a + b; // by  default it returns the value
console.log(add(10, 20));
