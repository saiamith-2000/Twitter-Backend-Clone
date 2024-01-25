import passport from "passport";
import AppError from "../utils/errors/app-error.js";
import {StatusCodes} from "http-status-codes";

async function authenticate(req,res,next){
   passport.authenticate('jwt',(err,user)=>{
    if(err){
        throw new AppError('JWT token verification failed',StatusCodes.FORBIDDEN);
    }
    if(!user){
        throw new AppError('User not found',StatusCodes.BAD_REQUEST);
    }
    req.user=user;
    next();
   })(req,res,next);
}

export default authenticate;