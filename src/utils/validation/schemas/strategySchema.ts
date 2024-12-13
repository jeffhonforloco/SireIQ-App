import { z } from 'zod';

export const strategySchema = z.object({
  title: z
    .string()
    .min(3, 'Title must be at least 3 characters')
    .max(100, 'Title cannot exceed 100 characters')
    .regex(/^[a-zA-Z0-9\s-_]+$/, 'Title can only contain letters, numbers, spaces, hyphens, and underscores'),
  
  description: z
    .string()
    .min(10, 'Description must be at least 10 characters')
    .max(1000, 'Description cannot exceed 1000 characters'),
  
  status: z.enum(['draft', 'active', 'completed', 'archived'], {
    errorMap: () => ({ message: 'Please select a valid status' }),
  }),
  
  priority: z.enum(['low', 'medium', 'high'], {
    errorMap: () => ({ message: 'Please select a valid priority' }),
  }),
  
  tags: z
    .array(z.string())
    .min(1, 'At least one tag is required')
    .max(5, 'Cannot have more than 5 tags')
    .refine((tags) => tags.every((tag) => tag.length >= 2 && tag.length <= 20), {
      message: 'Each tag must be between 2 and 20 characters',
    }),
  
  dueDate: z
    .string()
    .datetime({ message: 'Please enter a valid date and time' })
    .refine((date) => new Date(date) > new Date(), {
      message: 'Due date must be in the future',
    }),
});