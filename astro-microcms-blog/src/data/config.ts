type Config = {
  title?: string
  description?: string
  baseUrl?: string
  siteUrl?: string
  googleFontsUrl?: string | string[]
}

const config: Config = {
  title: '',
  description: '',
  siteUrl: import.meta.env.SITE_URL,
  googleFontsUrl:
    'https://fonts.googleapis.com/css2?family=Sawarabi+Gothic&display=swap',
}

export default config
