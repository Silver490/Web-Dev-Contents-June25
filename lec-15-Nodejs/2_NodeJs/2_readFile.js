const {readFile} = require('node:fs/promises')
const path = require('path')

let fileName = 'names.txt'

let filePath = path.join(__dirname, 'data', fileName)


readFile(filePath,{
    encoding: 'utf8', // helps to convert buffer into string
})
    .then(data=>{
        console.log(data);
    })
    .catch(err=>{
        console.log(err);
    })


readFile(filePath)
    .then(data=>{
        console.log(data.toString); // toString convert buffer to string
    })
    .catch(err=>{
        console.log(err);
    })