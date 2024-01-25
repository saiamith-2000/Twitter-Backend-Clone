import express from "express";
import { CommentController } from "../controller/index.js";
//import authenticate from "../middlewares/authenticate.js";
const router=express.Router();

router.post('/create',CommentController.createComment);

export default router;