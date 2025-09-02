function returnFn() {

    function hello() {
        console.log("hello");
    }

    return hello(); // it will print hello then return the undefined from hello function
}

let newFun = returnFn();
// newFun has now undefined value returned from hello function

newFun();
// output: typerror: hello is not a function
// because we are trying to call undefined as a function
// hello() is called inside returnFn, so "hello" is printed immediately.
// The return value of hello() is undefined, so newFun is undefined.
// Calling newFun() throws an error because undefined is not a function.