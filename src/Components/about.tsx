import styled from 'styled-components'

const Wrapper = styled.section`
  color: var(--text-primary);
  padding: 2rem;
`

const Container = styled.div`
  width: min(1180px, 100%);
  margin: 0 auto;
`

const Heading = styled.h2`
  margin: 0 0 2.5rem;
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  text-align: center;
`

const Bio = styled.p`
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--text-muted);
  margin: 0;
`

const About = () => {
  return (
    <Wrapper id="about">
      <Container>
        <Heading>About Me</Heading>
        <Bio>
         I am a Frontend Developer and Software Development student passionate about building user-centered digital experiences. I specialize in creating clean, responsive, and intuitive interfaces that focus on usability and performance.Currently, I am working on BatsiFix, a platform that connects users with trusted home service professionals, allowing me to apply real-world problem-solving and product development skills. Alongside this, I am continuously expanding my full-stack development knowledge, with a growing interest in scalable web applications and modern JavaScript frameworks.I enjoy turning ideas into functional, meaningful products and am driven by continuous learning, collaboration, and improving user experiences through thoughtful design and code.
        </Bio>
      </Container>
    </Wrapper>
  )
}

export default About