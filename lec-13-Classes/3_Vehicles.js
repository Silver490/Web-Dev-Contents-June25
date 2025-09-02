class Vehicle {
    constructor(company){
        console.log(this,"inside vehicle constructor");
        this.company = company;
    }
}

class Car extends Vehicle {
    constructor(name, price, company){
        super(company); // Call the constructor of the parent class Vehicle
        console.log(this,"inside car constructor");
        this.name = name
        this.price = price
    }

    print(){
        console.log("name", this.name);
        console.log("price", this.price);
        console.log("Company",this.company);
    }
}

let Maruti = new Car("Breeza", 20, "Maruti Suzuki");
let Honda = new Car('City',10, "Honda");


Maruti.print()
Honda.print()


console.log(Car.prototype.__proto__ == Vehicle.prototype);
// this mesns that the prototype of car is child of Vehicle prototype
console.log(Car.prototype.__proto__.__proto__ == Object.prototype);
// this means that the prototype of Vehicle is an instance of Object,
