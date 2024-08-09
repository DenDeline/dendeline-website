import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

import theme from '@/theme'
import { getAppUrl } from '@/utils/urls'

export function generateMetadata(): Metadata {
  return {
    metadataBase: getAppUrl(),
    title: "Home - DenDeline's Pages",
    description: 'DenDeline is Rostislav Statko. Website-portfolio',
    openGraph: {
      siteName: "DenDeline's Pages",
      title: "Home - DenDeline's Pages",
      description: 'DenDeline is Rostislav Statko. Website-portfolio',
      locale: 'en_US',
      type: 'website',
      url: '/',
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isProduction = process.env.NODE_ENV === 'production'

  return (
    <html lang='en' prefix='og: https://ogp.me/ns#'>
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
