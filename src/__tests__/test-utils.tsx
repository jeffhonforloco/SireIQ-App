

import React, { ReactElement } from 'react';
import { render as rtlRender, RenderOptions, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { RoleProvider } from '@/contexts/RoleContext';

// Import from @testing-library/user-event
import userEvent from '@testing-library/user-event';

// Re-export everything from testing-library
export * from '@testing-library/react';

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

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => rtlRender(ui, { wrapper: AllTheProviders, ...options });

// Export the customized render method, screen, and userEvent
export { customRender as render, screen, userEvent as fireEvent };

