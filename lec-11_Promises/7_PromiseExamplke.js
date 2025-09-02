
function success(){
    console.log("Promise resolved!");
}

function failure(){
    console.log("Promise was rejected!");
}


let p = new Promise((res,rej)=>{
    setTimeout(() => {
        console.log("RAN resolve function");
        res()
    }, 2000);
})



// p.then(success,failure)
// or 
// .then baad me chala hai
setTimeout(() => {
    console.log("RAN then function");
    p.then(success).catch(failure);
}, 4000);
