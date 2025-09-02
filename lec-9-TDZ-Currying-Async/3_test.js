/* --------------------------------------------------/
ECMASCRIPT (ES) ---> manages javascript
"VanillaJS"---> ES5


--->TDZ : Temporal dead zone
exucation phase(E.P)
Memory EP            Code Execution Phase

let is in TDZ , var is in Memory EP

/----------------------------------------------------*/

console.log(x);

var x = 10;

function hello(){
    console.log("Hello");
    var y = 20;
    console.log(y);
}

hello()
