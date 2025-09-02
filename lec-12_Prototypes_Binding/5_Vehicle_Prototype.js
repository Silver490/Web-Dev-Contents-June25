function Vehicle(){

}

function Car(){

}

function Bike(){
}

Car.prototype = Object.create(Vehicle.prototype);
Bike.prototype = Object.create(Vehicle.prototype)

// .prototyps is the prorperty of the constructor function
// car.prototype is the prototype of the Car constructor function
// car.prototype is an object which has has a key 
// This checks if the prototype of Car is Vehicle
console.log(Car.prototype.__proto__ === Vehicle.prototype); // true


// this chekcs is the prototype of Vehicle is Object 
console.log(Car.prototype.__proto__.__proto__ === Vehicle.prototype.__proto__); // true
