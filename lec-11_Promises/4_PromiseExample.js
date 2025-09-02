let SabziLana = new Promise((res,rej)=>{
    let time = 11

    if(time >= 8 && time <= 13) res()
    else rej()
})

SabziLana
    .then(() => {
        console.log("sabzi mil gayi");
    })
    .catch(() => {
        console.log("sabzi nahi mili");
    })