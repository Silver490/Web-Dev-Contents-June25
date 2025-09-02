function Car(){
    console.log("i am car");
}

Car()

console.log(Car.prototype);


// This checks if the prototype of Car is Object
console.log(Car.prototype.__proto__ == Object.prototype); 