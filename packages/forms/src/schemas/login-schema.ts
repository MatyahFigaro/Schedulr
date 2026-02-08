import { z } from 'zod';

export const loginEmailSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export const loginPasswordSchema = loginEmailSchema.extend({
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

export type LoginEmailInput = z.infer<typeof loginEmailSchema>;
export type LoginPasswordInput = z.infer<typeof loginPasswordSchema>;
