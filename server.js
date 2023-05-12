// const express = require('express')
import express from 'express'

// dotenv
import dotenv from 'dotenv'
// Importing mongoose
// import mongoose from 'mongoose'

import connectDB from './database/conn.js'
import jobRoute from './route/jobRoute.js'
import authRoute from './route/authRoute.js'
import cors from 'cors'
import errorMiddleware from './middleware/errorMiddleware.js'


const app = express()

dotenv.config()

// middleware

// TO work with json data
app.use(express.json())

app.use(cors())
app.use('/api',authRoute)
app.use('/api',jobRoute)
app.use(errorMiddleware)

// the api will become/api/register as a default instead of /
// app.use(authRoute)

// code to connect mongodb or mongoDB connection
connectDB()

// add api in routes

// app.get('/',(req,res)=>{
//     res.json({msg:"hello chandra"})
// })

// PORT connection
const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Listening to port-${PORT} `)
})
// app.listen(5000,()=>{
//     console.log("Listening to port 5000")
// })


// mongoose.connect(process.env.MONGODB_URL)
// .then(()=> {
//     console.log('connected to MongoDB!')
// })

  