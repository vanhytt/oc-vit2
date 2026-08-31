// HYQ Hardwares - Design System Constants

export const COLORS = {
  // Primary Brand Colors
  primary: {
    red: '#E74C3C',
    redDark: '#C0392B',
    redLight: '#FADBD8',
  },
  
  // Neutral Colors
  dark: {
    charcoal: '#2C3E50',
    gray: '#34495E',
  },
  
  medium: {
    gray: '#7F8C8D',
  },
  
  light: {
    gray: '#ECF0F1',
  },
  
  base: {
    white: '#FFFFFF',
    black: '#000000',
  },
  
  // Semantic Colors
  semantic: {
    success: '#27AE60',
    warning: '#F39C12',
    error: '#E74C3C',
    info: '#3498DB',
  },
} as const;

export const TYPOGRAPHY = {
  fontFamily: {
    primary: '"Microsoft YaHei", "微软雅黑", Arial, sans-serif',
  },
  
  fontSize: {
    h1: '36px',
    h2: '28px',
    h3: '24px',
    h4: '20px',
    h5: '18px',
    h6: '16px',
    bodyLarge: '18px',
    body: '16px',
    bodySmall: '14px',
    caption: '12px',
  },
  
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  lineHeight: {
    tight: 1.3,
    normal: 1.5,
    relaxed: 1.6,
  },
} as const;

export const SPACING = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '80px',
} as const;

export const BREAKPOINTS = {
  mobile: '0px',
  tablet: '768px',
  desktop: '1200px',
  large: '1920px',
} as const;

export const SHADOWS = {
  sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
  md: '0 4px 8px rgba(0, 0, 0, 0.1)',
  lg: '0 8px 16px rgba(0, 0, 0, 0.15)',
  xl: '0 12px 28px rgba(0, 0, 0, 0.15)',
} as const;

export const BORDER_RADIUS = {
  sm: '4px',
  md: '6px',
  lg: '8px',
  full: '50%',
} as const;

export const TRANSITIONS = {
  fast: 'all 0.15s ease',
  default: 'all 0.3s ease-in-out',
  slow: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

export const Z_INDEX = {
  negative: -1,
  base: 0,
  dropdown: 100,
  sticky: 1000,
  modal: 2000,
  modalBackdrop: 1999,
  tooltip: 2001,
  notification: 2002,
} as const;

export const CONTAINER_MAX_WIDTH = {
  mobile: '100%',
  tablet: '750px',
  desktop: '1200px',
  large: '1400px',
} as const;
