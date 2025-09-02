//What is a Promise?
// A Promise is an object that represents the eventual completion or 
// failure of an asynchronous operation.

// It allows you to write asynchronous code in a more manageable way,
// avoiding the "callback hell" that can occur with nested callbacks.
// A Promise can be in one of three states:
// 1. Pending: The initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully.
// 3. Rejected: The operation failed.



// The Promise constructor takes a function with two parameters:
// res (resolve) and rej (reject).
// If the operation is successful, you call res() to fulfill the promise.
// If it fails, you call rej() to reject the promise.
// You can handle the result of a promise using the .then() method.
// The .then() method takes two optional arguments:
// 1. A success callback that is called when the promise is fulfilled.
// 2. A failure callback that is called when the promise is rejected.
// You can also use .catch() to handle rejections separately.
// Example of using .then() and .catch() with a promise


function success(){
    console.log("Promise resolved!");
}

function failure(){
    console.log("Promise was rejected!");
}


let p = new Promise((res,rej)=>{
    setTimeout(() => {
        res()
    }, 2000);
})



// p.then(success,failure)
// or 
p.then(success).catch(failure);
// this means that if the promise is resolved,
// the success function will be called, and if it is rejected,
// the failure function will be called.