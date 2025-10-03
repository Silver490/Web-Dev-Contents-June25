const express = require("express");
const path = require("path");
const app = express();
const PORT = 4444;
const session = require("express-session");

const mongoose = require("mongoose");
const { isLoggedOut } = require("./middlewares/isLoggedOut");
const { isLoggedIn } = require("./middlewares/isLoggedIn");



// set view engine hbs
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));


// setting express session

app.use(session({
  secret: 'keyboard cat',       // secret key for signing the session ID cookie
  resave: false,                // don't save session if unmodified
  saveUninitialized: true,      // don't create session until something stored
  cookie: { secure: false },     // only use cookie over https
  maxAge: 1000 * 60 * 60 * 24,   // 1 day
}))




app.get("/", (req, res) => {
    res.render("index");
});


// Auth routes
const authRouter = require("./routers/auth");
app.use("/auth",isLoggedOut, authRouter);       // only logged out users can access auth routes

//user frofile route
const userRouter = require("./routers/user");   // only logged in users can access user routes
app.use("/", isLoggedIn, userRouter);






//mongodb connection
mongoose.connect("mongodb://127.0.0.1:27017/myTest").then(() => {
    console.log("Database Connected!");
    app.listen(PORT, () => {
        console.log(`http://localhost:` + PORT);
    });
});
