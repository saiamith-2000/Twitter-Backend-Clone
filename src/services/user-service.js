import {UserRepository} from "../repository/index.js";
import  AppError  from "../utils/errors/app-error.js";
import StatusCodes from "http-status-codes";
import mongoose from "mongoose";
import { AUTH } from "../utils/common/index.js";



const userRepository=new UserRepository();

async function signUp(data){
    try {
        const user=await userRepository.create(data);
        return user;
    } catch (error) {
        if(error instanceof mongoose.Error.ValidationError){
            let explaination=[];
            error.errors.forEach((err) => {
                explaination.push(err.message);
            });
            throw new AppError(explaination,StatusCodes.BAD_REQUEST);
        }
        if (error.code === 11000 || error.code === 11001) {
            console.log(error);
            throw new AppError('Another user found with same Email',StatusCodes.BAD_REQUEST);
        } 
        throw new AppError('Something went wrong with sign up',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function signIn(data){
    try {
        const email=data.Email;
        const current_password=data.password;
        const user=await userRepository.get('Email',email);
        if(!user){
            throw new AppError('No such user found',StatusCodes.BAD_REQUEST);
        }
        const encryptedPassword=user[0]._doc.password;
        const passwordMatch=await AUTH.checkPassword(current_password,encryptedPassword);
        if(!passwordMatch){
            throw new AppError('Password you entered doesn\'t match',StatusCodes.BAD_REQUEST);
        }
        const token = await AUTH.generate(user);
        return token;
    } catch (error) {
        console.log(error);
        throw new AppError('Something went wrong with signIn',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

export {signUp,signIn}