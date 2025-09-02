function outerFun(){
    let x = 10
    x++

    function innerFun(){
        x++
        function innerMostFun(){
            x++
            console.log(x); // accessing x from outerFun's scope
        }
        return innerMostFun; // returning the innermost function
    }
    return innerFun; // returning the inner function
}

let genFun1 = outerFun(); // fn is now the inner function , closure: { x = 11 } is created here ; 
// getFun1 = innerFun , x =11
let fun1 = genFun1(); // fun1 is now the innermost function, closure: { x = 11 } is created here
// fun1 = innerMostFun , x=12
let fun2 = genFun1(); // fun2 is now the innermost function, closure: { x = 11 } is created here
// fun2 = innerMostFun , x=13

fun1(); // innerMostFun() , x = 14
fun1(); // innerMostFun() , x = 15

fun2(); // innerMostFun() , x = 16
fun2(); // innerMostFun() , x = 17

let genFun2 = outerFun(); // genFun2 is now the inner function , closure: { x = 11 } is created here
// getFun2 = innerFun , x = 11
let fun3 = genFun2(); // fun3 is now the innermost function,
// fun3 = innerMostFun , x = 12

fun3() // innerMostFun() , x = 13
fun3() // innerMostFun() , x = 14

fun2() // innerMostFun() , x = 18
fun1() // innerMostFun() , x = 19