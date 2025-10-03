const router = require("express").Router();
const { get } = require("mongoose");
const {
    postSignup,
    getSignup,
    getLogin,
    postLogin,
    getLogout
} = require("../controllers/userController");


// Signup page route
router.get("/signup", getSignup);


// Signup form submission route
router.post("/signup", postSignup);


// Login page route
router.get("/login", getLogin);


// Login form submission route
router.post("/login", postLogin);




module.exports = router;
