const router = require('express').Router();
const { getProfile, getLogout } = require("../controllers/userController");

// froile page route
router.get('/profile', getProfile);


// Logout route
router.get('/logout', getLogout);




module.exports = router;