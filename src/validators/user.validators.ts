import z from 'zod';

export const createUserSchema = z.object({
    name: z.string().min(2, 'Nome é obrigatório').max(255),
    email: z.email('Formato de email inválido'),
    password: z.string().min(6, 'A senha deve conter pelo menos 6 caracteres'),
});

export const listUsersSchema = z.object({
    offset: z.coerce.number().int().min(0).optional().default(0),
    limit: z.coerce.number().int().min(1).optional().default(10)
});