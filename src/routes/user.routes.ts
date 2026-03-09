import { Router } from "express";
import * as userController from '../controllers/user.controller';

const router = Router();

// POST/api/users - Criar um novo usuário
router.post('/', userController.createUser);

export default router;

