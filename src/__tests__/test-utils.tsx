
import React, { ReactElement } from 'react';
import { render as rtlRender, RenderOptions, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { RoleProvider } from '@/contexts/RoleContext';

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

// Re-export everything from testing-library
export * from '@testing-library/react';

// Explicitly re-export screen and fireEvent
export { screen, fireEvent, customRender as render };
