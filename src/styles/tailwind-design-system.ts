/**
 * SireIQ Design System - Enhanced Tailwind Extensions
 * 
 * This file contains the enhanced Tailwind extensions for the SireIQ design system.
 */

import { colors, typography, spacing, borderRadius, shadows, animations } from './design-tokens';

export const tailwindThemeExtensions = {
  extend: {
    colors: {
      // Enhanced brand colors
      brand: {
        primary: colors.brand.primary,
        secondary: colors.brand.secondary,
        accent: colors.brand.accent,
        purple: colors.brand.purple,
      },
      
      // Enhanced background system
      background: {
        primary: colors.background.primary,
        secondary: colors.background.secondary,
        tertiary: colors.background.tertiary,
        glass: colors.background.glass,
        overlay: colors.background.overlay,
      },
      
      // Enhanced text system
      text: {
        primary: colors.text.primary,
        secondary: colors.text.secondary,
        tertiary: colors.text.tertiary,
        accent: colors.text.accent,
        inverse: colors.text.inverse,
      },
      
      // Enhanced border system
      border: {
        primary: colors.border.primary,
        secondary: colors.border.secondary,
        accent: colors.border.accent,
        focus: colors.border.focus,
      },
      
      // Enhanced state colors
      success: colors.state.success,
      error: colors.state.error,
      warning: colors.state.warning,
      info: colors.state.info,
      
      // Keep legacy sireiq colors for backward compatibility
      sireiq: {
        dark: colors.background.primary,
        darker: colors.background.secondary,
        light: colors.text.primary,
        accent: colors.brand.accent,
        cyan: colors.brand.primary,
        cyan2: colors.brand.secondary,
        purple: colors.brand.purple,
      },
      
      // Add all neutral colors
      neutral: colors.neutral,
    },
    
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize,
    fontWeight: typography.fontWeight,
    
    boxShadow: {
      ...shadows,
      glow: shadows.glow,
      'glow-strong': shadows['glow-strong'],
      'glow-purple': shadows['glow-purple'],
      'glow-accent': shadows['glow-accent'],
    },
    
    keyframes: animations.keyframes,
    animation: animations.animation,
    
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-brand': colors.brand.gradient,
      'gradient-brand-subtle': colors.brand.gradientSubtle,
    },
    
    backdropBlur: {
      xs: '2px',
      sm: '4px',
      md: '8px',
      lg: '12px',
      xl: '16px',
      '2xl': '24px',
      '3xl': '32px',
    },
  },
};

/**
 * Enhanced component class definitions
 */
export const tailwindComponentClasses = {
  // Enhanced glass effect
  '.glass-effect': {
    '@apply': 'bg-background-glass backdrop-blur-xl border border-border-accent',
  },

  // Enhanced text gradient
  '.text-gradient': {
    '@apply': 'bg-clip-text text-transparent',
    'background-image': colors.brand.gradient,
  },

  // Enhanced glow effects
  '.glow': {
    'filter': `drop-shadow(0 0 8px ${colors.brand.primary}80)`,
  },
  
  '.glow-strong': {
    'filter': `drop-shadow(0 0 16px ${colors.brand.primary}CC)`,
  },

  // Enhanced button variants
  '.btn-primary': {
    '@apply': 'bg-gradient-to-r from-brand-primary to-brand-accent text-text-inverse hover:shadow-glow-strong px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105',
  },
  
  '.btn-secondary': {
    '@apply': 'bg-background-secondary border border-brand-primary text-brand-primary hover:bg-brand-primary/10 hover:shadow-glow px-6 py-3 rounded-lg font-medium transition-all duration-300',
  },
  
  '.btn-ghost': {
    '@apply': 'bg-transparent text-text-secondary hover:bg-background-secondary hover:text-text-primary px-6 py-3 rounded-lg font-medium transition-all duration-300',
  },

  // Enhanced card variants
  '.card-primary': {
    '@apply': 'bg-background-secondary border border-border-primary rounded-xl p-6 transition-all duration-300',
  },
  
  '.card-interactive': {
    '@apply': 'card-primary hover:border-brand-primary/50 hover:shadow-glow hover:scale-[1.02] cursor-pointer',
  },
  
  '.card-glass': {
    '@apply': 'glass-effect rounded-xl p-6 shadow-xl',
  },
  
  '.card-hero': {
    '@apply': 'bg-background-secondary border border-brand-primary/30 rounded-2xl p-8 shadow-glow-accent relative overflow-hidden',
  },

  // Enhanced input variants
  '.input-primary': {
    '@apply': 'bg-background-secondary border border-border-primary rounded-lg px-4 py-3 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all duration-200',
  },

  // Enhanced badge variants
  '.badge-primary': {
    '@apply': 'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-primary/20 text-brand-primary border border-brand-primary/30',
  },
  
  '.badge-success': {
    '@apply': 'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-success/20 text-success border border-success/30',
  },
  
  '.badge-warning': {
    '@apply': 'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-warning/20 text-warning border border-warning/30',
  },

  // Layout utilities
  '.container-fluid': {
    '@apply': 'w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  },
  
  '.section-padding': {
    '@apply': 'py-16 md:py-24 lg:py-32',
  },
  
  // Animation utilities
  '.animate-float': {
    '@apply': 'animate-bounce',
  },
  
  '.animate-glow': {
    '@apply': 'animate-glow',
  },
};
