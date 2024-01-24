import mongoose from "mongoose";
import {ServerConfig} from './server-config.js';

const connect= async ()=>{
    await mongoose.connect(ServerConfig.MONGO_CONNECT);
    console.log("mongo connected");
};

export default connect;