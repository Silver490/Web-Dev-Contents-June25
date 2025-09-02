const express = require('express');
const app = express();


/* ========= GNERAL MIDDLEWARES ========== */
// for parsing application/x-www-form-urlencoded
// and will run for every request
app.use(express.urlencoded({extended: true})) 







app.get('/', (req, res) => {
    res.send('Hello World!')
})


let movies = [
    {id: 1, name: 'Inception', description: 'A mind-bending thriller'},
    {id: 2, name: 'The Matrix', description: 'A sci-fi classic'},
    {id: 3, name: 'Interstellar', description: 'A journey through space and time'},
    {id: 4, name: 'The Dark Knight', description: 'A gritty superhero drama'},
    {id: 5, name: 'Fight Club', description: 'A psychological drama with a twist'},
    {id: 6, name: 'Pulp Fiction', description: 'A nonlinear crime story'},
    {id: 7, name: 'Forrest Gump', description: 'An inspiring life journey'},
    {id: 8, name: 'The Shawshank Redemption', description: 'A story of hope and friendship'},
    {id: 9, name: 'Gladiator', description: 'An epic tale of revenge and honor'},
    {id: 10, name: 'The Prestige', description: 'A rivalry between magicians'},
    {id: 11, name: 'Memento', description: 'A thriller told in reverse'},
]


app.get('/details',(req,res)=>{
    const {id} = req.query
    const movie = movies.filter(m => m.id == id)
    if(movie.lenght==0)return res.send('Movie not found')
    res.send(movie)

    // res.send("Hello from details")
})



//Post request

app.post('/addmovie',(req, res)=>{
    console.log(req.body);
    const {name, description} = req.body

    const newMovie = {
        id:new Date().getTime(),
        name,
        description
    }

    movies.push(newMovie)
    res.send(movies)

})











app.get('/greet', (req, res) =>{ // query
    const {name}  = req.query
    res.send(`Hello, ${name || 'Guest'}!`)
})

app.get('/movie/:name', (req, res)=>{ // params
    const {name} = req.params
    res.send(`Playing movie: ${name}`)
})


app.listen(4444, () => {
    console.log ('Server is running on http://localhost:4444');
})