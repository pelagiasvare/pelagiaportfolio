import styled from 'styled-components';

const Wrapper = styled.section`
  background: var(--bg-primary);
  color: var(--text-primary);
  padding: clamp(4rem, 8vw, 7rem) 1.5rem;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  letter-spacing: -0.3px;
  color: var(--text-primary);
`;

const Bio = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-muted);
`;

const About = () => {
  return (
    <Wrapper id="about">
      <Container>
        <Heading>About Me</Heading>
        <Bio>
          I'm a Frontend Developer and Software Development Student passionate about
          creating user-centered digital experiences. I specialize in building clean,
          responsive, and intuitive interfaces. Currently focused on BatsiFix, a platform
          connecting users with trusted home service professionals, while continuously
          expanding my full-stack development skills.
        </Bio>
      </Container>
    </Wrapper>
  );
};

export default About;                     
