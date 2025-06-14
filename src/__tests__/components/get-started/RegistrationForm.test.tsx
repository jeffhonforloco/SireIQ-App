
import React from 'react';
import { render, screen } from '../../test-utils';
import RegistrationForm from '@/components/get-started/RegistrationForm';
import { describe, test, expect, vi, beforeEach } from 'vitest';

describe('RegistrationForm', () => {
  const mockOnSuccess = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders registration form with all fields', () => {
    render(<RegistrationForm onSuccess={mockOnSuccess} />);

    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /create account/i })).toBeInTheDocument();
  });
});

