const math = require('./math')
const mathClass = require('./math_class');

console.log(math.add(5,6));
console.log(mathClass.sub(5,6));


// only for non static methods we need to create object
let obj = new mathClass();
console.log(obj.sub(5,6));

