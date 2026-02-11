import monogoose from 'mongoose'

const connectDb = async() =>{
    try{
        await monogoose.connect(process.env.MONGO_URL);
        console.log("database connect");
        
    }catch(e){
        console.log("Failed to connect");
        console.log(e.message)
    }
}

export default connectDb