const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_flexsearch: true,
  unstable_staticImage: true,
});

// const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
    disableStaticImages: true,
  },
  trailingSlash: true,
  //assetPrefix: isProd ? 'https://ankr.com/docs' : undefined,
  basePath: '/docs',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
};

module.exports = withNextra(nextConfig);

/* example of how to set up redirects
module.exports = withNextra({
  redirects: () => {
    return [
      {
        source: "/docs/deprecated-page",
        destination: "/docs/new-page",
        statusCode: 301,
      },
        source: "/docs/deprecated-page",
        destination: "/docs/new-page",
        statusCode: 302,
      },
    ];
  },
});
*/
