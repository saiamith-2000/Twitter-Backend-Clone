import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ServerConfig } from "../../config/server-config.js";

async function checkPassword(plainPassword,encryptedPassword){
    try {
        const response=await bcrypt.compareSync(plainPassword,encryptedPassword);
        return response;
    } catch (error) {
        throw error;
    }
}
async function generate(user){
    const payload = {
        id: user[0]._doc._id, // Make sure user._id exists and is valid
     };
  
     const token = jwt.sign(payload, ServerConfig.SECRET_KEY, { expiresIn: '2h' });
     return token;
}


export {checkPassword,generate};












/*
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const { JWT_SECRET, JWT_EXPIRY } = require('../../config/server-config');





function createToken(input){
    try {
        return jwt.sign(input,JWT_SECRET,{expiresIn:JWT_EXPIRY});
    } catch (error) {
        throw error;
    }
}

function verifyToken(token){
    try {
        return jwt.verify(token,JWT_SECRET);
    } catch (error) {
        throw error;
    }
}

module.exports={
    checkPassword,
    createToken,
    verifyToken
}
*/