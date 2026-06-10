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
  padding: clamp(4rem, 8vw, 7rem) 1.5rem;
`

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const Heading = styled.h2`
  margin-bottom: 2rem;
  color: var(--text-primary);
  font-size: 2.2rem;
  font-weight: 600;
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
  border-bottom: 1px dashed rgba(100, 116, 139, 0.3);
  color: var(--text-muted);
  font-size: 1rem;
  font-weight: 400;

  &::before {
    content: '>';
    margin-right: 12px;
    color: var(--accent);
    font-size: 0.9rem;
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
