
/**
 * SireIQ Design System - Design Tokens
 * 
 * This file contains all the design tokens used throughout the application.
 * These tokens ensure consistency in the UI and make it easier to maintain
 * the design system.
 */

export const colors = {
  // Primary brand colors
  brand: {
    primary: '#3CDFFF',      // Cyan - Primary brand color
    secondary: '#00A3C4',    // Darker cyan - Secondary brand color
    accent: '#7134FA',       // Purple - Accent color for highlights
    gradient: 'linear-gradient(90deg, #3CDFFF 0%, #00A3C4 100%)',
  },
  
  // Background colors
  background: {
    dark: '#0d1117',         // Primary dark background
    darker: '#080a0f',       // Darker background for cards/sections
    light: '#f3f6fc',        // Light background (for potential light mode)
  },
  
  // Text colors
  text: {
    light: '#f3f6fc',        // Primary text on dark backgrounds
    muted: '#9EA3AE',        // Secondary/muted text
    dark: '#1A1F2C',         // Dark text (for potential light mode)
  },
  
  // UI element states
  state: {
    success: '#10B981',      // Success state
    error: '#EF4444',        // Error/danger state
    warning: '#F59E0B',      // Warning state
    info: '#3B82F6',         // Info state
  },
  
  // Neutral palette
  neutral: {
    50: '#f3f6fc',
    100: '#e6e9ef',
    200: '#c5cad3',
    300: '#9EA3AE',
    400: '#767C89',
    500: '#5A6072',
    600: '#434857',
    700: '#2C303C',
    800: '#1A1F2C',
    900: '#080a0f',
  },
};

export const typography = {
  // Font families
  fontFamily: {
    sans: ['Inter', 'sans-serif'],
    display: ['Montserrat', 'sans-serif'],
  },
  
  // Font sizes (in rem)
  fontSize: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
  },
  
  // Font weights
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  
  // Line heights
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  
  // Letter spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
};

export const spacing = {
  // Base spacing unit: 4px (0.25rem)
  0: '0',
  0.5: '0.125rem',    // 2px
  1: '0.25rem',       // 4px
  1.5: '0.375rem',    // 6px
  2: '0.5rem',        // 8px
  2.5: '0.625rem',    // 10px
  3: '0.75rem',       // 12px
  3.5: '0.875rem',    // 14px
  4: '1rem',          // 16px
  5: '1.25rem',       // 20px
  6: '1.5rem',        // 24px
  7: '1.75rem',       // 28px
  8: '2rem',          // 32px
  9: '2.25rem',       // 36px
  10: '2.5rem',       // 40px
  11: '2.75rem',      // 44px
  12: '3rem',         // 48px
  14: '3.5rem',       // 56px
  16: '4rem',         // 64px
  20: '5rem',         // 80px
  24: '6rem',         // 96px
  28: '7rem',         // 112px
  32: '8rem',         // 128px
  36: '9rem',         // 144px
  40: '10rem',        // 160px
  44: '11rem',        // 176px
  48: '12rem',        // 192px
  52: '13rem',        // 208px
  56: '14rem',        // 224px
  60: '15rem',        // 240px
  64: '16rem',        // 256px
  72: '18rem',        // 288px
  80: '20rem',        // 320px
  96: '24rem',        // 384px
};

export const borderRadius = {
  none: '0',
  sm: '0.125rem',     // 2px
  DEFAULT: '0.25rem', // 4px
  md: '0.375rem',     // 6px
  lg: '0.5rem',       // 8px
  xl: '0.75rem',      // 12px
  '2xl': '1rem',      // 16px
  '3xl': '1.5rem',    // 24px
  full: '9999px',     // Fully rounded
};

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  glow: '0 0 15px rgba(60, 223, 255, 0.3)',
  'glow-strong': '0 0 20px rgba(60, 223, 255, 0.5)',
};

export const animations = {
  keyframes: {
    pulse: {
      '0%, 100%': { opacity: '1' },
      '50%': { opacity: '0.5' },
    },
    fadeIn: {
      '0%': { opacity: '0', transform: 'translateY(10px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' },
    },
    fadeOut: {
      '0%': { opacity: '1', transform: 'translateY(0)' },
      '100%': { opacity: '0', transform: 'translateY(10px)' },
    },
    slideInFromRight: {
      '0%': { transform: 'translateX(100%)' },
      '100%': { transform: 'translateX(0)' },
    },
    slideOutToRight: {
      '0%': { transform: 'translateX(0)' },
      '100%': { transform: 'translateX(100%)' },
    },
  },
  animation: {
    pulse: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    fadeIn: 'fadeIn 0.5s ease-out forwards',
    fadeOut: 'fadeOut 0.5s ease-out forwards',
    slideInFromRight: 'slideInFromRight 0.3s ease-out',
    slideOutToRight: 'slideOutToRight 0.3s ease-out',
  },
};

export const zIndices = {
  0: '0',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
  auto: 'auto',
};

export const effects = {
  // CSS utility classes for common effects
  glassEffect: 'bg-opacity-10 backdrop-blur-lg border border-white/10 bg-white/5',
  textGradient: 'bg-clip-text text-transparent bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2',
  glow: 'text-shadow: 0 0 15px rgba(60, 223, 255, 0.5)',
  glowImage: 'filter: drop-shadow(0 0 8px rgba(60, 223, 255, 0.5))',
};

// Design system semantic tokens
export const semanticTokens = {
  // Mapping semantic meaning to design tokens
  
  // Components
  button: {
    primary: {
      bg: 'bg-gradient-to-r from-sireiq-cyan to-sireiq-cyan2',
      text: 'text-sireiq-darker',
      hover: 'hover:opacity-90',
    },
    secondary: {
      bg: 'bg-transparent',
      border: 'border border-sireiq-cyan',
      text: 'text-sireiq-cyan',
      hover: 'hover:bg-sireiq-cyan/10',
    },
    danger: {
      bg: 'bg-transparent',
      border: 'border border-red-500/50',
      text: 'text-red-400',
      hover: 'hover:bg-red-500/10',
    },
  },
  
  card: {
    bg: 'bg-sireiq-darker',
    border: 'border border-sireiq-accent/30',
    hover: 'hover:border-sireiq-cyan/50 transition-all hover:shadow-[0_0_15px_rgba(60,223,255,0.15)]',
    glass: 'glass-effect',
  },
  
  input: {
    bg: 'bg-gray-800',
    border: 'border border-gray-700',
    focusBorder: 'focus:border-sireiq-accent',
    focusRing: 'focus:ring-2 focus:ring-sireiq-accent/50',
    text: 'text-white',
    placeholder: 'placeholder:text-gray-400',
  },
};

