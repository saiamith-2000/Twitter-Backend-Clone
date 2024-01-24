import express from "express";
import TweetRoutes from "./tweet-routes.js";
const router=express.Router();

router.use('/tweets',TweetRoutes);



export default router;