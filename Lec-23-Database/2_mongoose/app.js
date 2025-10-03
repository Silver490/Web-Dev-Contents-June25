const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));

//SCHEMA FOR STUDENTS
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String
});


//exporting the schema
const students = mongoose.model('students', studentSchema);


// get All students
app.get('/students', async (req, res) => {
    const students = await students.find();
    res.json(students);
});


// 2. add new student
app.post('/students', async (req, res) => {
    const { name, age, city } = req.body;
    const newStudent = new students.create({ name, age:+age, city });
    await newStudent.save();
    res.send(newStudent);
});





// 3. upadet student by name






mongoose.connect('mongodb://localhost:27017/mydb')
.then(() => {
    console.log('MongoDB connected')
    app.listen(PORT, () => {console.log(`http://localhost:` + PORT);});
})