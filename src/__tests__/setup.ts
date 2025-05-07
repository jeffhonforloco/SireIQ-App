
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';

// Add custom matchers from jest-dom
expect.extend(matchers);

// Run cleanup after each test
afterEach(() => {
  cleanup();
});
