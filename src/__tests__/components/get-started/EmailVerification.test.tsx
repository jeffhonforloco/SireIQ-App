
import React from 'react';
import { render, screen, fireEvent } from '@/src/__tests__/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { RoleProvider } from '@/contexts/RoleContext';
import EmailVerification from '@/components/get-started/EmailVerification';
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

describe('EmailVerification', () => {
  const mockOnVerify = vi.fn();
  const mockOnResendCode = vi.fn();
  const mockOnUseDemoCode = vi.fn();
  const mockSetVerificationCode = vi.fn();
  
  beforeEach(() => {
    vi.clearAllMocks();
  });
  
  test('renders email verification form', () => {
    customRender(
      <EmailVerification 
        email="test@example.com"
        verificationCode=""
        setVerificationCode={mockSetVerificationCode}
        demoCode="123456"
        onVerify={mockOnVerify}
        onResendCode={mockOnResendCode}
        onUseDemoCode={mockOnUseDemoCode}
      />
    );
    
    expect(screen.getByText(/verify your email/i)).toBeInTheDocument();
    expect(screen.getByText(/test@example.com/)).toBeInTheDocument();
  });
});
