let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000,"P1 Completed"); // resolve ke argument me "P1 Completed" pass kiya
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000,"P2 Completed");
})


// Promise.race ---> returns the result of the first promise that resolves or rejects.
Promise.race([p1, p2])
    .then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    })