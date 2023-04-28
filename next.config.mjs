import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  staticImage: true,
  flexsearch: {
    codeblocks: false
  },
  defaultShowCopyCode: true
})

export default withNextra({
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  basePath: '/docs',
  trailingSlash: true
})
