const mongoose = require("mongoose");

const todosSchema = new mongoose.Schema({
    task: { type: String, required: true },
    description: { type: String, required: true }
})

module.exports = mongoose.model("Todos", todosSchema);