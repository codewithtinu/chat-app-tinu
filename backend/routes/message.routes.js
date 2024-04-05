import express from "express";
import protectRoute from "../middlewear/protectedRoutes.js";
import {sendMessage, getMessages}  from "../controller/message.controller.js";

const router =  express.Router();


router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);

export default router;