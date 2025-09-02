/* LeetCode Problem: 3
2704. To Be Or Not To Be

Write a function expect that helps developers test their code. 
It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other.
If they are not equal, it should throw an error "Not Equal".

notToBe(val) accepts another value and returns true if the two values !== each other. 
If they are equal, it should throw an error "Equal".
*/



//revison of object
let obj = {
    name: "Arjun",
    age: 20,
    greet() {
        console.log("Hello, " + this.name);
    },
};

console.log(obj.name);
obj.greet();

//object within a function

function cal(val) {
    return {
        sum(val1) {
           return  val + val1;
        },
        sub(val1){
            return  val - val1;
        }
    }
    // return obj;
}

console.log(cal(5).sum(3));
console.log(cal(10).sub(4));


// LeetCode Problem: 3 Solution
var expect = function(val) {
    return {
        toBe(val1){
            if(val===val1) return true
            else return "Not Equal"
        },
        notToBe(val1){
            if(val!==val1) return true
            else return "Equal"
        }
    }
};


console.log(expect(5).toBe(5)) // true
console.log(expect(5).notToBe(5)) // throws "Not Equal"

