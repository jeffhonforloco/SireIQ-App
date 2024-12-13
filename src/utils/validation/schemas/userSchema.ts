import { z } from 'zod';

export const userSchema = z.object({
  displayName: z
    .string()
    .min(2, 'Display name must be at least 2 characters')
    .max(50, 'Display name cannot exceed 50 characters')
    .regex(/^[a-zA-Z0-9\s-_]+$/, 'Display name can only contain letters, numbers, spaces, hyphens, and underscores'),
  
  email: z
    .string()
    .email('Invalid email address')
    .toLowerCase()
    .refine((email) => email.endsWith('.com') || email.endsWith('.org') || email.endsWith('.net'), {
      message: 'Email must end with .com, .org, or .net',
    }),
  
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
  
  bio: z
    .string()
    .max(500, 'Bio cannot exceed 500 characters')
    .optional(),
  
  preferences: z.object({
    language: z.enum(['en', 'es', 'fr'], {
      errorMap: () => ({ message: 'Please select a valid language' }),
    }),
    theme: z.enum(['light', 'dark', 'system']),
    notifications: z.boolean(),
    emailFrequency: z.enum(['daily', 'weekly', 'monthly', 'never']),
  }),
});