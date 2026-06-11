import styled from 'styled-components'

const skills = [
  'React / Next.js',
  'Node.js / Python',
  'TypeScript',
  'CSS / Styled-Components',
  'Git / GitHub',
]

const Wrapper = styled.section`
  background: var(--bg-primary);
  color: var(--text-primary);
  padding: 2rem;
`

const Container = styled.div`
  width: min(1180px, 100%);
  margin: 0 auto;
`

const Heading = styled.h2`
  margin: 0 0 2rem;
  font-size: clamp(1.8rem, 3vw, 2.2rem);
  font-weight: 700;
  letter-spacing: -0.02em;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem 2rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
`

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.4rem 0;
  border-bottom: 1px dashed #1e2d45;
  color: #7e91a8;
  font-size: 1rem;
  font-weight: 400;

  &::before {
    content: '>';
    margin-right: 12px;
    color: #6366f1;
    font-size: 0.9rem;
    font-weight: 700;
  }

  @media (max-width: 640px) {
    &::before {
      margin-right: 10px;
    }
  }
`

const Skills = () => {
  return (
    <Wrapper id="skills">
      <Container>
        <Heading>Skills & Technologies</Heading>
        <Grid>
          {skills.map((skill) => (
            <SkillItem key={skill}>{skill}</SkillItem>
          ))}
        </Grid>
      </Container>
    </Wrapper>
  )
}

export default Skills