import mongoose from "mongoose";

const newUserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'newUser Name is required']
    },
    email:{
        type:String,
        required:[true, 'newUser email is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true, 'newUser password is required'],

    },
    address:{
        type:String,
        required:[true, 'newUser address is required'],

    },
    role:{
        type:String,
        required:[true, 'newUser role is required'], 
    },

    
    isVerifiedEmail:{
    type:String,
    required:[true, 'isVerifiedEmail is required'],

    }
})
export default newUserSchema;