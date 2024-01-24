import {TweetService } from "../services/index.js";
import StatusCodes from "http-status-codes";
import { SuccessResponse,ErrorResponse } from "../utils/common/index.js";


async function createTweet(req,res){
    try {
        let data=req.body;
        let response=await TweetService.createTweet(data);
        const { content, likes, noOfRetweets, _id} = response._doc;
        SuccessResponse.data={ content, likes, noOfRetweets,_id};
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error.error = error;
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
        ErrorResponse.error.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}


export {createTweet,getTweet};