import mongoose from "mongoose";

const commentSchema=new mongoose.Schema({
    content:{
        type: String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId
    },
    likes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Like'
    }],
    onModel:{
        type:String,
        required:true,
        enum: ["Tweet","Comment"]
    },
    comment:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    commentable:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        refPath:'onModel'
    }
});

const Comment=mongoose.model('Comment',commentSchema);

export default Comment;