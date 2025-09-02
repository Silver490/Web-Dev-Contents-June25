/* Callback : function calling another function inside of it passed 
as an argument to do the rest of the task

A callback function is a function that is passed 
as an argument to another function and is executed 
after a certain event or operation completes. 
In JavaScript, callbacks are commonly used for handling 
asynchronous tasks, such as reading files, 
making API requests, or responding to user actions.  
*/



function buyingVeg(cb){ //-----> cb == makingFood
    console.log("Sabji lene gaye");
    setTimeout(function(){
        console.log("Sabji le aaye");
        cb(doingDishes) //----> makingFood(doingDoing)
    },3000)
}

function makingFood(cb){
    console.log("Khana banana start");
    setTimeout(function(){
        console.log("Khnana ban gaya");
        cb()
    },3000)
}

function doingDishes(){
    console.log("bartan dhona start");
    setTimeout(function(){
        console.log("bartan dhul gaye");
    },3000)
}

buyingVeg(makingFood)