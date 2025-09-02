// why are classes useful in javascript?

// Classes in JavaScript provide a way to create objects with shared properties and methods.
// They allow for better organization of code, encapsulation, and inheritance.

class Car {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    print(){ // we dont need to use function keyword here in classes
        console.log("Name",this.name);
        console.log("Price",this.price);
    }
}

let Maruti = new Car("Breeza", 20);
let Honda = new Car("City", 10);


Maruti.print();
Honda.print();

console.log(Car.prototype.__proto__ === Object.prototype);
// this means that the prototype of Car is an instance of Object, 
// which is the base object in JavaScript.