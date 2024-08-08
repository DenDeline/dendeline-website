import { Box, Button, Container, Link, Typography } from '@mui/material'

import HubRoundedIcon from '@mui/icons-material/HubRounded'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Shantell_Sans } from 'next/font/google'

const shantellSans = Shantell_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <Container
      maxWidth='lg'
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center',
      }}
    >
      <Typography textAlign='center' variant='h1' style={shantellSans.style} sx={{ mb: 2 }}>
        DenDeline&apos;s Pages
      </Typography>
      <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        <Button
          startIcon={<GitHubIcon />}
          variant='contained'
          href='https://github.com/DenDeline'
          rel='noopener noreferrer'
        >
          Github
        </Button>
        <Button startIcon={<HubRoundedIcon />} variant='contained'>
          Projects
        </Button>
      </Box>
      <Typography variant='body1'>
        Contact -{' '}
        <Link href='mailto:contact@dendeline.com' rel='noopener noreferrer'>
          contact@dendeline.com
        </Link>
      </Typography>
    </Container>
  )
}
