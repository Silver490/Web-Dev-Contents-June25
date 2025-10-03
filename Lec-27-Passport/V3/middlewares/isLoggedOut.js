module.exports.isLoggedOut = (req, res, next) => {
    if(!req.session.user){
        return next();
    }
    res.redirect("/");
}