// Dark Theme Colors
export const darkThemeColors = {
  bgPrimary: '#1b202e',
  bgSecondary: '#232d41',
  textPrimary: '#f8fafc',
  textMuted: '#a9bddb',
  accent: '#2563eb',
  border: '#34405e',
  cardBg: '#232d41',
  footerBg: '#151a27',
} as const

// Light Theme Colors
export const lightThemeColors = {
  bgPrimary: '#f5f8fc',
  bgSecondary: '#ffffff',
  textPrimary: '#1b202e',
  textMuted: '#475569',
  accent: '#2563eb',
  border: '#d1dce8',
  cardBg: '#ffffff',
  footerBg: '#e9eff8',
} as const

// Common Colors
export const commonColors = {
  success: '#22c55e',
  error: '#ef4444',
  warning: '#f59e0b',
  info: '#3b82f6',
} as const

// CSS Variables (used in styled-components)
export const cssVars = {
  bgPrimary: 'var(--bg-primary)',
  bgSecondary: 'var(--bg-secondary)',
  textPrimary: 'var(--text-primary)',
  textMuted: 'var(--text-muted)',
  accent: 'var(--accent)',
  border: 'var(--border)',
  cardBg: 'var(--card-bg)',
  footerBg: 'var(--footer-bg)',
} as const
