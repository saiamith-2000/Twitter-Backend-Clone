import {HashtagRepository,TweetRepository} from "../repository/index.js";
import  AppError  from "../utils/errors/app-error.js";
import StatusCodes from "http-status-codes";
const tweetRepository=new TweetRepository();
const hashtagRepository=new HashtagRepository();

async function createTweet(data){
    try {
        let content=data.content;
        let tags = content.match(/#+[a-zA-Z0-9_]{1,}/g).map(
            (tag)=>tag.substring(1).toLowerCase()
        );
        //storing tweet
        let tweet=await tweetRepository.create(data);
        //storing hashtag
        let existingTags=await hashtagRepository.findByName(tags);
        let repeatTags=existingTags.map(tags=>tags.text);
        let uniqueTags=tags.filter(tag=>!repeatTags.includes(tag));
        uniqueTags=uniqueTags.map(tag=>{
            return {
                text:tag,
                tweets:[tweet.id]
            }
        });
        await hashtagRepository.bulkCreate(uniqueTags);
        existingTags.forEach(tag => {
            tag.tweets.push(tweet.id);
            tag.save();
        });
        return tweet;
    } catch (error) {
        console.log(error);
        throw new AppError("Something went wrong during creation of tweet",StatusCodes.BAD_REQUEST);
    }
    
}


async function getTweet(id){
    try {
        const tweet=tweetRepository.get('_id',id);
        return tweet;
    } catch (error) {
        console.log(error);
        throw new AppError("Something went wrong during creation of tweet",StatusCodes.BAD_REQUEST);
    }
}


export {createTweet,getTweet};