import express from "express";
import { LikeController } from "../controller/index.js";
import authenticate from "../middlewares/authenticate.js";
const router=express.Router();

router.post('/toggle',authenticate,LikeController.toggleLike);

export default router;