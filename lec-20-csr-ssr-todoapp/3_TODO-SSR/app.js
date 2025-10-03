//making ssr todo app with add, delete, get, getall

const express = require("express");
const app = express();
const PORT = 4444;
const path = require("path");
const hbs = require("hbs");


// setting the view engine
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "static"))); // to set the static files
app.use(express.urlencoded({extended: true})); // to get the data from the form

// todo array to add tthe tasks 
let todos = [
    {id:1,task: "Buy Milk", description:"Buy milk while returning from work"},
    {id:2,task: "Buy Bread", description:"Buy bread while returning from work"},
    {id:3,task: "Buy Eggs", description:"Buy eggs while returning from work"},
    {id:4,task: "Buy Butter", description:"Buy butter while returning from work"}
]


// default route : get /, gett all tasks
app.get('/',(req,res)=>{
    res.render("index",{todos});

})

// 1. adding the task : post add-task
app.post("/add-task", (req, res) => {
    const { task, description } = req.body;
    console.log(req.body);
    todos.push({
        id: todos.length + 1,
        task,
        description,
    });
    res.redirect("/");
});


//delete the task : get delete-task/:id
app.get('/delete-task/:id', (req,res)=>{
    const {id} = req.params;
    todos = todos.filter(t=> t.id != id)
    console.log(`delete the task with id:${id}`);
    res.redirect("/");
})

//get single task : get todo/:id
app.get("/get-task/:id", (req, res) => {
    const { id } = req.params;
    let task = todos.filter(t=> t.id==id)

    res.render("index", {todos:task});


});





// listening the server pn port
app.listen(PORT, () => {
    console.log(`Server started on: http://localhost:${PORT}`);

});


