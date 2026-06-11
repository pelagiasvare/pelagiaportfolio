import styled from 'styled-components'
import { useThemeMode } from '../ThemeContext'

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  padding:0.1rem 2rem;
  border-bottom: 1px solid var(--border);
  backdrop-filter: blur(16px);
`

const Nav = styled.nav`
  width: min(1180px, 100%);
  min-height: 76px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
`

const Logo = styled.h1`
  margin: 0;
  color: var(--accent);
  font-size: 1.25rem;
  font-weight: 800;
`

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(0.75rem, 3vw, 2rem);
`

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(0.75rem, 3vw, 2rem);

  a {
    color: var(--text-primary);
    font-size: 0.98rem;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: var(--accent);
  }

  @media (max-width: 640px) {
    display: none;
  }
`

const ThemeToggle = styled.button`
  width: 38px;
  height: 38px;
  display: inline-grid;
  place-items: center;
  border: 1px solid var(--accent);
  background: transparent;
  color: var(--accent);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--accent);
    color: var(--bg-primary);
  }

  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 3px;
  }

  svg {
    width: 22px;
    height: 22px;
  }
`

const Header = () => {
  const { isDark, toggleTheme } = useThemeMode()

  return (
    <Wrapper>
      <Nav aria-label="Primary navigation">
        <a href="#home" aria-label="Home">
          <Logo>PS</Logo>
        </a>

        <NavActions>
          <NavLinks>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </NavLinks>

          <ThemeToggle
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="currentColor"
              >
                <path d="M565-395q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm-226.5 56.5Q280-397 280-480t58.5-141.5Q397-680 480-680t141.5 58.5Q680-563 680-480t-58.5 141.5Q563-280 480-280t-141.5-58.5ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="currentColor"
              >
                <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
              </svg>
            )}
          </ThemeToggle>
        </NavActions>
      </Nav>
    </Wrapper>
  )
}

export default Header