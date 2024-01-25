import JWT from "passport-jwt";
import passport from "passport";
import User from "../models/user.js";
import { ServerConfig } from "../config/server-config.js";


const  JwtStrategy = JWT.Strategy;
const ExtractJwt = JWT.ExtractJwt;
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = ServerConfig.SECRET_KEY;
const passportAuth=(passport)=>{
passport.use(new JwtStrategy(opts,async function(jwt_payload, done) {
const user=await User.findById(jwt_payload.id);
if(!user){done(null,false);}
else{done(null,user);}
}));}

export default passportAuth;