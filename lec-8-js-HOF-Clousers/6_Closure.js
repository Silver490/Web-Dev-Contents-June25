// Closure:
// inner function apne outer(parent) ka sab kuchh  sath le kar aata hai in an anonymous object, called closure

function outerFn() {
    let x = 10;
    x++
    function innerFn(){
        x++;
        console.log(x); // accessing x from outerFn's scope
    }

    return innerFn; // returning the inner function
}

let fn = outerFn(); // fn is now the inner function , closure: { x = 11 } is created here
fn(); // calling fn will print 12, because it has access to x from outerFn
fn(); //output: 13, because x is incremented each time fn is called
fn(); //output: 14, because x is incremented each time fn is called