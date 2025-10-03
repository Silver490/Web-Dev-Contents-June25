const express = require('express');
const path = require('path');
const app = express();
const PORT = 4444;
const cloudinary = require('cloudinary')
const multer = require('multer');
const dotenv = require('dotenv');
dotenv.config();

app.use(express.urlencoded({ extended: true }));



// cloudinary config
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
});




// multer config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'uploads/'))
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    const fileExt = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + fileExt)
  }
})

const upload = multer({ storage: storage })







app.post("/image", upload.single("image"), (req, res) => {
    console.log(req.file);
    //upload to cloudinary
    cloudinary.uploader
      .upload(req.file.path)
      .then((result) => {
        console.log(result);
        res.status(200).json({ message: "Image uploaded successfully", data: result });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: "Image upload failed", error: error });
      });

});








app.listen(PORT, () => {console.log(`http://localhost:` + PORT);});