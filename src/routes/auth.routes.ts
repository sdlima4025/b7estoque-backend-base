import { Router } from "express";
import * as authController from "../controllers/auth.controlleer";


const router = Router();
router.post('/login', authController.login);

export default router;