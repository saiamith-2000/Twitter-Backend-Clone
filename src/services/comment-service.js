import {CommentRepository, TweetRepository} from "../repository/index.js";
import  AppError  from "../utils/errors/app-error.js";
import StatusCodes from "http-status-codes";
const commentRepository=new CommentRepository();
const tweetRepository=new TweetRepository();

async function createComment({modelType,content,user,modelId}){
       try {
        if(modelType=='Tweet'){
            let commentable=await tweetRepository.getTweet(modelId); 
            const newComment=await commentRepository.create({
                  user:user,
                  content:content,
                  onModel:modelType,
                  commentable:modelId
            });
            commentable.comment.push(newComment);
            await commentable.save();
            return commentable;
          }
         if(modelType=='Comment'){
            let commentable=await commentRepository.getComment(modelId); 
            const newComment=await commentRepository.create({
                  user:user,
                  content:content,
                  onModel:modelType,
                  commentable:modelId
            });
            commentable.comment.push(newComment);
            await commentable.save();
            return commentable;
          }
          else{
            throw new AppError('can\'t be commented',StatusCodes.BAD_REQUEST);
          }
       } catch (error) {
          console.log(error);
          throw new AppError('Something went wrong',StatusCodes.INTERNAL_SERVER_ERROR);
       }
}

export {createComment}

