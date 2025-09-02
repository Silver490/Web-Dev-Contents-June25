const {unlink} = require('node:fs/promises')
const fs = require('node:fs/promises')
const path = require('path')

let fileName = 'names.txt'

let filePath = path.join(__dirname, 'data', fileName)

unlink(filePath) // to delet the file
    .then(msg=>{
        console.log("File Deleted Successfully");
    })
    .catch(err=>{
        console.log(err);
    })


// fs.unlink(filePath) // to delet the file
//     .then(msg=>{
//         console.log("File Deleted Successfully");
//     })
//     .catch(err=>{
//         console.log(err);
//     })


console.log(unlink(filePath));