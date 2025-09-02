// Fetch

let btn = document.querySelector('button');

let URL = 'https://meowfacts.herokuapp.com';


function loadData(arr){
    let ul = document.querySelector('.facts')
    ul.innerHTML = "";
    arr.forEach(d => {
        let li = document.createElement('li');
        li.innerText = d
        ul.appendChild(li)
    });
}

function getData(URL){
fetch(URL)
    .then(res=>{
        return res.json()
    })
    .then(({data})=>{
        console.log(data)
        loadData(data)
    })
    .catch(err=>{
        console.log(err)
    })

}

// getData(URL)

btn.addEventListener('click',()=>{
    getData(URL)
})