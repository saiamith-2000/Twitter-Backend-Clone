import mongoose from "mongoose";
import { ObjectId } from "bson";

const tweetSchema=new mongoose.Schema({
    content:{
        type: String,
        required:true
    },
    likes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Like'
    }],
    user:{
        type:mongoose.Schema.Types.ObjectId
    },
    comment:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    noOfRetweets:{
        type: Number,
    },
    image:{
        type:String
    }
});


const Tweet=mongoose.model('Tweet',tweetSchema);

export default Tweet;