import express from "express";
import { TweetController } from "../controller/index.js";
const router=express.Router();

router.post('/',TweetController.createTweet);
router.get('/:id',TweetController.getTweet);
router.get('/',TweetController.getAll);


export default router;