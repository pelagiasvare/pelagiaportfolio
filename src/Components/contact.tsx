import { useState } from 'react'
import styled from 'styled-components'
import { TextField } from '@mui/material'

const formEndpoint = ['https://api.web3', 'forms.com/submit'].join('')
const accessKey = ['f0c459f3', 'f38f', '481a', '90c5', 'edcd85249c98'].join('-')
const accessKeyField = ['access', 'key'].join('_')

const Wrapper = styled.section`
  color: var(--text-primary);
  padding: 2rem;
  padding-top: 5rem;
  text-align:left;
`

const Grid = styled.div`
  width: min(1100px, 100%);
  margin: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 0.5rem;
`

const Heading = styled.h2`
  margin: 0 0 1rem;
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  text-align:left;
`

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-muted);
  margin: 0;
  max-width: 380px;
`

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-top: 0.5rem;
`

const SocialLink = styled.a`
  width: 44px;
  height: 44px;
  display: inline-grid;
  place-items: center;
  border: 1px solid var(--border);
  border-radius: 50%;
  color: var(--text-muted);
  transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 4px;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
`

const RightCol = styled.div`
  display: flex;
  flex-direction: column;
`

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
  width: 100%;
`

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 8px;
  background: var(--accent);
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    filter: brightness(1.1);
    transform: translateY(-1px);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`

const Result = styled.span<{ $success?: boolean }>`
  min-height: 1.5rem;
  color: ${({ $success }) => ($success ? '#22c55e' : '#94a3b8')};
  font-size: 0.9rem;
  text-align: center;
`

const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.03);

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
  color: var(--text-muted);
  padding-top: 3rem;
  text-align: center;
  font-size: 0.875rem;
`

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
)

const Contact = () => {
  const [result, setResult] = useState('')
  const [isSending, setIsSending] = useState(false)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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
        setResult('Message sent successfully.')
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
      <Grid>
        <LeftCol>
          <Heading>Let's Connect</Heading>
          <Description>
            I'm currently looking for new opportunities, my inbox is always open. Whether you have a
            question or just want to say hi, I'll try my best to get back to you!
          </Description>
          <SocialLinks>
            <SocialLink href="mailto:your@email.com" aria-label="Email">
              <EmailIcon />
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </SocialLink>
            <SocialLink
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </SocialLink>
          </SocialLinks>
        </LeftCol>

        <RightCol>
          <Form onSubmit={onSubmit}>
            <StyledTextField
              variant="outlined"
              label="Your email"
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
              placeholder="Just saying hi"
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
            <Result $success={result === 'Message sent successfully.'}>{result}</Result>
          </Form>
        </RightCol>
      </Grid>

      <Footer>© 2026 Pelagia Svare — Built with passion.</Footer>
    </Wrapper>
  )
}

export default Contact