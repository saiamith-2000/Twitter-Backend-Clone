import {LikeService} from "../services/index.js";
import StatusCodes from "http-status-codes";
import { SuccessResponse,ErrorResponse } from "../utils/common/index.js";


async function toggleLike(req,res){
    try {
        let data=req.body;
        let response=await LikeService.toggleLike(data);
        const { content, likes, noOfRetweets, _id} = response._doc;
        SuccessResponse.data={ content, likes, noOfRetweets,_id};
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

export {toggleLike};