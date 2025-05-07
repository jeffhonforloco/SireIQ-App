
import React from 'react';
import { render, screen } from '@testing-library/react';
import GetStartedCard from '@/components/get-started/GetStartedCard';
import { describe, test, expect, vi, beforeEach } from 'vitest';

describe('GetStartedCard', () => {
  const mockSetVerificationCode = vi.fn();
  const mockOnVerify = vi.fn();
  const mockOnResendCode = vi.fn();
  const mockOnUseDemoCode = vi.fn();
  const mockOnRegistrationSuccess = vi.fn();
  
  beforeEach(() => {
    vi.clearAllMocks();
  });
  
  test('renders registration form at step 1', () => {
    render(
      <GetStartedCard 
        step={1}
        email=""
        verificationCode=""
        setVerificationCode={mockSetVerificationCode}
        demoCode="123456"
        onVerify={mockOnVerify}
        onResendCode={mockOnResendCode}
        onUseDemoCode={mockOnUseDemoCode}
        onRegistrationSuccess={mockOnRegistrationSuccess}
      />
    );
    
    expect(screen.getByText('Create an Account')).toBeInTheDocument();
    expect(screen.getByText(/sign up for free and start exploring/i)).toBeInTheDocument();
    // Check if registration form is rendered
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
  });
  
  test('renders email verification at step 2', () => {
    render(
      <GetStartedCard 
        step={2}
        email="test@example.com"
        verificationCode=""
        setVerificationCode={mockSetVerificationCode}
        demoCode="123456"
        onVerify={mockOnVerify}
        onResendCode={mockOnResendCode}
        onUseDemoCode={mockOnUseDemoCode}
        onRegistrationSuccess={mockOnRegistrationSuccess}
      />
    );
    
    expect(screen.getByText('Verify Your Email')).toBeInTheDocument();
    expect(screen.getByText(/we've sent a verification code/i)).toBeInTheDocument();
    // Check if email verification is rendered
    expect(screen.getByRole('button', { name: /verify email & continue/i })).toBeInTheDocument();
  });
});
