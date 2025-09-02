const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static"))); // by default it will look for '/' route

let todos = [
    // {id:1, name:"Cricket"}
];

app.get('/todos', (req, res)=>{
    res.send(todos)
})

app.get('/todo/:id', (req, res)=>{
    const {id} = req.params
    const t = todos.filter(todo=> t.id == +id)
    res.send(data)
})




// To Add a task , this will recies
app.post("/todo", (req, res) => {
    const { task } = req.body; // for that we to decode the body line:5
    todos.push({
        id: todos.length + 1,
        task
    });
    // res.send(todos)
    // res.redirect('/todos')
    res.redirect('/')
});

app.listen(4444, () => {
    console.log("Server is running on http://localhost:4444");
});
