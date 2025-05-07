
import React from 'react';
import { render, screen } from '../../test-utils';
import userEvent from '@testing-library/user-event';
import RegistrationForm from '@/components/get-started/RegistrationForm';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import '@testing-library/jest-dom';

describe('RegistrationForm', () => {
  const mockOnSuccess = vi.fn();
  
  beforeEach(() => {
    mockOnSuccess.mockClear();
    // Mock the toast function
    vi.mock('@/components/ui/sonner', () => ({
      toast: {
        success: vi.fn(),
        error: vi.fn()
      }
    }));
  });
  
  test('renders all form fields correctly', () => {
    render(<RegistrationForm onSuccess={mockOnSuccess} />);
    
    // Check if all form elements are rendered
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/create password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/personal/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/developer/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/enterprise/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /create free account/i })).toBeInTheDocument();
  });
  
  test('validates password strength correctly', async () => {
    render(<RegistrationForm onSuccess={mockOnSuccess} />);
    const user = userEvent.setup();
    
    const passwordInput = screen.getByLabelText(/create password/i);
    
    // Test weak password
    await user.type(passwordInput, 'weak');
    expect(screen.getByText(/weak/i)).toBeInTheDocument();
    
    // Clear and test medium password
    await user.clear(passwordInput);
    await user.type(passwordInput, 'Medium123');
    expect(screen.getByText(/medium/i)).toBeInTheDocument();
    
    // Clear and test strong password
    await user.clear(passwordInput);
    await user.type(passwordInput, 'StrongPassword123!');
    expect(screen.getByText(/strong/i)).toBeInTheDocument();
  });
  
  test('shows error when passwords do not match', async () => {
    render(<RegistrationForm onSuccess={mockOnSuccess} />);
    const user = userEvent.setup();
    
    await user.type(screen.getByLabelText(/create password/i), 'Password123!');
    await user.type(screen.getByLabelText(/confirm password/i), 'DifferentPassword');
    
    expect(screen.getByText(/passwords do not match/i)).toBeInTheDocument();
  });
  
  test('allows account type selection', async () => {
    render(<RegistrationForm onSuccess={mockOnSuccess} />);
    const user = userEvent.setup();
    
    // Check default is personal
    const personalRadio = screen.getByLabelText(/personal/i) as HTMLInputElement;
    const developerRadio = screen.getByLabelText(/developer/i) as HTMLInputElement;
    const enterpriseRadio = screen.getByLabelText(/enterprise/i) as HTMLInputElement;
    
    expect(personalRadio.checked).toBe(true);
    
    // Change to developer
    await user.click(developerRadio);
    expect(personalRadio.checked).toBe(false);
    expect(developerRadio.checked).toBe(true);
    
    // Change to enterprise
    await user.click(enterpriseRadio);
    expect(enterpriseRadio.checked).toBe(true);
    expect(developerRadio.checked).toBe(false);
  });
});
