import Tweet from "../models/tweet.js";
import CRUDRepository from "./crud-repository.js";

class TweetRepository extends CRUDRepository{
    constructor(){
        super(Tweet);
    } 
}


export default TweetRepository;