"use server";

import { loginSchema, type LoginFormData, registerSchema, type RegisterFormData } from "@/lib/validators";
import { z } from "zod";

interface ActionResult {
  success: boolean;
  error?: string;
}

// Dummy user store for simulation
const users: RegisterFormData[] = [];

export async function handleLogin(data: LoginFormData): Promise<ActionResult> {
  try {
    const validatedData = loginSchema.parse(data);

    // Simulate API call & database check
    await new Promise(resolve => setTimeout(resolve, 1000));

    const userExists = users.find(
      user => (user.email === validatedData.emailOrUsername || user.username === validatedData.emailOrUsername) && user.password === validatedData.password
    );

    if (userExists) {
      // In a real app, you'd set a session cookie or JWT here
      return { success: true };
    } else {
      return { success: false, error: "Credenciales inválidas." };
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors.map(e => e.message).join(", ") };
    }
    console.error("Login error:", error);
    return { success: false, error: "Ocurrió un error en el servidor." };
  }
}

export async function handleRegister(data: RegisterFormData): Promise<ActionResult> {
  try {
    const validatedData = registerSchema.parse(data);

    // Simulate API call & database check
    await new Promise(resolve => setTimeout(resolve, 1000));

    const emailExists = users.some(user => user.email === validatedData.email);
    if (emailExists) {
      return { success: false, error: "Este correo electrónico ya está registrado." };
    }

    const usernameExists = users.some(user => user.username === validatedData.username);
    if (usernameExists) {
      return { success: false, error: "Este nombre de usuario ya está en uso." };
    }
    
    // Simulate saving user (in a real app, password would be hashed before saving)
    users.push(validatedData);
    console.log("Registered users:", users);

    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors.map(e => e.message).join(", ") };
    }
    console.error("Registration error:", error);
    return { success: false, error: "Ocurrió un error en el servidor." };
  }
}
