let button = document.querySelector('button')

let counterVal = document.querySelector("#counterVal")
let cnt = 0

// 1. onclick event
// btn.onclick = ()=>{
//     cnt++
//     counterVal.innerText = cnt
//     // alert('Button clicked!');
// }



// keyboard events
//1. Event keypress event
let body = document.querySelector('body')

// body.addEventListener('keypress',ev =>{
//     console.log(ev.key);
// })

// 2. keydown event
// body.addEventListener('keydown',ev=>{
//     console.log(ev.key);
// })


// 3. keyup event
// body.addEventListener('keyup',ev=>{
//     console.log(ev.key);
// })


//onkeydown event on input
// body.onkeydown = (ev)=>{
//     console.log(ev.key);
//     let p = document.createElement('p')
//     p.innerText = ev.key + " was pressed"
//     p.style.backgroundColor = "blanchedalmond"
//     p.style.padding = "10px"
//     p.style.margin = "10px"
//     p.style.borderRadius = "5px"
//     document.body.appendChild(p)
// }


button.addEventListener('click',()=>{
    console.log("Button Clicked");

    counterVal.innerText = +counterVal.innerText +2
})

let ironman = document.querySelector('.ironman')

// double click event
ironman.addEventListener('dblclick',(ev)=>{
    console.log("Ironman was double clicked");
})

let box = document.querySelector('.box')

//mouseover event
// box.addEventListener('mouseenter',()=>{
//     console.log("Mouse entered the box");
// })

// box.addEventListener('mouseleave',()=>{
//     console.log("Mouse left the box");
// })

let boxImage = document.querySelector('.box-image')
box.addEventListener('mouseenter',()=>{
    console.log("Mouse entered the image");
    boxImage.classList.remove('grayscale')
})
box.addEventListener('mouseleave',()=>{
    console.log("Mouse left the image");
    boxImage.classList.add('grayscale')
})