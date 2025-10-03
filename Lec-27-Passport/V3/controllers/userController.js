const User = require("../models/user");



//getSignup ----> serves client Signup page
module.exports.getSignup = (req, res) => {
    res.render('signup');
}






//postSignup ----> Signup form submission
module.exports.postSignup = async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
    try {
        // check if all fields are provided
        if(!username || !password) return res.status(400).send('All fields are required');
        let user = await User.findOne({username})

        // if user already exists
        if(user) {
            return res.status(400).send('Username already exists. Choose another one');
        }

        //otherwise create new user
        if(!user){
            user =  await User.create({ username,password })
        }

        
        // redirect to login page after successful signup with message
        console.log("user created: ", user); 
        res.redirect('/auth/login');

    } catch (error) {
        res.status(500).send('Unable to signup. Please try again later.' + error.message);
    }
}






//getLogin ----> serves client Login page
module.exports.getLogin = (req, res) => {
    res.render('login');
}








//postLogin ----> Login form submission
module.exports.postLogin = async (req, res) => {
    const { username, password } = req.body;
    console.log("Inside postLogin:",username, password);
    try {
        // check if all fields are provided
        if(!username || !password) return res.status(400).send('All fields are required');
        let user = await User.findOne({ username, password})
        // if user not found
        if(!user) {
            return res.status(400).send('Invalid Credentials');
        }
        // if user found
        // user = {
        //     username
        // }
        req.session.user = user.username; // Storing username in session
        console.log("Session after login:", req.session.user);
        console.log(req.session);
        console.log("User logged in: ", user.username);
        res.redirect('/profile');
    } catch (error) {
        return res.status(500).send('Unable to login. Please try again later.' + error.message);
    }
}






//getProfile
module.exports.getProfile = async (req, res) => {
    // how to get username here?

    try {
        const username = req.session.user; // Get username from session object
    
        res.render('profile', { username}); 
    } catch (error) {
        
        res.status(500).send('Unable to fetch profile. Please try again later.' + error.message);
    }
}


//getLogout
module.exports.getLogout = (req, res) => {
    console.log("Logging out user:", req.session.user);
    req.session.destroy((err) => {
        if(err) return res.status(500).send('Unable to logout. Please try again later.' + err.message);
        console.log("User logged out");
        res.redirect('/auth/login');
    });
}