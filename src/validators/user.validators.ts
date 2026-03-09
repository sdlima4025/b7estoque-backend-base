import z from 'zod';

export const createUserSchema = z.object({
    name: z.string().min(2, ' Nome é obrigatório').max(255),
    email: z.email('Formato de email inválido'),
    password: z.string().min(6, 'A senha deve conter pelo menos 6 caracteres'),
});

