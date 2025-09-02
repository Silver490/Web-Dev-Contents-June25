//Making a counter function that can be used to increment and decrement a value
// with the help of closures

function counter() {
    let count = 10;

    return {
        increment: function () {
            count++;
            console.log(count);
            // return count;
        },

        decrement: function () {
            count--;
            console.log(count);
            // return count;
        },
        getCount:function(){
            console.log(count);
            // return count;

        }
        
    };
}

// counter()
let newCounter = counter()

newCounter.increment();
newCounter.increment();
newCounter.increment();
newCounter.increment();
newCounter.getCount()