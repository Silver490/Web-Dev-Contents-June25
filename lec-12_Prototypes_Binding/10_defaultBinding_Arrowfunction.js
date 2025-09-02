function outer(){
    console.log("outer", this);

    let inner = ()=> {
        console.log("inner",this);
    }

    inner(); // 'this' here refers to the global object (window in browsers)
}


let person = {
    name: "John",
}

let person2 = {
    name: "Jane",
}


outer.call(person); // 'this' in outer refers to the global object (window in browsers)
