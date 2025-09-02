//Higher Order Function: is a concept in JavaScript
// A function that takes another function as an argument or returns a function as its result

function callfn(fn){
    fn(); // simply argument me function lia and ussko call kiya
}

function hello(){
    console.log("Hello World!");
}

callfn(hello); // passing function as an argument
//output: Hello World!

callfn(hello());
// outpit: type error: fn is not a function
// because we are calling the function hello 
// and passing it's return value (undefined) to callfn
// fn is capturing the return value of hello, which is undefined
// and then trying to call it as a function, giving a type error
