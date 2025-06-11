
import React from 'react';
import { render, screen } from '@/src/__tests__/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { RoleProvider } from '@/contexts/RoleContext';
import RegistrationForm from '@/components/get-started/RegistrationForm';
import { describe, test, expect, vi, beforeEach } from 'vitest';

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
    vi.clearAllMocks();
  });
  
  test('renders registration form with all fields', () => {
    customRender(<RegistrationForm onSuccess={mockOnSuccess} />);
    
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /create account/i })).toBeInTheDocument();
  });
});
