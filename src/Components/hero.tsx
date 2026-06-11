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
  font-size: 1rem;
`

const BigName = styled.h1`
  margin: 0;
  color: var(--text-primary);
  font-size: 4rem;
  font-weight: 800;
  line-height: 1;
`

const RoleRow = styled.div`
  display: flex;
  align-items: center;
  min-height: 2.5rem;
`

const RoleText = styled.span`
  color: var(--accent);
  font-size: 2rem;
  font-weight: 800;
`

const Cursor = styled.span`
  display: inline-block;
  width: 3px;
  height: 1.8rem;
  background: var(--accent);
  margin-left: 4px;
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
  font-size: 1.05rem;
  line-height: 1.7;
  max-width: 560px;
`

const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

`

const SolidButton = styled.button`
padding : 10px;
border-radius: 9px;
border:1px solid var(--accent);
background-color:transparent;
color: var(--accent);
width:150px;
height: 60px;
align-items: center;
  
  &:hover {
    background: transparent;
    color: var(--accent);
  }
`

const OutlineButton = styled.button`
padding : 10px;
border-radius: 9px;
border-color:#fff;
background-color:var(--accent);
border:1px solid var(--accent);
color: var(--bg-primary);
width:150px;
height: 60px;
align-items: center;
justify-content: center;

  &:hover {
    background: var(--accent);
    color: var(--bg-primary);
  }

`

const VideoCircle = styled.div`
  width: min(340px, 60vw);
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--accent);
  box-shadow: 0 0 60px rgba(129, 140, 248, 0.2);
  justify-self: center;
`

const VideoEl = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

const ROLES = [
  'Software Developer',
]

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
            creating clean, responsive, and user-friendly applications. Currently
            building BatsiFix, a platform that connects users with trusted home
            service professionals.
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
            <source src="/WhatsApp%20Video%202026-06-09%20at%2010.25.00.mp4" type="video/mp4" />
          </VideoEl>
        </VideoCircle>
      </Container>
    </Wrapper>
  )
}

export default Hero