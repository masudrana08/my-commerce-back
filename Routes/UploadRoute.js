const express = require('express')
const UploadImage = require('../Controllers/UploadImage')

const UploadRoute = express.Router()
UploadRoute.post("/img", UploadImage)

module.exports = UploadRoute