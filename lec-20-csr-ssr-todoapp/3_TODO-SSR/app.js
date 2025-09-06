const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const {v4:uuid} = require('uuid');

app.set('view engine', 'hbs');

// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

let todos = [
    { id: 1, task: 'Learn Node.js', description: 'Understand the basics of Node.js and Express.' },
    { id: 2, task: 'Build a Todo App', description: 'Create a simple todo application using Express and Handlebars.' },
    { id: 3, task: 'Test the App', description: 'Ensure all functionalities are working as expected.' }

];

app.get('/', (req, res) => {
    res.render('index', { title: 'Todo App', todos });
});


app.get('/todos', (req, res) => {

});

app.get('/todo/:id', (req, res) => {

});

app.post('/todo', (req, res) => {

})


app.get('/delete-todo/:id', (req, res) => {

});




app.listen(PORT, () => {console.log(`http://localhost:` + PORT);});