import z from "zod";

export const authLoginSchema = z.object({
    email: z.email('E-mail inválido'),
    password: z.string().min(6, 'A senha deve conter pelo menos 6 caracteres'),
});