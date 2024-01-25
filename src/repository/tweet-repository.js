import Tweet from "../models/tweet.js";
import CRUDRepository from "./crud-repository.js";

class TweetRepository extends CRUDRepository{
    constructor(){
        super(Tweet);
    } 
    async getTweet(id){
        try {
            let tweet=await Tweet.findById(id);
            return tweet;
        } catch (error) {
            throw error;
        }
    }
}


export default TweetRepository;