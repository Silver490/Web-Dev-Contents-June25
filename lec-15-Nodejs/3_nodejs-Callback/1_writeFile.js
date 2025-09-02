const { writeFile } = require("node:fs");
const path = require("path");
let fileName = "file.txt";

let filePath = path.join(__dirname, "data", fileName);

writeFile(filePath, "Hello writing Data",(err)=>{
    if(err) throw err;
    console.log("The File has been written");
})