import mongoose from 'mongoose'


let isConnected=false;


export const connectToDB= async ()=>{
    mongoose.set('strictQuery',true);

    if(isConnected){
        console.log('mongodb is already connected')
        return;
    }



    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:'share_prompt',
            useNewUrlParser: true,  // <== add this option to get a helpful error
            useUnifiedTopology: true // <== add this option to get a helpful error on
        })
    }
    catch(error){
        console.log(error)
    }
    

}