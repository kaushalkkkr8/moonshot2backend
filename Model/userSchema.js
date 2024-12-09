const mongo= require("mongoose")

const userModel= new mongo.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
})
const UserModel= mongo.model('user',userModel)
module.exports=UserModel