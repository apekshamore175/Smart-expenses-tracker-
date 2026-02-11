import Transaction from "../models/Transaction.js";

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
        const transactions = await Transaction.find().sort({ createdAt: -1 });
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

//delete 
export const deleteTransaction = async(req, res)=>{
    try{
        const {id} = req.params
        
        const deleteTrans  = await Transaction.findByIdAndDelete(id);

        res.status(201).json({
            success:true,
            data:deleteTrans
        })

    }catch(e){
        res.status(400).json({
          success: false,
          message: e.message,
        });
    }
}