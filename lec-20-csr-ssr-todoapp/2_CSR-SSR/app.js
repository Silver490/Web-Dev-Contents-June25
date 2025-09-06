const express = require("express");
const path = require("path");
const app = express();
const PORT = 4444;

app.set("view engine", "hbs");

// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


app.get("/", (req,res) => {
    // sending index file to the client
    res.render("index", {
        title: "Todo App",
        arr: ["Task 1", "Task 2", "Task 3"]
    });
});









app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});
