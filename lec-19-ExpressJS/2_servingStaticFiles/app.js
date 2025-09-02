const express = require("express");
const app = express();
const path = require("path");


// Middleware to serve static files
// app.use('/',express.static(path.join(__dirname, "static")));
app.use(express.static(path.join(__dirname, "static"))); // by default it will look for '/' route


// this router will not work now as static middleware will take the control
app.get("/", (req, res) => {
    console.log("Hello World");;
});


app.listen(4444, () => {
    console.log("Server is running on http://localhost:4444");
});
