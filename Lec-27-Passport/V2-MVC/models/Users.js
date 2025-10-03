const mongoose = require('mongoose');

const userScema = new mongoose.Schema({

    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String}
})

module.exports = mongoose.model('User', userScema);