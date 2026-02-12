import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import transactionRoute from './routers/transactionRoutes.js'
import cors from 'cors'
dotenv.config()

const app = express()
app.use(express.json()) 
app.use(cors()) 


app.use("/api", transactionRoute)

const port = process.env.PORT || 5000 

connectDb() //calling

app.listen(port, () => console.log(`server is running with PORT : ${port}`))