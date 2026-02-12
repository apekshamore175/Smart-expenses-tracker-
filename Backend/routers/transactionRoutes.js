import express from 'express'
import { createTransaction, deleteTransaction, getTransaction } from '../controllers/transactionController.js'

const route = express.Router()

route.get("/transaction", getTransaction)
route.post("/transaction", createTransaction)
route.delete("/transaction/:id", deleteTransaction)

export default route