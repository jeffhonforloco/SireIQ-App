
import React from 'react';
import { render } from '../../test-utils';
import { screen, fireEvent } from '@testing-library/react';
import EmailVerification from '@/components/get-started/EmailVerification';
import { describe, test, expect, vi, beforeEach } from 'vitest';

describe('EmailVerification', () => {
  const mockOnVerify = vi.fn();
  const mockOnResendCode = vi.fn();
  const mockOnUseDemoCode = vi.fn();
  const mockSetVerificationCode = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders email verification form', () => {
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

    expect(screen.getByText(/verify your email/i)).toBeInTheDocument();
    expect(screen.getByText(/test@example.com/)).toBeInTheDocument();
  });
});
