/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, type ReactNode } from 'react'

export const darkTheme = {
  bgPrimary: '#1b202e',
  bgSecondary: '#232d41',
  textPrimary: '#f8fafc',
  textMuted: '#a9bddb',
  accent: '#2b6cb0',
  border: '#34405e',
  cardBg: '#232d41',
  footerBg: '#151a27',
}

export const lightTheme = {
  bgPrimary: '#f5f8fc',
  bgSecondary: '#ffffff',
  textPrimary: '#1b202e',
  textMuted: '#475569',
  accent: '#2b6cb0',
  border: '#d1dce8',
  cardBg: '#ffffff',
  footerBg: '#e9eff8',
}

type ThemeContextValue = {
  isDark: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

type ThemeContextProviderProps = {
  children: ReactNode
}

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
    setIsDark((current) => !current)
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeMode = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useThemeMode must be used inside ThemeContextProvider')
  }

  return context
}
