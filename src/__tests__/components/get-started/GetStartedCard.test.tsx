
import React from 'react';
import { render, screen } from '@testing-library/react';
import GetStartedCard from '@/components/get-started/GetStartedCard';
import { describe, test, expect, vi, beforeEach } from 'vitest';

describe('GetStartedCard', () => {
  const mockProps = {
    step: 1,
    email: 'test@example.com',
    verificationCode: '',
    setVerificationCode: vi.fn(),
    demoCode: '123456',
    onVerify: vi.fn(),
    onResendCode: vi.fn(),
    onUseDemoCode: vi.fn(),
    onRegistrationSuccess: vi.fn()
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders registration form on step 1', () => {
    render(<GetStartedCard {...mockProps} />);

    expect(screen.getByText(/create an account/i)).toBeInTheDocument();
  });

  test('renders email verification on step 2', () => {
    render(<GetStartedCard {...mockProps} step={2} />);

    expect(screen.getByText(/verify your email/i)).toBeInTheDocument();
  });
});
