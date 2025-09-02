let granfather = document.querySelector('.grandfather')
let father = document.querySelector('.after')
let son = document.querySelector('.son')



granfather.addEventListener('click',()=>{
    console.log("Grandfather clicked");
},false)
father.addEventListener('click',()=>{
    console.log("Father clicked");
},false)
child.addEventListener('click',()=>{
    console.log("Child clicked");
},true)