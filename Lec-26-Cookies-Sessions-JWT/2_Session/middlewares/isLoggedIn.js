module.exports.isLoggedIn = (req, res, next) =>{
    if(req.session.user){
        console.log("In isLoggedIn middleware, user:", req.session.user);
        return next();
    }
    console.log("In isLoggedIn middleware, no user, redirecting to login");
    res.redirect("/auth/login");
}