import { z } from 'zod';

export const loginSchema = z.object({
  emailOrUsername: z.string().min(1, { message: "Correo electrónico o nombre de usuario es requerido." }),
  password: z.string().min(1, { message: "Contraseña es requerida." }),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  username: z.string().min(3, { message: "Nombre de usuario debe tener al menos 3 caracteres." }).max(20, { message: "Nombre de usuario no puede exceder los 20 caracteres."}),
  email: z.string().email({ message: "Correo electrónico inválido." }),
  password: z.string()
    .min(8, { message: "Contraseña debe tener al menos 8 caracteres." })
    .regex(/[A-Z]/, { message: "Contraseña debe contener al menos una letra mayúscula."})
    .regex(/[a-z]/, { message: "Contraseña debe contener al menos una letra minúscula."})
    .regex(/[0-9]/, { message: "Contraseña debe contener al menos un número."})
    .regex(/[^A-Za-z0-9]/, { message: "Contraseña debe contener al menos un carácter especial."}),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden.",
  path: ["confirmPassword"], // path of error
});

export type RegisterFormData = z.infer<typeof registerSchema>;
