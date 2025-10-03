const { count } = require('console');
const express = require('express');
const path = require('path');
const app = express();
const PORT = 4444;
const cookieParser = require('cookie-parser');

app.use(cookieParser());


app.use(express.urlencoded({ extended: true }));

app.get('/login', (req, res) => {
    if(req.cookies.user) {
        return res.redirect('/profile');
    }
    res.sendFile(path.join(__dirname, 'login.html'));
})





// post login
app.post('/login',(req,res)=>{
    const {username} = req.body;
    // setting cookie
    let userData = {
        username,
        count: 0
    }
    let user = JSON.stringify(userData);
    res.cookie(user,{
        httpOnly: true,
    });
    res.redirect('/profile');
})



app.get("/profile", (req, res) => {
    console.log(req.cookies);
    if(!req.cookies.user) {
        return res.redirect('/login');
    }

    let userData = JSON.parse(req.cookies.user)
    if(!userData.cookies) {
        return res.redirect('/login');
    }
    userData.count += 1;
    res.cookie('user', JSON.stringify(userData,{
        httpOnly: true,
    }));
    res.send(`You visited profile page ${req.cookies} times
        <br>
        <a href="/logout">
            <Logout>Logout</button>
        </a>
        
        `);

});






app.listen(PORT, () => {console.log(`http://localhost:` + PORT);});