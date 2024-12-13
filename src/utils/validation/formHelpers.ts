import { z } from 'zod';
import { ValidationErrors } from './errorMessages';

export function getFieldError(errors: z.ZodError, field: string): string | undefined {
  return errors.issues.find((issue) => issue.path[0] === field)?.message;
}

export function validateForm<T extends z.ZodSchema>(
  schema: T,
  data: unknown
): { success: boolean; data?: z.infer<T>; errors?: z.ZodError } {
  try {
    const validData = schema.parse(data);
    return { success: true, data: validData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, errors: error };
    }
    throw error;
  }
}

export function createFormData(data: Record<string, any>): FormData {
  const formData = new FormData();
  
  Object.entries(data).forEach(([key, value]) => {
    if (value instanceof File) {
      formData.append(key, value);
    } else if (Array.isArray(value)) {
      value.forEach((item, index) => {
        formData.append(`${key}[${index}]`, item);
      });
    } else if (typeof value === 'object' && value !== null) {
      formData.append(key, JSON.stringify(value));
    } else {
      formData.append(key, String(value));
    }
  });
  
  return formData;
}