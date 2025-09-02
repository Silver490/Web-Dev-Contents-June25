class Person {
    #secret = "My secret";

    constructor (name){
        this.name = name;
    }

    getSecret(){
        return this.#secret
    }

    get getName(){
        return this.name
    }

    set setName(newName){
        this.name = newName;
    }
}

let p = new Person("John");
// console.log(p.#secret); // This will throw an error because #secret is private
console.log(p.getSecret());

console.log(p);
console.log(p.getName);
p.setName = "Doe";
console.log(p.getName);
console.log(p);