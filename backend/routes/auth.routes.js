import {signin, login, logout} from '../controller/app.controller.js';
import express from 'express';
const router = express.Router();
// sign in
router.get('/signin', signin);
// login
router.get('/login', login);
// logout
router.get('/logout', logout);

export default router;