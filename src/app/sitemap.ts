import type { MetadataRoute } from 'next'

const URL = process.env.WEBSITE_URL

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: URL,
      lastModified: new Date(),
    },
  ]
}
