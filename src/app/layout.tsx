import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/theme'
import { CssBaseline } from '@mui/material'

export const metadata: Metadata = {
  title: "Home - DenDeline's Pages",
  description: 'DenDeline is Rostislav Statko. Website-portfolio',
  openGraph: {
    title: "Home - DenDeline's Pages",
    description: 'DenDeline is Rostislav Statko. Website-portfolio',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isProduction = process.env.NODE_ENV === 'production'

  return (
    <html lang='en'>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
      {isProduction && <GoogleAnalytics gaId='G-171RZXQK8W' />}
    </html>
  )
}
