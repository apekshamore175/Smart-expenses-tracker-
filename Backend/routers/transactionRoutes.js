import express from 'express'
import { createTransaction, getTransaction } from '../controllers/transactionController.js'

const route = express.Router()

route.get("/transaction", getTransaction)
route.post("/transaction", createTransaction)

export default route