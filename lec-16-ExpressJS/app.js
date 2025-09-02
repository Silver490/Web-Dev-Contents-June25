// Learning Express JS
// it is a framework for Node.js that allows you to create web applications 
// using a template engine and a router.
// what is Express JS?
// Express JS is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It facilitates the development of web servers and APIs by providing a simple interface for routing, middleware, and handling requests and responses.


// const path = require('path');

// console.log(__dirname + '/public/index.html'); // prints the absolute path to index.html
// console.log(path.join(__dirname, 'public', 'index.html')); // prints the absolute path to index.html using path.join








/*-------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------*/




const express  = require('express')
const app = express()


app.get('/',(req, res)=>{
    console.log(req);
    res.send("<h1>Hello World</h1>")
})



// Using query parameters
app.get('/greet',(req,res)=>{
    console.log(req.query);
    // res.send(`Hello ${req.query.name} from ${req.query.city}`);
    //or
    const {name, city} = req.query;
    res.send(`<h1>Hello ${name} from ${city}</h1>`)
})

//params
app.get('/movie/:name', (req,res) =>{
    const {name} = req.params
    res.send(`lets watch ${name} movie`)
})


app.listen(3000)