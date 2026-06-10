import { ThemeProvider } from 'styled-components'
import About from './Components/about'
import Contact from './Components/contact'
import Header from './Components/header'
import Hero from './Components/hero'
import Projects from './Components/projects'
import { GlobalStyle } from './GlobalStyle'
import { ThemeContextProvider, darkTheme, lightTheme, useThemeMode } from './ThemeContext'
import Skills from './Components/skills'

const PortfolioApp = () => {
  const { isDark } = useThemeMode()

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </ThemeProvider>
  )
}

function App() {
  return (
    <ThemeContextProvider>
      <PortfolioApp />
    </ThemeContextProvider>
  )
}

export default App
