import express from  'express';
import protectRoute from '../middlewear/protectedRoutes.js';
import { getAllUser } from '../controller/users.controller.js';
const router = express.Router();

router.get('/', protectRoute, getAllUser)

export default router;