const express = require('express');
const path = require('path');
const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });


// here image will be stored in unreadable format
// to make it readable we have to use diskStorage
// see app1.js for that


app.post('/image',upload.single('image'),(req,res)=>{

    console.log(req.file);
    res.status(200).json({message:'Image uploaded successfully'});

})

app.listen(PORT, () => {console.log(`http://localhost:` + PORT);});