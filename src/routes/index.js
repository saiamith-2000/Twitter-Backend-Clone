import express from "express";
import TweetRoutes from "./tweet-routes.js";
import UserRoutes from "./user-routes.js";
import LikeRoutes from "./like-routes.js";
import CommentRoutes from "./comment-routes.js";
const router=express.Router();

router.use('/tweets',TweetRoutes);
router.use('/user',UserRoutes);
router.use('/like',LikeRoutes);
router.use('/comment',CommentRoutes);


export default router;