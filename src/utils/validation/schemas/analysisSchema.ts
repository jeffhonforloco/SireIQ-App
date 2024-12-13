import { z } from 'zod';

export const analysisSchema = z.object({
  title: z
    .string()
    .min(3, 'Title must be at least 3 characters')
    .max(100, 'Title cannot exceed 100 characters'),
  
  description: z
    .string()
    .min(10, 'Description must be at least 10 characters')
    .max(2000, 'Description cannot exceed 2000 characters'),
  
  parameters: z.array(
    z.object({
      name: z.string().min(1, 'Parameter name is required'),
      value: z.number()
        .min(-1000, 'Value must be greater than -1000')
        .max(1000, 'Value must be less than 1000'),
      unit: z.string().optional(),
    })
  ).min(1, 'At least one parameter is required'),
  
  confidence: z
    .number()
    .min(0, 'Confidence must be between 0 and 100')
    .max(100, 'Confidence must be between 0 and 100'),
  
  methodology: z.enum(['quantitative', 'qualitative', 'mixed'], {
    errorMap: () => ({ message: 'Please select a valid methodology' }),
  }),
  
  tags: z.array(z.string()).max(10, 'Cannot have more than 10 tags'),
  
  timestamp: z
    .string()
    .datetime({ message: 'Please enter a valid date and time' }),
});