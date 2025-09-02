// Fetch

let btn = document.querySelector("button");

let URL = "https://meowfacts.herokuapp.com";

function loadData(arr) {
    let ul = document.querySelector(".facts");
    ul.innerHTML = "";
    arr.forEach((d) => {
        let li = document.createElement("li");
        li.innerText = d;
        ul.appendChild(li);
    });
}


async function getData(URL) {
    // async ko function ke aage lagate hai
    console.log("ASYN - AWAIT");
    try {
        let res = await fetch(URL);
        let { data } = await res.json();
        loadData(data);
    } catch (error) {
        alert("Something went wrong" + error.message);
    }
}

// getData(URL)

btn.addEventListener("click", () => {
    getData(URL);
});
