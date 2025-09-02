function fun(){
    console.log("HELLO");

}

fun.a = "I am of fun"

fun()

console.log(fun.a);


/// prototype

console.log(fun.__proto__); // This will show the prototype of the function object
console.log(fun.__proto__ === Function.prototype); // This will check if the prototype is Function

// create karne ka consertructor function uske prototype me hota hai