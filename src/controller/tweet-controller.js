import {TweetService } from "../services/index.js";
import StatusCodes from "http-status-codes";
import { SuccessResponse,ErrorResponse } from "../utils/common/index.js";
import upload from "../config/file-upload.js";


async function createTweet(req,res){
    try {
        const singleUploader=upload.single('image');
        singleUploader(req,res,async function(err,data){
            if(err){
                console.log(error);
            }
            console.log(req.file);
            const payload={...req.body};
            payload.image=req.file.location;
            let response=await TweetService.createTweet(payload);
            const { content, likes, noOfRetweets, _id} = response._doc;
            SuccessResponse.data={ content, likes, noOfRetweets,_id};
            return res.status(StatusCodes.CREATED).json(SuccessResponse);
        });
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getTweet(req,res){
    try {
        const id=req.params.id;
        let tweet=await TweetService.getTweet(id);
        SuccessResponse.data=tweet;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getAll(req,res){
    try {
        let tweets=await TweetService.getAll();
        SuccessResponse.data=tweets;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}


export {createTweet,getTweet,getAll};