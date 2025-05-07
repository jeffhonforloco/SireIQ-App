
import React from 'react';
import { render, screen, fireEvent } from '../../test-utils';
import EmailVerification from '@/components/get-started/EmailVerification';
import { vi } from 'vitest';

describe('EmailVerification', () => {
  const mockSetVerificationCode = vi.fn();
  const mockOnVerify = vi.fn();
  const mockOnResendCode = vi.fn();
  const mockOnUseDemoCode = vi.fn();
  
  beforeEach(() => {
    mockSetVerificationCode.mockClear();
    mockOnVerify.mockClear();
    mockOnResendCode.mockClear();
    mockOnUseDemoCode.mockClear();
  });
  
  test('renders verification UI correctly', () => {
    render(
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
    
    // Check if the demo code is displayed
    expect(screen.getByText('123456')).toBeInTheDocument();
    
    // Check if buttons are present
    expect(screen.getByRole('button', { name: /verify email & continue/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /use demo code/i })).toBeInTheDocument();
    expect(screen.getByText(/resend verification code/i)).toBeInTheDocument();
  });
  
  test('calls onVerify when Verify button is clicked', () => {
    render(
      <EmailVerification
        email="test@example.com"
        verificationCode="123456"
        setVerificationCode={mockSetVerificationCode}
        demoCode="123456"
        onVerify={mockOnVerify}
        onResendCode={mockOnResendCode}
        onUseDemoCode={mockOnUseDemoCode}
      />
    );
    
    fireEvent.click(screen.getByRole('button', { name: /verify email & continue/i }));
    expect(mockOnVerify).toHaveBeenCalledTimes(1);
  });
  
  test('calls onUseDemoCode when Use Demo Code button is clicked', () => {
    render(
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
    
    fireEvent.click(screen.getByRole('button', { name: /use demo code/i }));
    expect(mockOnUseDemoCode).toHaveBeenCalledTimes(1);
  });
  
  test('calls onResendCode when resend link is clicked', () => {
    render(
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
    
    fireEvent.click(screen.getByText(/resend verification code/i));
    expect(mockOnResendCode).toHaveBeenCalledTimes(1);
  });
});
