let input = document.querySelector('input')

// 1. focus event
input.addEventListener('focus',ev=>{
    ev.target.classList.add('focus')
    console.log("Clicked on input");
})



// 2. blur event
input.addEventListener('blur',ev=>{
    ev.target.classList.remove('focus')
})


