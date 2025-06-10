/**
 * SireIQ Design System - Enhanced Design Tokens
 * 
 * This file contains all the design tokens used throughout the application.
 * Enhanced with a more sophisticated color palette and better design consistency.
 */

export const colors = {
  // Enhanced brand colors with more depth
  brand: {
    primary: '#00D4FF',        // Bright cyan - Primary brand color
    secondary: '#0099CC',      // Deeper cyan - Secondary brand color
    accent: '#6366F1',         // Indigo - Accent color for highlights
    purple: '#8B5CF6',         // Purple variant
    gradient: 'linear-gradient(135deg, #00D4FF 0%, #6366F1 50%, #8B5CF6 100%)',
    gradientSubtle: 'linear-gradient(135deg, #00D4FF/10 0%, #6366F1/10 50%, #8B5CF6/10 100%)',
  },
  
  // Enhanced background system
  background: {
    primary: '#0A0A0A',        // Pure dark background
    secondary: '#111111',      // Card background
    tertiary: '#1A1A1A',      // Elevated elements
    glass: 'rgba(17, 17, 17, 0.8)', // Glass effect background
    overlay: 'rgba(0, 0, 0, 0.9)',  // Modal overlays
  },
  
  // Enhanced text hierarchy
  text: {
    primary: '#FFFFFF',        // Primary text
    secondary: '#B4B4B4',      // Secondary text
    tertiary: '#737373',       // Muted text
    accent: '#00D4FF',         // Accent text
    inverse: '#0A0A0A',        // Text on light backgrounds
  },
  
  // Enhanced state colors
  state: {
    success: '#10B981',        // Success state
    error: '#EF4444',          // Error/danger state
    warning: '#F59E0B',        // Warning state
    info: '#3B82F6',           // Info state
    successBg: 'rgba(16, 185, 129, 0.1)',
    errorBg: 'rgba(239, 68, 68, 0.1)',
    warningBg: 'rgba(245, 158, 11, 0.1)',
    infoBg: 'rgba(59, 130, 246, 0.1)',
  },
  
  // Enhanced neutral palette with better contrast
  neutral: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0A0A0A',
  },
  
  // Border system
  border: {
    primary: 'rgba(255, 255, 255, 0.1)',
    secondary: 'rgba(255, 255, 255, 0.05)',
    accent: 'rgba(0, 212, 255, 0.3)',
    focus: 'rgba(0, 212, 255, 0.5)',
  },
};

export const typography = {
  // Enhanced font families
  fontFamily: {
    sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
    display: ['"SF Pro Display"', 'Inter', 'system-ui', 'sans-serif'],
    mono: ['"JetBrains Mono"', 'Consolas', 'Monaco', 'monospace'],
  },
  
  // Enhanced font sizes with better scale
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
    '8xl': '6rem',      // 96px
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
  sm: '0.25rem',      // 4px
  DEFAULT: '0.5rem',  // 8px
  md: '0.75rem',      // 12px
  lg: '1rem',         // 16px
  xl: '1.5rem',       // 24px
  '2xl': '2rem',      // 32px
  '3xl': '3rem',      // 48px
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
  glow: '0 0 20px rgba(0, 212, 255, 0.4)',
  'glow-strong': '0 0 30px rgba(0, 212, 255, 0.6)',
  'glow-purple': '0 0 20px rgba(139, 92, 246, 0.4)',
  'glow-accent': '0 0 20px rgba(99, 102, 241, 0.4)',
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
    glow: {
      '0%, 100%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.4)' },
      '50%': { boxShadow: '0 0 30px rgba(0, 212, 255, 0.8)' },
    },
  },
  animation: {
    pulse: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    fadeIn: 'fadeIn 0.5s ease-out forwards',
    fadeOut: 'fadeOut 0.5s ease-out forwards',
    slideInFromRight: 'slideInFromRight 0.3s ease-out',
    slideOutToRight: 'slideOutToRight 0.3s ease-out',
    glow: 'glow 2s ease-in-out infinite',
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
  glow: 'text-shadow: 0 0 15px rgba(60, 223, 255, 0.3)',
  glowImage: 'filter: drop-shadow(0 0 8px rgba(60, 223, 255, 0.5))',
};

// Enhanced semantic tokens
export const semanticTokens = {
  // Mapping semantic meaning to design tokens
  
  // Components
  button: {
    primary: {
      bg: 'bg-gradient-to-r from-brand-primary to-brand-accent',
      text: 'text-text-inverse',
      hover: 'hover:shadow-glow transition-all duration-300',
      border: 'border-brand-primary',
    },
    secondary: {
      bg: 'bg-background-secondary',
      border: 'border-brand-primary',
      text: 'text-brand-primary',
      hover: 'hover:bg-brand-primary/10 hover:shadow-glow-strong',
    },
    ghost: {
      bg: 'bg-transparent',
      text: 'text-text-secondary',
      hover: 'hover:bg-background-secondary hover:text-text-primary',
    },
  },
  
  card: {
    primary: {
      bg: 'bg-background-secondary',
      border: 'border-border-primary',
      hover: 'hover:border-brand-primary/50 hover:shadow-glow',
    },
    glass: {
      bg: 'bg-background-glass backdrop-blur-xl',
      border: 'border-border-accent',
      shadow: 'shadow-xl',
    },
  },
  
  input: {
    bg: 'bg-background-secondary',
    border: 'border-border-primary',
    focusBorder: 'focus:border-brand-primary',
    focusRing: 'focus:ring-2 focus:ring-brand-primary/20',
    text: 'text-text-primary',
    placeholder: 'placeholder:text-text-tertiary',
  },
};
