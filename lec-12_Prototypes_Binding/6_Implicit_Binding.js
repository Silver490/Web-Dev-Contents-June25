/* ***Binding***
**Binding--> the process of associating a function with a context
**Context--> the space or environment in which a function is executed
'this' points to the current context
'this' refers to the object that is executing the current function 
in browsers, 'this' refers to the global object (window)

*/

// 4 types of bindings
// 1. Default Binding     2. Implicit Binding    3. Explicit Binding     4. New Binding 


// ***Default Binding***
// In default binding, 'this' refers to the global object (window in browsers)
// example:
function showThis() {
    console.log(this);
}







// **Implicit Binding**: in this binding, 'this' refers to the object that is calling the function
// It is the most common type of binding in JavaScript.

let obj = {
    a: 10,
    hello: function() {
        console.log(this);
        this.b=20 // here "this" refers to obj itself
    }
}

obj.hello(); // { a: 10, hello: [Function: hello] }
console.log(obj);