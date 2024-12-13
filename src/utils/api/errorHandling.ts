export class APIError extends Error {
  constructor(
    message: string,
    public status: number,
    public code?: string
  ) {
    super(message);
    this.name = 'APIError';
  }
}

export function handleAPIError(error: unknown): APIError {
  if (error instanceof APIError) {
    return error;
  }

  if (error instanceof Error) {
    return new APIError(error.message, 500);
  }

  return new APIError('An unknown error occurred', 500);
}

export function isNetworkError(error: unknown): boolean {
  return error instanceof Error && 
    (error.message.includes('Network Error') || error.message.includes('Failed to fetch'));
}

export function shouldRetry(error: unknown): boolean {
  if (error instanceof APIError) {
    return error.status >= 500 || error.status === 429;
  }
  return isNetworkError(error);
}