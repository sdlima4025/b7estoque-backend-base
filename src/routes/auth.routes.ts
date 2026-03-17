import { Router } from "express";
import * as authController from "../controllers/auth.controlleer";
import { authMiddleware } from "../middlewares/auth.midlleware";


const router = Router();
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.get('/me', authMiddleware, authController.getMe);

export default router;