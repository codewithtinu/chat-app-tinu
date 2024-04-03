import {signin, login, logout} from '../controller/app.controller.js';
import express from 'express';
const router = express.Router();
// sign in
router.post('/signin',signin);
// login
router.post('/login', login);
// logout
router.post('/logout', logout);

export default router;