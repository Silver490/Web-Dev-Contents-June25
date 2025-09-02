/*              **new Keyword**  
New keyword binding occurs when you use the new keyword 
to create an object from a constructor function in JavaScript.

When a function is called with new, JavaScript does the following:

Creates a new empty object.
Sets this inside the constructor to that new object.
Links the new object to the constructor’s prototype.
Returns the new object.


*/
// Example:

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let p = new Person("John", 25); // 'this' inside Person refers to the new object 'p'
console.log(p); // { name: 'John' }

let p1 = new Person("Jane", 23); // 'this' inside Person refers to the new object 'p1'
console.log(p1);
