
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { RoleProvider } from '@/contexts/RoleContext';
import RegistrationForm from '@/components/get-started/RegistrationForm';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import '@testing-library/jest-dom';

// Custom wrapper that provides necessary context providers
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <HelmetProvider>
      <RoleProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </RoleProvider>
    </HelmetProvider>
  );
};

const customRender = (ui: React.ReactElement, options = {}) => 
  render(ui, { wrapper: AllTheProviders, ...options });

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
    customRender(<RegistrationForm onSuccess={mockOnSuccess} />);
    
    // Check if all form elements are rendered
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/create password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /create free account/i })).toBeInTheDocument();
  });
  
  test('validates password strength correctly', async () => {
    customRender(<RegistrationForm onSuccess={mockOnSuccess} />);
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
    customRender(<RegistrationForm onSuccess={mockOnSuccess} />);
    const user = userEvent.setup();
    
    await user.type(screen.getByLabelText(/create password/i), 'Password123!');
    await user.type(screen.getByLabelText(/confirm password/i), 'DifferentPassword');
    
    expect(screen.getByText(/passwords do not match/i)).toBeInTheDocument();
  });
});
