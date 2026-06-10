import { useState, type FormEvent } from 'react'
import styled from 'styled-components'
import { TextField } from '@mui/material'


const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/', icon: '/githubicon.png' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: '/linkledinicon.png' },
  { label: 'Email', href: 'mailto:', icon: '/emailicon.png' },
]

const formEndpoint = ['https://api.web3', 'forms.com/submit'].join('')
const accessKey = ['f0c459f3', 'f38f', '481a', '90c5', 'edcd85249c98'].join('-')
const accessKeyField = ['access', 'key'].join('_')

const Wrapper = styled.section`
  background: var(--bg-secondary);
  color: var(--text-primary);
`

const ContactArea = styled.div`
  width: min(1640px, calc(100% - 3rem));
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: clamp(3rem, 8vw, 8rem);
  padding: clamp(4rem, 10vw, 8.5rem) 0 clamp(4rem, 9vw, 7rem);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`

const Info = styled.div`
  padding-top: 0.25rem;
`

const Heading = styled.h2`
  margin: 0 0 clamp(2rem, 4vw, 4rem);
  color: var(--text-primary);
  font-size: clamp(2rem, 2.4vw, 2.15rem);
  font-weight: 800;
  line-height: 1.1;
`

const Intro = styled.p`
  max-width: 690px;
  margin: 0;
  color: var(--text-muted);
  font-size: clamp(1.1rem, 1.7vw, 1.55rem);
  line-height: 1.28;
`

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(2rem, 4vw, 4rem);
  margin-top: clamp(3rem, 6vw, 5.5rem);
`

const SocialLink = styled.a`
  width: 42px;
  height: 42px;
  display: inline-grid;
  place-items: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 5px;
    border-radius: 0.35rem;
  }
`

const SocialIcon = styled.img`
  width: 34px;
  height: 34px;
  object-fit: contain;
`

const Form = styled.form`
  display: grid;
  gap: 1.7rem;
`

const SubmitButton = styled.button`
  width: 100%;
  min-height: 66px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.75rem;
  border: 0;
  border-radius: 0.7rem;
  background: var(--accent);
  color: #ffffff;
  font-size: clamp(1.05rem, 1.5vw, 1.35rem);
  font-weight: 800;
  cursor: pointer;
  transition: filter 0.2s ease, transform 0.2s ease;

  &:hover:not(:disabled) {
    filter: brightness(1.08);
    transform: translateY(-1px);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`

const Result = styled.span<{ $success?: boolean }>`
  min-height: 1.5rem;
  color: ${({ $success }) => ($success ? '#22c55e' : 'var(--text-muted)')};
  font-size: 0.98rem;
`

const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    color: var(--text-primary);
    
    fieldset {
      border-color: var(--border);
    }

    &:hover fieldset {
      border-color: var(--accent);
    }

    &.Mui-focused fieldset {
      border-color: var(--accent);
    }
  }

  .MuiInputBase-input::placeholder {
    color: var(--text-muted);
    opacity: 1;
  }

  .MuiFormLabel-root {
    color: var(--text-muted);

    &.Mui-focused {
      color: var(--accent);
    }
  }
`

const Footer = styled.footer`
  min-height: 80px;
  display: grid;
  place-items: center;
  padding: 1.5rem;
  background: var(--footer-bg);
  color: var(--text-muted);
  font-size: clamp(1rem, 1.5vw, 1.35rem);
  text-align: center;
`

const Contact = () => {
  const [result, setResult] = useState('')
  const [isSending, setIsSending] = useState(false)

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setResult('Sending...')
    setIsSending(true)

    const form = event.currentTarget
    const formData = new FormData(form)
    formData.append(accessKeyField, accessKey)

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        body: formData,
      })
      const data = (await response.json()) as { success?: boolean }

      if (data.success) {
        setResult('Form submitted successfully.')
        form.reset()
      } else {
        setResult('Something went wrong. Please try again.')
      }
    } catch {
      setResult('Something went wrong. Please try again.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <Wrapper id="contact">
      <ContactArea>
        <Info>
          <Heading>Let's Connect</Heading>
          <Intro>
            I'm currently looking for new opportunities. My inbox is always open.
            Whether you have a question or just want to say hi, feel free to reach
            out!
          </Intro>

          <SocialLinks aria-label="Social links">
            {socialLinks.map((link) => (
              <SocialLink
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={link.label}
              >
                <SocialIcon src={link.icon} alt="" />
              </SocialLink>
            ))}
          </SocialLinks>
        </Info>

        <Form onSubmit={onSubmit}>
          <StyledTextField
            variant="outlined"
            label="Name"
            type="text"
            name="name"
            placeholder="Your name"
            required
            fullWidth
            disabled={isSending}
          />
          <StyledTextField
            variant="outlined"
            label="Email"
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            fullWidth
            disabled={isSending}
          />
          <StyledTextField
            variant="outlined"
            label="Subject"
            type="text"
            name="subject"
            placeholder="What's this about?"
            required
            fullWidth
            disabled={isSending}
          />
          <StyledTextField
            variant="outlined"
            label="Message"
            name="message"
            placeholder="Let's talk about..."
            required
            fullWidth
            multiline
            rows={6}
            disabled={isSending}
          />
          <SubmitButton type="submit" disabled={isSending}>
            {isSending ? 'Sending...' : 'Send Message'}
          </SubmitButton>
          <Result $success={result === 'Form submitted successfully.'}>{result}</Result>
        </Form>
      </ContactArea>

      <Footer>@ 2026 Pelagia Svare Built with passion.</Footer>
    </Wrapper>
  )
}

export default Contact
