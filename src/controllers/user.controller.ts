import { RequestHandler } from "express";
import { createUserSchema } from "../validators/user.validators";

export const createUser: RequestHandler = async (req, res) => {
    const data = createUserSchema.parse(req.body);
    // TODO: Implementar a lógica para criar o usuário no banco de dados
    res.status(201).json({ error: null, data: user });
}