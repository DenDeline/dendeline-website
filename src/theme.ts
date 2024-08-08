'use client'
import { Roboto } from 'next/font/google'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#E17C20',
      },
      secondary: {
        main: '#7C20E1',
      },
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  }),
)

export default theme
