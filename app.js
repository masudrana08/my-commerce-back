const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const path = require('path')
const UploadRoute = require('./Routes/UploadRoute')

const PORT = process.env.PORT || 8000
const app = express()

app.use(cors())
app.use(express.json())
app.use(fileUpload({
    limits: { fileSize: 2 * 1024 * 1024 },
    useTempFiles : true,
    tempFileDir : path.join(__dirname, '/tmp')
}));
app.use("/upload", UploadRoute)

app.listen(PORT, ()=>{
    console.log("Server is running with port: "+PORT);
})