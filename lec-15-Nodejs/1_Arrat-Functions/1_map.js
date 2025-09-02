let arr = [1,4,2,7,6]


//MAP
// it gives a new array with the results of applying the provided function on every element in this array.

let newArr = arr.map((value,index,arr)=>{
    console.log("Value",value,"Index",index,"Arr",arr);

    return value*value
})

let newArr2 = arr.map(v=>v*v)

console.log(newArr2);