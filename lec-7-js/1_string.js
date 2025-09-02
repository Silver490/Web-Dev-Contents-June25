'use strict' // Use strict mode for better error checking
let x = 'hello'
console.log(x);

for(let i = 0; i<x.length; i++){
    console.log(x[i]);
}

x = 'hello world learning string'
let indx = x.indexOf('learning');
console.log(indx); // Outputs the index of 'learning' in the string


let ans = ""
for(let i = 0; i<x.length; i++){
    ans += x[i]+' ';
}
console.log(ans); // Outputs the string with spaces between each character