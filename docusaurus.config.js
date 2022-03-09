// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Welcome to Ankr Docs",

    tagline: "Your single-source-of-truth on Ankr products and services",
    url: "https://www.ankr.com",
    baseUrl: '/',
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "ankr-network", // Usually your GitHub org/user name.
    projectName: "Ankr-docs", // Usually your repo name.
    stylesheets: [
      "https://fonts.googleapis.com/css?family=Raleway|Source+Code+Pro",
      "https://at-ui.github.io/feather-font/css/iconfont.css",
    ],
    scripts: [
      {
        src: 'https://crypto.com/price/static/widget/index.js',
        defer: true,
      },
    ],
    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
            editUrl: "https://github.com/ankr-network/ankr-docs",
          },
          theme: {
            customCss: require.resolve("./static/css/custom.css"),
          },
        }),
      ],
    ],
    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      {
        colorMode: {
          disableSwitch: true,
        },
        navbar: {
          title: "Docs",
          logo: {
            alt: "Ankr Logo",
            src: "img/ankr-logo.svg",
          },
          items: [
            {

              type: "doc",
              docId: "About/about-ankr",
              position: "right",
              label: "⚓️ About Ankr",           
            },
            {
              type: "dropdown",
              label: '🔨' + Array(2).fill('\xa0').join('') + 'Build',
              position: "right",
              items: [
                {
                  to: "docs/category/get-started",
                  label: "Get Started",
                },
                {
                  to: "docs/category/concepts",
                  label: "Concepts",
                },
                {
                  to: "docs/category/chains-v2",
                  label: "Chains",
                },
                {
                  to: "docs/category/guides",
                  label: "Guides",
                },
                {
                  to: "docs/Build/Support/get-support",
                  label: "Support",
                },
              ],
            },
            {
              type: "dropdown",
              label: '💰' + Array(2).fill('\xa0').join('') + 'Earn',
              position: "right",
              items: [
                {
                  to: "docs/category/-concepts",
                  label: "Concepts",
                },
                {
                  to: "docs/category/-guides",
                  label: "Guides",
                },
                {
                  to: "docs/category/-products",
                  label: "Products",
                },
                {
                  to: "docs/category/-ecosystems",
                  label: "Ecosystems",
                },
                {
                  to: "docs/category/-reference",
                  label: "Reference",
                },
              ],
            },
            {
              type: "dropdown",
              label: '👥' + Array(2).fill('\xa0').join('') + 'Community',
              position: "right",
              items: [
                {
                  to: "docs/Community/channels",
                  label: "Community Channels",
                },
              ],
            },
              {
                type: "docSidebar",
                sidebarId: "governanceSidebar",
                position: "right",
                label: '⚖️' + Array(2).fill('\xa0').join('') + 'Tokens & Governance',
              },
            {
              type: "docSidebar",
              sidebarId: "tutorialSidebar",
              position: "right",
              label: '📚' + Array(2).fill('\xa0').join('') + 'Tutorials',           
            },
          ],
        },
      },
    })