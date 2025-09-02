/* Default Binding:
Default binding in JavaScript refers to the situation where a function is called without any context (not as a method of an object, and not using call, apply, or bind, and not with new).
In this case, this inside the function refers to the global object (window in browsers, global in Node.js).
In strict mode, this will be undefined
*/


function outer(){
    console.log("outer", this);

    function inner() {
        console.log("inner",this);
    }

    inner(); // 'this' here refers to the global object (window in browsers)
}

outer(); // 'this' in outer refers to the global object (window in browsers)


