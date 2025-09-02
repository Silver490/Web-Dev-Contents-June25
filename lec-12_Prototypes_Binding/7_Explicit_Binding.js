/* **Explicit Binding**
Explicit binding allows you to set the context of 'this' explicitly using methods like 
call, apply, or bind. This is useful when you want to control the context of a function call.
*/



let person = {
    name:'John',
    age: 30
}

let person2 = {
    name:'Jane',
    age: 25
}

function print(city, country){
    console.log(this);
    this.city = city; // 'this' points to the person object and using this we have added 'city' in it
    this.country = country; // 'this' points to the person object and using this we have added 'country' in it

}

// print.call(person) // print function will have now person as context
// print.apply(person2) // print function will have now person2 as context



//call and apply are used to call a function with a specific context
print.call(person, 'Delhi', 'India') // print function will have now person as context
console.log(person); // { name: 'John', age: 30, city: 'Delhi' }



//apply is similar to call, but it takes an array of arguments
print.apply(person2, ['Mumbai', 'India']) // print function will have now person2 as context
console.log(person2); // { name: 'Jane', age: 25, city: 'Mumbai' }


// Using bind to create a new function with a specific context
// let f = print.bind(person, "Bangalore", "India"); // this will store 


let f = print.bind(person, "Bangalore", "India");
f()
/* Explaination 
creates a new function f where:

The value of 'this' inside print is explicitly set to person.
The arguments "Bangalore" and "India" are pre-set for the parameters city and country.
When you call f(), it runs print with this as person, and passes "Bangalore" and "India" 
as arguments.
This is called explicit binding using bind. The original print function is not called immediately;
instead, bind returns a new function with the specified context and arguments. */

console.log(person); // { name: 'John', age: 30, city: 'Bangalore', country: 'India' }