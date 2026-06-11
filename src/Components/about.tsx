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
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 800;
  margin: 0 0 1.5rem 0;
  color: var(--text-primary);
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
          I'm a Frontend Developer and Software Development Student passionate about creating user-centered digital experiences. I specialize in building clean, responsive, and intuitive interfaces. Currently focused on BatsiFix, a platform connecting users withtrusted home service professionals, while continuously expanding my full-stack development skills.
        </Bio>
      </Container>
    </Wrapper>
  )
}

export default About