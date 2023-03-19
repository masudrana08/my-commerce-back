const express = require('express')
const cors = require('cors')
const UploadRoute = require('./Routes/UploadRoute')

const PORT = process.env.PORT || 8000
const app = express()

app.use(cors())
app.use(express.json())
app.use("/upload", UploadRoute)

app.listen(PORT, ()=>{
    console.log("Server is running with port: "+PORT);
})