const express = require('express');
const app = express();
const PORT = 4444
const path = require('path');
const { MongoClient } = require('mongodb');

app.use(express.urlencoded({ extended: true }));

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
let dbName = 'mydb'; // database name
let db; // database object


app.get('/students', async (req , res)=>{
    let {skip} = req.query;
    skip = skip || 0;
    let students = await db.collection('students')
    // let data =await students.find().toArray();

    //find with limit and skip
    // 5 records per page
    // page 1 -> skip 0 -> 0-4
    // page 2 -> skip 5 -> 5-9
    // page 3 -> skip 10 -> 10-14
    // page n -> skip (n-1)*5
    const data = await students.find().skip(2*skip).limit(5).toArray();

    res.send(data);
})


//add a student
app.post('/student',async (req,res)=>{
    const {name, age, city} = req.body;
    const student = db.collection('students')
    const newStudent = student.insertOne({name, age, city});
    res.send(newStudent);
})

//update all students city to given city where age is given age
app.post('/update', async (req, res)=>{ 
    const {age, city} = req.body;
    const {name , newName} = req.body;
    const students = db.collection('students');
    // const result = await students.updateMany({age: +age}, {$set:{city}})

    // update one student name to newName where name is given name
    await students.updateOne({name},{$set:{name:newName}})
    
    // find a student by newName
    const result = await students.findOne({name:newName});

    res.send(result);
    // res.redirect('/students');
})






client.connect().then(() => {
    db = client.db(dbName);
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:` + PORT);
    });
});
