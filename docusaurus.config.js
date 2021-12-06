// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Welcome to Ankr Docs",
    tagline: "Your single-source-of-truth on Ankr products and services",
    url: "https://docs.ankr.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "ankr-network", // Usually your GitHub org/user name.
    projectName: "Ankr-docs", // Usually your repo name.
    stylesheets: [
      "https://fonts.googleapis.com/css?family=Raleway|Source+Code+Pro",
      "https://at-ui.github.io/feather-font/css/iconfont.css",
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
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
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
              type: "dropdown",
              label: "About",
              position: "right",
              items: [
                {
                  to: "docs/whatisankr/about",
                  label: "About Ankr",
                },
                {
                  to: "docs/whatisankr/ankr-approach",
                  label: "Ankr Principles",
                },
                {
                  to: "docs/whatisankr/ankr-vision",
                  label: "Ankr Vision",
                },
              ],
            },
            {
              type: "dropdown",
              label: "Build",
              position: "right",
              items: [
                {
                  to: "docs/Build/about-api-services",
                  label: "About API Services",
                },
                {
                  to: "docs/Build/dev-pricing-plans",
                  label: "API Pricing Plans",
                },
                {
                  to: "docs/Build/getting-started/dev-get-started",
                  label: "Getting Started",
                },
              ],
            },
            {
              type: "dropdown",
              label: "Earn",
              position: "right",
              items: [
                {
                  to: "docs/Earn/about-stakefi",
                  label: "About StakeFi",
                },
                {
                  to: "docs/Earn/micropools",
                  label: "Pooled Staking",
                },
                {
                  to: "docs/Earn/liquidity-tokens",
                  label: "Liquidity Tokens",
                },
              ],
            },
            {
              type: "dropdown",
              label: "Enterprise",
              position: "right",
              items: [
                {
                  to: "docs/Enterprise/about-web3",
                  label: "About Enterprise",
                },
              ],
            },
            {
              type: "dropdown",
              label: "Community",
              position: "right",
              items: [
                {
                  to: "docs/Community/about-ankr-tokens",
                  label: "About ANKR Tokens",
                },
              ],
            },
            {
              type: "dropdown",
              label: "Resources",
              position: "right",
              items: [
                {
                  to: "docs/Resources/key-principles/key-principles",
                  label: "Key Principles",
                },
                {
                  to: "docs/Resources/guides/guides",
                  label: "Guides",
                },
                {
                  to: "docs/Resources/glossary",
                  label: "Glossary",
                },
              ],
            },
            {
              type: "dropdown",
              label: "Protocol",
              position: "right",
              items: [
                {
                  to: "docs/Protocol/about-protocol",
                  label: "About Protocol",
                },
                {
                  to: "docs/Resources/guides/guides",
                  label: "Guides",
                },
                {
                  to: "docs/Resources/glossary",
                  label: "Glossary",
                },
              ],
            },
          ],
        },
      }),
  }
);
