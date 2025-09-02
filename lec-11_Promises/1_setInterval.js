// setInterval: This function is used to repeatedly call a function 
// at specified intervals (in milliseconds).
// It continues until it is stopped using clearInterval.

let x = setInterval(()=>{
    console.log("This message will be logged every 2 seconds");
},2000); // 2000 milliseconds = 2 seconds

// To stop the interval, you can use clearInterval
setTimeout(() => {
    clearInterval(x)
}, 3000);