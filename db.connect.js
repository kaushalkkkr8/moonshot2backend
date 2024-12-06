const { default: mongoose } = require("mongoose");
const mongo = require("mongoose");
require("dotenv").config()
const mongoURI= process.env.MONGO

const data= async()=>{
    try {
        const connect = await mongo.connect(mongoURI)
        if(connect){
            console.log("Database connected");
            
        }
    } catch (err) {
        throw err;
        
    }
}
module.exports={data}