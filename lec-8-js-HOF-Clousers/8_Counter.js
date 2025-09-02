function counter(){
    let count = 0; // Private variable

    return function() {
        count++; // Increment the count
        return count // Log the current count
    };
}

let newCounter = counter(); // Create a new counter instance
console.log(newCounter()); // Output: 1
console.log(newCounter()); // Output: 2
console.log(newCounter()); // Output: 3
console.log(newCounter()); // Output: 4

let anotherCounter = counter(); // Create another counter instance
console.log(anotherCounter()); // Output: 1 (independent count)
console.log(anotherCounter()); // Output: 2
console.log(newCounter()); // Output: 5 (newCounter continues from its own count)
console.log(anotherCounter()); // Output: 3 (anotherCounter continues from its own count
