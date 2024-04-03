import express from "express";
import protectRoute from "../middlewear/protectedRoutes.js";
import { sendMessage } from "../controller/message.controller";

const router =  express.Router();

router.post("/send/:id", protectRoute, sendMessage);

export default router;