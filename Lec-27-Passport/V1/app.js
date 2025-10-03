const express = require('express');
const path = require('path');
const Users = require('./models/Users');
const app = express();
const PORT = 3000;
const passport = require('passport');
const LocalStrategy = require('passport-local')

// set view engine hb
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// passport config
passport.use(new LocalStrategy( async function verify(username, password, cb) {
    try {
        const user = await Users.findOne({ username});
        if (!user) 
            { return cb(null, false, { message: 'Incorrect username or password.' }); }
        if (user.password !== password) 
            { return cb(null, false, { message: 'Incorrect username or password.' }); }
        
        return cb(null, user);
    } catch (error) {
        // error first callback
        return cb(error);
    }
}));

// serialize and deserialize user
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(async function(id, done) {
    try {
        
    } catch (error) {
        
    }
})



// signup
app.get('/signup', (req, res) => {
    res.render('signup');
})


app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    Users.create({ username, password, email: email || '' })
    res.redirect('/login');
})

// login
app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/login'
}))




// profile
app.get('/profile', (req, res) => {
    res.render('profile');
})





// mongoose connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp')
.then(() => { 
    console.log("Mongodb connected"); 
    app.listen(PORT, () => {console.log(`http://localhost:` + PORT);});

}).catch((e) => { console.log(e); })

