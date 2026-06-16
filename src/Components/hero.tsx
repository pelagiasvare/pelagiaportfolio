import { useEffect, useState } from 'react'
import styled from 'styled-components';

const Wrapper = styled.section`
  min-height: 92vh;
  display: flex;
  align-items: center;
  background: var(--bg-primary);
  color: var(--accent);
  padding: 2rem;
  margin-top: 5rem;
`

const Container = styled.div`
  width: min(1180px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 4rem;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`

const SmallText = styled.p`
  margin: 0;
  color: var(--accent);
  font-size: clamp(0.9rem, 1.2vw, 1.1rem);
  letter-spacing: 0.03em;
`

const BigName = styled.h1`
  margin: 0;
  color: var(--text-primary);
  font-size: clamp(2.8rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
`

const RoleRow = styled.div`
  display: flex;
  align-items: center;
  min-height: 3rem;
`

const RoleText = styled.span`
  color: var(--accent);
  font-size: clamp(1.4rem, 3vw, 2.2rem);
  font-weight: 800;
`

const Cursor = styled.span`
  display: inline-block;
  width: 3px;
  height: clamp(1.4rem, 2.5vw, 2rem);
  background: var(--accent);
  margin-left: 6px;
  border-radius: 2px;
  animation: blink 0.9s infinite;

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`

const Description = styled.p`
  margin: 0;
  color: var(--text-muted);
  font-size: clamp(0.95rem, 1.3vw, 1.1rem);
  line-height: 1.7;
  max-width: 560px;
`

const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`

const BaseButton = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  width: 150px;
  height: 52px;
  padding: 0 1.75rem;
  border-radius: 6px;
  border: 1.5px solid var(--accent);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  white-space: nowrap;
  letter-spacing: 0.01em;
`

const SolidButton = styled.button`
  ${BaseButton}
  background: var(--accent);
  color: #ffffff;

  &:hover {
    background: transparent;
    color: var(--accent);
  }
`

const OutlineButton = styled.button`
  ${BaseButton}
  background: transparent;
  color: var(--accent);

  &:hover {
    background: var(--accent);
    color: #ffffff;
  }
`

const VideoCircle = styled.div`
  width: min(500px, 80vw);
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--accent);
  box-shadow: 0 0 60px rgba(30, 144, 255, 0.2);
  justify-self: center;
`

const VideoEl = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`



const ROLES = ['Software Developer']

function useTypewriter() {
  const [displayText, setDisplayText] = useState('')
  const [whichWord, setWhichWord] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = ROLES[whichWord]

    if (!isDeleting && displayText === currentWord) {
      const timer = setTimeout(() => setIsDeleting(true), 1800)
      return () => clearTimeout(timer)
    }

    if (isDeleting && displayText === '') {
      const timer = setTimeout(() => {
        setIsDeleting(false)
        setWhichWord(prev => (prev + 1) % ROLES.length)
      }, 45)
      return () => clearTimeout(timer)
    }

    const speed = isDeleting ? 45 : 80

    const timer = setTimeout(() => {
      setDisplayText(prev =>
        isDeleting
          ? prev.slice(0, -1)
          : currentWord.slice(0, prev.length + 1)
      )
    }, speed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, whichWord])

  return displayText
}

const Hero = () => {
  const typedRole = useTypewriter()

  return (
    <Wrapper id="home">
      <Container>
        <Content>
          <SmallText>Hello, I'm</SmallText>
          <BigName>Pelagia Svare</BigName>
          <RoleRow>
            <RoleText>{typedRole}</RoleText>
            <Cursor />
          </RoleRow>
          <Description>
            Frontend Developer and Software Development Student dedicated to
            creating clean, responsive, and user-friendly applications.
          </Description>
          <ButtonRow>
            <SolidButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Hire Me 
            </SolidButton>
            <OutlineButton onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects 
            </OutlineButton>
          </ButtonRow>
        </Content>
        <VideoCircle>
          <VideoEl autoPlay muted loop playsInline>
            <source src="/hero-video.mp4" type="video/mp4" />
          </VideoEl>
        </VideoCircle>
      </Container>
    </Wrapper>
  )
}

export default Hero