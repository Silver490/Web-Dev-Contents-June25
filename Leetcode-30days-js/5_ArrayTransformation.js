/*Lettcode JS Problem: 5

2635. Apply Transform Over Each Element in Array
Easy
premium lock icon
Companies
Hint
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

Example 1:

Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one.

*/



// build in map function
let arr= [1,2,3];
let ans = arr.map(d=> d*2)

console.log(ans);

let arr1= [1,2,3,4,5,6,7,8,9];
let ans1 = arr1.map((d,i)=> d+i)
let even = arr1.map(d=> d%2==0)

console.log(even);
console.log(ans1);