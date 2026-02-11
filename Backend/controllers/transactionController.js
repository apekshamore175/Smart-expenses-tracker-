import Transaction from "../models/Transaction";

//Create 

export const createTransaction = async(req, res)=>{
    try{
        const transaction = await Transaction.create(req.body)

        res.status(201).json({
            success:true,
            data:transaction
        })
    }catch(e){
        res.status(400).json({
            success:false,
            message:e.message
        })
    }
}

//Read
export const getTransaction = async(req, res)=>{
    try{
        const transactions = await Transaction.find()
        res.status(201).json({
          success: true,
          data: transactions,
        });
    }catch(e){
        res.status(400).json({
          success: false,
          message: e.message,
        });
    }
}