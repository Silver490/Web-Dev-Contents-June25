function Car(name, price) {
    this.name = name;
    this.price = price;
}

Car.prototype.print = function (){
    console.log("Name", this.name);
    console.log("Price", this.price);
}


let Maruti = new Car("Breeza", 20);
let Honda = new Car("City", 10);


Maruti.print();
Honda.print();