import type { MetadataRoute } from 'next'

const URL = process.env.WEBSITE_URL

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${URL}/sitemap.xml`,
  }
}
