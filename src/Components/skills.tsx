import styled from 'styled-components'

const skills = [
  { label: 'React', image: '/React_Logo_PNG_Vector__SVG__Free_Download-removebg-preview.png' },
  { label: 'JavaScript', image: '/JavaScript_Tips-removebg-preview.png' },
  { label: 'HTML', image: '/HTML-removebg-preview.png' },
  { label: 'GitHub', image: '/Diffraction_Icon__GitHub_-removebg-preview.png' },
  { label: 'Vite', image: '/What_is_Vitejs__An_Overview_of_the_New_Front-end_Build_Tool-removebg-preview.png' },
  { label: 'Download', image: '/download-removebg-preview.png' },
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
  margin: 0 0 2.5rem;
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  text-align: center;
`


const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
`

const IconImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`

const Skills = () => {
  return (
    <Wrapper id="skills">
      <Container>
        <Heading>Skills & Technologies</Heading>
      
        <FlexRow>
          {skills.map((skill) => (
            <IconImg key={skill.label} src={skill.image} alt={skill.label} />
          ))}
        </FlexRow>
      </Container>
    </Wrapper>
  )
}

export default Skills