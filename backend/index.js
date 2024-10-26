const express = require('express')
require('dotenv').config()
const cors = require('cors')

const app= express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))

//MongoDB connection
const mongoose=require('mongoose')
mongoose.connect(process.env.MONGO_URL)
.then((res)=>console.log("Connected successfully"))
.catch((err)=>console.error(err))

// Import Routes
const loginRoutes=require('./routes/login.route')
const { verifyToken } = require('./middlewares/authorization')


//routes
app.use('/user',loginRoutes);






// Server Connection
const port= process.env.PORT
app.listen(port,()=>console.log(`Serevr is listenening at port ${port}`))