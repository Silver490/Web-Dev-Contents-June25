let h1 = document.getElementById('heading')
console.log(h1);

let p = document.getElementsByTagName('p')
console.log(p);

let allMovieItems = document.getElementsByClassName('movie')
console.log(allMovieItems);


let ul = document.querySelectorAll('ul')

// console.log(ul);
// console.log(ul.children);

let ulc = ul.children

// for(let i=0; i<ulc.lenght;i++){
//     console.log(ulc[i]);
// }


/// adding a new element

let li = document.createElement('li')
li.innerText = "Thor"

li.classList.add('movie')

ul.appendChild(li)

console.log(ul);