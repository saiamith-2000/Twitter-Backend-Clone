import express from "express";
import { UserController } from "../controller/index.js";
const router=express.Router();

router.post('/signUp',UserController.signUp);

router.post('/signIn',UserController.signIn);

export default router;