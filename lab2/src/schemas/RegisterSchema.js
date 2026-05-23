import * as z from "zod";

export const RegisterSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"),
    username: z.string().regex(/^[a-zA-Z0-9_]{3,}$/, "Username must be at least 3 characters and contain only letters, numbers, and underscores"),
    password: z.string().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "Password must be at least 8 characters and contain at least one letter and one number"),
    confirmPassword: z.string().min(8, "Confirm password must be at least 8 characters"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})