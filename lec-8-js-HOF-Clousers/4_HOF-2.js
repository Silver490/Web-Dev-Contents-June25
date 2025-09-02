function returnFn() {
    function hello() {
        console.log("hello");
    }

    return hello; // returning the function hello
}

let newFun = returnFn(); 
// newFun is now a function
// newFun has now Hello function

newFun(); 
// calling newFun will call the hello function, which was returned by returnFn