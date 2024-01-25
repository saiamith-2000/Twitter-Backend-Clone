import {UserService } from "../services/index.js";
import StatusCodes from "http-status-codes";
import { SuccessResponse,ErrorResponse } from "../utils/common/index.js";

async function signUp(req,res){
    try {
        let data=req.body;
        let response=await UserService.signUp(data);
        SuccessResponse.data=response;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function signIn(req,res){
    try {
        let data=req.body;
        let response=await UserService.signIn(data);
        SuccessResponse.data=response;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}


export {signUp,signIn}