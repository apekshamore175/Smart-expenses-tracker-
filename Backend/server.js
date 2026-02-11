import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
dotenv.config()

const app = express()
app.use(express.json()) 

const port = process.env.PORT || 5000 

connectDb() //calling

app.listen(port, () => console.log(`server is running with PORT : ${port}`))