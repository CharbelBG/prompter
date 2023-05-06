import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async ()=>{
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log('mongoDB is connected');
        return;
    }

    try{
       let connect = await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI, {
            dbName:"share prompt",
            useNewUrlParse:true,
            useUnifiedTopology:true,
        });
        console.log(connect);
        console.log('mongoDB is connected');
        isConnected = true;
    }catch(err){
        console.log(err);
    }
}