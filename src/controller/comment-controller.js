import {CommentService} from "../services/index.js";
import StatusCodes from "http-status-codes";
import { SuccessResponse,ErrorResponse } from "../utils/common/index.js";


async function createComment(req,res){
    try {
        let data=req.body;
        let response=await CommentService.createComment(data);
        const { content, comment, noOfRetweets, _id} = response._doc;
        SuccessResponse.data={ content, comment, noOfRetweets,_id};
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

export {createComment};