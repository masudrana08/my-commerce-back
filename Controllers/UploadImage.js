const cloudinary = require('cloudinary').v2;
require('dotenv').config()

// Configuration 
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});


const UploadImage = (req, res) =>{
    const img = req.files.img.tempFilePath
    const width = req.headers.width || 400
    cloudinary.uploader.upload(img, {width, crop: "scale"})
    .then((data) => {
        res.send(data.secure_url)
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = UploadImage