import { useState } from 'react'
import styled from 'styled-components'

type Project = {
  title: string
  description: string
  image: string
  githublink: string
  livelink: string
  tags: string[]
  category: 'frontend' | 'fullstack' | 'backend' | 'business'
  categoryLabel: string
}

const projects: Project[] = [
  {
    title: "Baker's Inn",
    description:
      "A modern bakery website with a clean design, showcasing products, online ordering, and a blog for recipes and baking tips.",
    image: '/bakersinn.png',
    githublink: 'https://github.com/pelagiasvare/mybakerinn.git',
    livelink: 'https://mybakerinn.netlify.app/',
    tags: ['React', 'Styled-Components', 'Responsive'],
    category: 'frontend',
    categoryLabel: 'FRONTEND',
  },
  {
    title: 'Furnite Project',
    description:
      'A sleek furniture e-commerce site featuring product showcases, a user-friendly shopping cart, and a seamless checkout process.',
    image: '/furnitureproject.png',
    githublink: 'https://github.com/pelagiasvare/myfurnitewebsite.git',
    livelink: 'https://pelagiasvare.github.io/myfurnitewebsite/',
    tags: ['React', 'JavaScript', 'CSS'],
    category: 'frontend',
    categoryLabel: 'FRONTEND',
  },
  {
    title: 'Foodie Project',
    description:
      'A modern food delivery website with intuitive navigation, cart interactions, and a streamlined checkout interface.',
    image: '/foodproject.png',
    githublink: 'https://github.com/pelagiasvare/myfoodproject.git',
    livelink: 'https://pelagiasvare.github.io/myfoodproject/',
    tags: ['React', 'JavaScript', 'CSS'],
    category: 'frontend',
    categoryLabel: 'FRONTEND',
  },
]

const categories = ['All', 'Frontend', 'Backend', 'Full Stack'] as const
type Category = (typeof categories)[number]

const Wrapper = styled.section`
  background: var(--bg-primary);
  color: var(--text-primary);
  padding: 4rem 2rem;
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

const FilterRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`

const FilterButton = styled.button<{ $active: boolean }>`
  padding: 0.75rem 2rem;
  border-radius: 8px;
  border: 1.5px solid ${({ $active }) => ($active ? 'var(--accent)' : 'var(--border)')};
  background: ${({ $active }) => ($active ? 'var(--accent)' : 'transparent')};
  color: ${({ $active }) => ($active ? '#ffffff' : 'var(--text-muted)')};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--accent);
    color: ${({ $active }) => ($active ? '#ffffff' : 'var(--accent)')};
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0;
  border-top: 1px solid var(--border);
  border-left: 1px solid var(--border);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  background: var(--bg-primary);
  transition: background 0.2s ease;

  &:hover {
    background: var(--card-bg, rgba(255, 255, 255, 0.02));
  }
`

const CardTop = styled.div`
  padding: 1.25rem 1.5rem 0.75rem;
`

const CategoryLabel = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--text-muted);
  text-transform: uppercase;
`

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  margin: 0 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--border);
`

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;

  ${Card}:hover & {
    transform: scale(1.03);
  }
`

const CardBody = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Title = styled.h3`
  margin: 0 0 0.75rem;
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
`

const Description = styled.p`
  margin: 0 0 1.5rem;
  line-height: 1.65;
  font-size: 0.9rem;
  color: var(--text-muted);
  flex: 1;
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

const Tag = styled.span`
  display: inline-block;
  padding: 0.3rem 0.85rem;
  border-radius: 6px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text-muted);
  font-size: 0.78rem;
  font-weight: 500;
`

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
`

const FooterLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-primary);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--accent);
  }

  svg {
    opacity: 0.7;
  }
`

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All')

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter(
          (p) => p.category === activeCategory.toLowerCase().replace(' ', '')
        )

  return (
    <Wrapper id="projects">
      <Container>
        <Heading>Featured Projects</Heading>
        <FilterRow>
          {categories.map((cat) => (
            <FilterButton
              key={cat}
              $active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </FilterButton>
          ))}
        </FilterRow>
        <Grid>
          {filteredProjects.map((project) => (
            <Card key={project.title}>
              <CardTop>
                <CategoryLabel>{project.categoryLabel}</CategoryLabel>
              </CardTop>
              <ImageWrapper>
                <ProjectImage src={project.image} alt={project.title} loading="lazy" />
              </ImageWrapper>
              <CardBody>
                <Title>{project.title}</Title>
                <Description>{project.description}</Description>
                <Tags>
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </Tags>
                <CardFooter>
                  <FooterLink href={project.livelink} target="_blank" rel="noopener noreferrer">
                    Live Demo <ExternalIcon />
                  </FooterLink>
                  {project.githublink && (
                    <FooterLink href={project.githublink} target="_blank" rel="noopener noreferrer">
                      GitHub <GithubIcon />
                    </FooterLink>
                  )}
                </CardFooter>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </Container>
    </Wrapper>
  )
}

export default Projects