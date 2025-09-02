let arr = [1, 2, 3, 4, 5];

// Shalow copy: when both arrays point to the same memory location
// Deep Copy: when both arrays point to different memory locations


// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) newArr.push(arr[i]);
// }

let newArr = arr.filter(function(value,index,a){
    return value%2==0
})

console.log(newArr);