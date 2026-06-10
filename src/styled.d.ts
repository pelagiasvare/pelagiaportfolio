import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    bgPrimary: string
    bgSecondary: string
    textPrimary: string
    textMuted: string
    accent: string
    border: string
    cardBg: string
    footerBg: string
  }
}
