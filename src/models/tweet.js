import mongoose from "mongoose";
import { ObjectId } from "bson";

const tweetSchema=new mongoose.Schema({
    content:{
        type: String,
        required:true
    },
    likes:{
        type: Number,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId
    },
    comment:{
        type: ObjectId,
    },
    noOfRetweets:{
        type: Number,
    }
});


const Tweet=mongoose.model('Tweet',tweetSchema);

export default Tweet;