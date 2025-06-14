import React, { ReactElement } from 'react';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { RoleProvider } from '@/contexts/RoleContext';

// Import and re-export everything from @testing-library/react
export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';

// Import testing utilities
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

// ---
// Deep-Dive QA Checklist for SireIQ (Guidance Only, not code)
// 
// FUNCTIONALITY
// - [ ] All authentication flows work (Sign Up, Email & Social Sign-In, Logout)
// - [ ] Role-based routes and components are correctly restricted
// - [ ] Chat AI assistants, input, and history all function as expected for each plan
// - [ ] Data upload, parsing, chart creation, export, and analytics display work across sample files
//
// USABILITY & ACCESSIBILITY
// - [ ] Is navigation clear for new users? (test mobile & desktop)
// - [ ] Are error states and validation (e.g., sign-in form, uploads) understandable, with actionable feedback?
// - [ ] Are all interactive elements accessible (keyboard navigation, focus states, aria-labels)?
//
// PERFORMANCE
// - [ ] Is page load performance reasonable given assets and data?
// - [ ] Are there any memory leaks or excessive console errors?
//
// SECURITY
// - [ ] Can users circumvent role restrictions by editing localStorage or tokens?
// - [ ] Are forms and file uploads protected from basic injection/XSS?
//
// DESIGN CONSISTENCY
// - [ ] Do all inputs, buttons, cards, and dialogs use consistent visual styling and spacing?
// - [ ] Are gradients/text colors/brand accents consistent with SireIQ’s palette?
//
// SUGGESTED IMPROVEMENTS
// - Show more contextual help/error text in forms and on chart config
// - Offer feedback/toasts for all asynchronous actions (uploads, exports, login errors, etc.)
// - Add more real user scenarios to E2E/regression tests
// End QA Checklist --- //
