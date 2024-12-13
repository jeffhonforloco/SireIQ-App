import { z } from 'zod';

export const userProfileSchema = z.object({
  displayName: z.string().min(2, 'Display name must be at least 2 characters').max(50),
  email: z.string().email('Invalid email address'),
  bio: z.string().max(500, 'Bio must be less than 500 characters').optional(),
  notifications: z.boolean(),
  language: z.enum(['en', 'es', 'fr']),
});

export const analysisSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  parameters: z.array(z.object({
    name: z.string(),
    value: z.number(),
  })),
  tags: z.array(z.string()),
});

export const feedbackSchema = z.object({
  rating: z.number().min(1).max(5),
  comment: z.string().min(10, 'Comment must be at least 10 characters'),
  category: z.enum(['bug', 'feature', 'improvement', 'other']),
});