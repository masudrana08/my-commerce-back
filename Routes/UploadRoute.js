const express = require('express')
const UploadController = require('../Controllers/UploadController')

const UploadRoute = express.Router()
UploadRoute.get("/", UploadController)

module.exports = UploadRoute