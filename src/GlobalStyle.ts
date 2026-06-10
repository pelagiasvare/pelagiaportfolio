import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg-primary: ${({ theme }) => theme.bgPrimary};
    --bg-secondary: ${({ theme }) => theme.bgSecondary};
    --text-primary: ${({ theme }) => theme.textPrimary};
    --text-muted: ${({ theme }) => theme.textMuted};
    --accent: ${({ theme }) => theme.accent};
    --border: ${({ theme }) => theme.border};
    --card-bg: ${({ theme }) => theme.cardBg};
    --footer-bg: ${({ theme }) => theme.footerBg};

    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    color: var(--text-primary);
    background: var(--bg-primary);
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    background: var(--bg-primary);
    color: var(--text-primary);
  }

  button,
  input,
  textarea {
    font: inherit;
  }

  button {
    border: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }
`
