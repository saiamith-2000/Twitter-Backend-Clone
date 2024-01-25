import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import { ServerConfig } from "../config/server-config.js";
import jwt from "jsonwebtoken";


const userSchema=new mongoose.Schema({
    Email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true,
        match: /^[A-Za-z0-9\s]+$/,
    },
    name:{
        type:String,
        required:true,
    },
    bio:{
        type: String,
    },
    tweets:[
        {
        type: mongoose.Schema.Types.ObjectId
        }
    ]
});

userSchema.pre('save',function(next){
    const user=this;
    const salt=bcrypt.genSaltSync(+ServerConfig.SALT_ROUND);
    const encryptedPassword=bcrypt.hashSync(user.password,salt);
    user.password=encryptedPassword;
    next();
});


const User=mongoose.model('User',userSchema);

export default User;