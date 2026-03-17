import { RequestHandler } from "express";
import { authLoginSchema } from "../validators/auth.validator";
import * as  userService from "../services/user.service";
import { AppError } from "../utilis/apperror";
import { getUserByIdPublic } from '../services/user.service';

export const login: RequestHandler = async (req, res) => {
    const data = authLoginSchema.parse(req.body);
    const result = await userService.login(data.email, data.password);
    if (!result) {
        throw new AppError
            ('E-mail ou senha inválidos', 401);
    }
    res.json({ error: null, data: result });
};

export const logout: RequestHandler = async (req, res) => {
    // Implementation for logout functionality
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const [_, token] = authHeader.split(' '); //Bearer 123456789
        if (token) {
            await userService.logout(token);
        }
    }
    res.json({ error: null, data: { message: 'Logout successful' } });
}

export const getMe: RequestHandler = async (req, res) => {
    if(!req.user) return null;

    const user = await userService.getUserByIdPublic(req.user.id);
    if(!user) throw new AppError('Usuário não encontrado', 404);
    
    res.json({ error: null, data: user });
};


