const { writeFile } = require("node:fs/promises");
const path = require("path");
let fileName = "names.txt";

let filePath = path.join(__dirname, "data", fileName);

// writeFile is a function that returns a promise
writeFile(filePath, "Hello Jane", { encoding: "utf8", flag: "a" })
    .then((msg) => {
        console.log("File created successfully");
    })
    .catch((err) => {
        console.log(err);
    });

// flag : 'a' is used to append the content to the file
// flag : 'w' is used to overwrite the content of the file
// flag : 'r' is used to read the content of the file




// Microtask queue: setTimeOut , setIntervl
// Macrotask queue : promises
