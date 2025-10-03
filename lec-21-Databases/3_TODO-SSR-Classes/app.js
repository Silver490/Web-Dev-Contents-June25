//making ssr-todo app using express and hbs with class method to add the task
const express = require("express");
const app = express();
const PORT = 4444;
const path = require("path");
const hbs = require("hbs");

//importing the Todos class to use the methods from it
// like addTodo, deleteTodo, getTodo
const Todos = require("./Todos");



// setting the view engine
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "static"))); // to set the static files
app.use(express.urlencoded({extended: true})); // to get the data from the form



// 1.default route : get /, gett all tasks
app.get('/', async (req, res) => {
    const todos = await Todos.getAllTodos(); // You need to implement getAllTodos in Todos.js
    res.render("index", { todos });
});



// 2. adding the task : post /add-task
app.post("/add-task", async (req, res) => {
    await Todos.addTodo(req.body);
    res.redirect("/");
});




// 3. delete the task : get delete-task/:id
app.get('/delete-task/:id', async (req,res)=>{
    const {id} = req.params;
    await Todos.deleteTodo(id);
    res.redirect("/");
})

//get single task : get todo/:id
app.get("/get-task/:id", async (req, res) => {
    const { id } = req.params;
    const task = await Todos.getTodoById(id);
    res.render("index", {todos:task});
});





// listening the server pn port
app.listen(PORT, () => {
    console.log(`Server started on: http://localhost:${PORT}`);

});


