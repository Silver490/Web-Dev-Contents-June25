let button = document.querySelector('button')

const firstCallBack = ()=>{
    console.log("First Clallbak");

}
const secondCallBack = ()=>{
    console.log("First Clallbak");
}

// button.addEventListener('click', firstCallBack)
// button.removeEventListener('click', secondCallBack)


button.onclick = ()=>{
    console.log("firstCallBack called");
}

button.onclick = ()=>{
    console.log("secondCallBack called");
}