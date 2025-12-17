import nextra from 'nextra'

const withNextra = nextra({
  defaultShowCopyCode: true,
  search: { codeblocks: false },
  staticImage: true,
});

export default withNextra({
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  basePath: '/docs',
  trailingSlash: true,
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  siteUrl: process.env.SITE_URL || 'https://www.ankr.com/docs',
  generateIndexSitemap: false,
  generateRobotsTxt: false,
});
