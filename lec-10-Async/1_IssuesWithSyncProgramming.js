/*   **Synchonus programming** 
->sequential execution

JS is single-threaded
->one thing at a time
->synchronously

->To do asynchronous code
1. setTimeOut
2. setInterval

Syntax:
setTimeOut( argument, miliseconds)

Need for async programming
->when a task is occupying the thread then no forther action will be possible



*/

console.log(new Date().getTime()); // --->1752926617612 (time spent from 1st Jan 1970 to untill now)

function waitASec(){
    let prevTime = new Date().getTime();

    while(new Date().getTime() - prevTime < 1000){

    }
}

function waitNSec(n){
    for (let i = 0; i < n; i++) {
        waitASec();
        
    }
}

waitNSec(5)
console.log("HEllo world");