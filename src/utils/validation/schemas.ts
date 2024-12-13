import * as z from 'zod';

export const strategySchema = z.object({
  title: z.string().min(1, 'Title is required').max(100),
  description: z.string().max(500),
  status: z.enum(['draft', 'active', 'completed']),
});

export const trainingSessionSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100),
  description: z.string().max(500),
  duration: z.number().min(1).max(480),
  level: z.enum(['beginner', 'intermediate', 'advanced']),
});