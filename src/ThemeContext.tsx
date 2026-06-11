/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, type ReactNode } from 'react'
import { darkThemeColors, lightThemeColors } from './constants/colors'

export const darkTheme = darkThemeColors

export const lightTheme = lightThemeColors

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
