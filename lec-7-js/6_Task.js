//Question

let url = 'https://codingblocks.com/dsa/cpp'

// make it like that
/* 
{
    'codingblocks':{
        'dsa':['cpp']
    }
}
*/


// Solution
// split the string
let x = url.split('/')
// console.log(x);


let courseName = x.pop() // Extract the last element as course name
let courseCategory = x.pop()
let companyDomain = x.pop()
let companyName = companyDomain.split('.').shift() // Extract the company name from the domain



// console.log(courseName); // Outputs: cpp
// console.log(courseCategory); // Outputs: dsa
// console.log(companyDomain); // Outputs: codingblocks.com
// console.log(companyName); // Outputs: codingblocks
// console.log();

let obj = {
    // 'codingblocks':{
    //     "dsa":['java', 'dsa']
    // }
}

if (!obj[companyName]) {
    obj[companyName] = {}
}

// console.log(obj); // Outputs the object with company name as key


// Check if the course category exists for the company
if (!obj[companyName][courseCategory]) {
    obj[companyName][courseCategory] = [courseName]
}
else{ // If the course category already exists, push the course name into the array
    obj[companyName][courseCategory].push(courseName)
}


console.log(obj);