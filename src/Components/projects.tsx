import styled from 'styled-components'

const projects = [
  {
    title: "Baker's Inn",
    description:
      "A modern bakery website with a clean design, showcasing products, online ordering, and a blog for recipes and baking tips.",
    image: '/bakersinn.png',
    githublink: 'https://github.com/pelagiasvare/mybakerinn.git',
    livelink: 'https://mybakerinn.netlify.app/',
  },
  {
    title: 'Furnite Project',
    description:
      'A sleek furniture e-commerce site featuring product showcases, a user-friendly shopping cart, and a seamless checkout process.',
    image: '/furnitureproject.png',
    githublink: 'https://github.com/pelagiasvare/myfurnitewebsite.git',
    livelink: 'https://pelagiasvare.github.io/myfurnitewebsite/',
  },
  {
    title: 'Foodie Project',
    description:
      'A modern food delivery website with intuitive navigation, cart interactions, and a streamlined checkout interface.',
    image: '/foodproject.png',
    githublink: 'https://github.com/pelagiasvare/myfoodproject.git',
    livelink: 'https://pelagiasvare.github.io/myfoodproject/',
  },
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
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 700;
  letter-spacing: -0.02em;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.a`
  min-height: 320px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #1e2d45;
  border-radius: 0.75rem;

  transition: transform 0.3s ease, border-color 0.3s ease;
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &:hover {
    border-color: var(--accent);
    transform: translateY(-4px);
  }
`

const ProjectVisual = styled.img`
  min-height: 150px;
  width: 100%;
  object-fit: cover;
  border-bottom: 1px solid #1e2d45;
  display: block;
`

const CardBody = styled.div`
  padding: 1.5rem;
`

const Title = styled.h3`
  margin: 0 0 0.75rem;
  font-size: 1.2rem;
  font-weight: 600;
`

const Description = styled.p`
  margin: 0;
  line-height: 1.65;
  font-size: 0.95rem;
`

const Projects = () => {
  return (
    <Wrapper id="projects">
      <Container>
        <Heading>Featured Projects</Heading>
        <Grid>
          {projects.map((project) => (
            <Card
              key={project.title}
              href={project.livelink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProjectVisual src={project.image} alt={project.title} />
              <CardBody>
                <Title>{project.title}</Title>
                <Description>{project.description}</Description>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </Container>
    </Wrapper>
  )
}

export default Projects