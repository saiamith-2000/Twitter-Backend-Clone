import mongoose from "mongoose";
import {ObjectId} from "bson";

const hashtagSchema=new mongoose.Schema({
   text:{
    type: String,
    required: true,
    unique:true
   },
   tweets:[{
    type: mongoose.Schema.Types.ObjectId,
   }]
});


const Hashtag=mongoose.model('Hashtag',hashtagSchema);

export default Hashtag;