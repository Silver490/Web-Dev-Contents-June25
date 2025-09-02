let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000,"P1 Completed"); // resolve ke argument me "P1 Completed" pass kiya
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000,"P2 Completed"); // resolve ke argument me "P2 Completed" pass kiya
})


// Promise.all ---> returns an array of results from all promises when they all resolve.
// If any promise rejects, it will reject with that reason.
Promise.all([p1, p2])
    .then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    })