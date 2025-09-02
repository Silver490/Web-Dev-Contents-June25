const express = require("express");

const app = express();

const path = require('path');


app.get('/file.js', (req, res)=>{
    res.sendFile(path.join(__dirname, '/file.js'));
});


app.get('/style.css', (req, res)=>{
    res.sendFile(path.join(__dirname, '/style.css'));
});


app.get('/', (req, res)=>{
    // console.log(__dirname);
    res.sendFile(path.join(__dirname, '/index.html'));
})


app.listen(4444, () => {
    console.log("Server is running on http://localhost:4444");
});
