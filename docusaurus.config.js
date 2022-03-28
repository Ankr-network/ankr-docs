// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Welcome to Ankr Docs",
    tagline: "Your single-source-of-truth on Ankr products and services",
    url: "https://www.ankr.com",
    baseUrl: "/docs/",
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
        src: "https://crypto.com/price/static/widget/index.js",
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
            routeBasePath: "/",
            // Please change this to your repo.
          },
          theme: {
            customCss: require.resolve("./static/css/custom.css"),
          },
        }),
      ],
    ],
    themes: ["docusaurus-theme-search-typesense"],
    themeConfig: {
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      algolia: {
        // The application ID provided by Algolia
        appId: "1QEPYCGV3Q",

        // Public API key: it is safe to commit it
        apiKey: "f4be66fb86f3b7f7abddb567e980f14c",
        indexName: "ankr-docs",
        contextualSearch: true,
      },
      typesense: {
        typesenseCollectionName: "ankr-docs", // Replace with your own doc site's name. Should match the collection name in the scraper settings.
        typesenseServerConfig: {
          nodes: [
            {
              host: process.env.TYPESENSE_HOST,
              port: process.env.TYPESENSE_PORT,
              protocol: process.env.TYPESENSE_PROTOCOL,
            },
          ],
          apiKey: process.env.TYPESENCE_PUBLIC_API_KEY,
        },

        // Optional: Typesense search parameters: https://typesense.org/docs/0.21.0/api/documents.md#search-parameters
        typesenseSearchParameters: {},

        // Optional
        contextualSearch: true,
      },
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
            label: "🔨" + Array(2).fill("\xa0").join("") + "Build",
            position: "right",
            items: [
              {
                to: "category/get-started",
                label: "Get Started",
              },
              {
                to: "category/concepts",
                label: "Concepts",
              },
              {
                to: "category/chains-v2",
                label: "Chains",
              },
              {
                to: "category/guides",
                label: "Guides",
              },
              {
                to: "Build/Support/get-support",
                label: "Support",
              },
            ],
          },
          {
            type: "dropdown",
            label: "💰" + Array(2).fill("\xa0").join("") + "Earn",
            position: "right",
            items: [
              {
                to: "Earn/liquid-staking/",
                label: "Liquid Staking",
              },
              {
                to: "Earn/liquid-crowdloan/liquid-crowdloan",
                label: "Liquid Crowdloan",
              },
              {
                to: "Earn/defi/defi-introduction",
                label: "DeFi",
              },
               {
                  to: "Earn/bridge/bridge-introduction",
                  label: "Bridge",
                },
                {
                  to: "Earn/switch/switch-introduction",
                  label: "Switch",
                }, 
              {
                to: "category/reference",
                label: "Reference",
              },
            ],
          },
          {
            type: "dropdown",
            label: "👥" + Array(2).fill("\xa0").join("") + "Community",
            position: "right",
            items: [
              {
                to: "Community/channels",
                label: "Community Channels",
              },
            ],
          },
          {
            type: "docSidebar",
            sidebarId: "governanceSidebar",
            position: "right",
            label:
              "⚖️" + Array(2).fill("\xa0").join("") + "Tokens & Governance",
          },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "right",
            label: "📚" + Array(2).fill("\xa0").join("") + "Tutorials",
          },
        ],
      },
    },
  }
);
