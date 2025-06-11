
import React, { ReactElement } from 'react';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { RoleProvider } from '@/contexts/RoleContext';

// Import and re-export everything from @testing-library/react
export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';

// Import screen and fireEvent from @testing-library/react for direct export
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

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => rtlRender(ui, { wrapper: AllTheProviders, ...options });

// Export the customized render method
export { customRender as render };
