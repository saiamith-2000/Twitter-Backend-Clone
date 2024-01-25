import {CommentRepository, LikeRepository, TweetRepository} from "../repository/index.js";
import  AppError  from "../utils/errors/app-error.js";
import StatusCodes from "http-status-codes";
const likeRepository=new LikeRepository();
const tweetRepository=new TweetRepository();
const commentRepository=new CommentRepository();


async function toggleLike({modelId,modelType,user}){
    try {
        let likeable;
    if(modelType=='Tweet'){
          likeable=await tweetRepository.getTweet(modelId); 
          const exist=await likeRepository.findByUserAndLike({
            user:user,
            onModel:modelType,
            likeable:modelId
        });
        if(exist){
             likeable.likes.pull(exist.id);
             const deleteLike=await likeRepository.destroy({
                user:user,
                onModel:modelType,
                likeable:modelId
            });
            await likeable.save();
            return likeable;
        }
        else{
            const newLike=await likeRepository.create({
                user:user,
                onModel:modelType,
                likeable:modelId
            });
            likeable.likes.push(newLike);
            await likeable.save();
            return likeable;
        }
    }
    else if(modelType=='Comment'){
        likeable=await commentRepository.getComment(modelId); 
        const exist=await likeRepository.findByUserAndLike({
          user:user,
          onModel:modelType,
          likeable:modelId
        });
      if(exist){
           likeable.likes.pull(exist.id);
           const deleteLike=await likeRepository.destroy({
              user:user,
              onModel:modelType,
              likeable:modelId
          });
          await likeable.save();
          return likeable;
      }
      else{
          const newLike=await likeRepository.create({
              user:user,
              onModel:modelType,
              likeable:modelId
          });
          likeable.likes.push(newLike);
          await likeable.save();
          return likeable;
      }
    }
    else{
        throw new AppError('can\'t be liked',StatusCodes.BAD_REQUEST);
    }
    } catch (error) {
    console.log(error);
    throw new AppError('Something went wrong',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


export {toggleLike};