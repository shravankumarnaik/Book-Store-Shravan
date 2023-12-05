const dotenv = require("dotenv")
dotenv.config();
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const router = require("./routes/book-routes")

const port = process.env.PORT
const MONGODB_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/";
//middlewares
app.use(express.json())
app.use(cors())

//mongo DB connnection 
mongoose.connect(MONGODB_URL)
.then(()=>{
    console.log("Data Base connected ...!")
}).catch((err)=>{
    console.log(err)
})

//
app.use("/books",router)


//server side configuration
app.listen(port,()=>{
    console.log("server is running on port ",port)
})
