const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));

const mentorSchema = mongoose.Schema({
    name:String,
    mentor:String,
    duration:Number
});

const mentors = mongoose.model('mentors', mentorSchema );


/*
Task: 
1. show only the courses taught by Kartik, Kanak and Abhishek
2. show only the name and mentor
3. add a new field --> platfrom: "Coding Blocks"
*/

app.get('/', async (req, res) => {
    try {
        
        const result = await mentors.find({name:['Kartik', "Kanak", 'Abhishek']})
        res.send(result)

    } catch (error) {
        res.status(501).json({
            error
        })
    }
})








mongoose.connect('mongodb://localhost:27017/mydb')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })
    .catch(err => {
        console.log(err)
    })