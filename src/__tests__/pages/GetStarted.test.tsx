import React from 'react';
import { render, screen, fireEvent } from '@/__tests__/test-utils';
import GetStarted from '@/pages/GetStarted';
import { describe, test, expect, vi, beforeEach } from 'vitest';

// Mock the useNavigate hook
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('GetStarted', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  
  test('renders get started page', () => {
    render(<GetStarted />);
    
    expect(screen.getByText(/get started with sireiq/i)).toBeInTheDocument();
  });
});
