// Axios ---------> is a library to make API calls

let btn = document.querySelector("button");

let  MEOW_URL = "https://meowfacts.herokuapp.com";

function loadData(arr) {
    let ul = document.querySelector(".facts");
    ul.innerHTML = "";
    arr.forEach((d) => {
        let li = document.createElement("li");
        li.innerText = d;
        ul.appendChild(li);
    });
}

// async await is used with promises to relace then and catch

async function getData(MEOW_URL) {
    // async ko function ke aage lagate hai
    console.log("ASYN - AWAIT");
    try {
        let {data : {data}} = await axios.get(MEOW_URL); // destructure kiya data nikala fir destructure kiya and data nikala
        console.log(data);
        // data = data.data;
        loadData(data);
    } catch (error) {
        alert("Something went wrong" + error.message);
    }
}


btn.addEventListener("click", () => {
    getData(MEOW_URL);
});
