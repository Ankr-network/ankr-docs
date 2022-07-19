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
    projectName: "ankr-docs", // Usually your repo name.
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
      //Deprecated Algolia Search, we're using Typesense instead
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      algolia: {
        // The application ID provided by Algolia
        appId: "1QEPYCGV3Q",

        // Public API key: it is safe to commit it
        apiKey: "f4be66fb86f3b7f7abddb567e980f14c",
        indexName: "ankr-docs",
        contextualSearch: true,
      },
      // Typesense Search implementation
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

        // Add Solidity language to code blocks
        prism: {
          additionalLanguages: ['solidity'],
        }, 
      },
      colorMode: {
        disableSwitch: true,
      },
      navbar: {
        logo: {
          alt: "Ankr Documentation",
          src: "img/ankr-logo.svg",
        },
        items: [
          {
            type: "dropdown",
            label: "⛓️" + Array(2).fill("\xa0").join("") + "App Chains",
            position: "right",
            items: [
              {
                to: "build-blockchain/app-chain/overview",
                label: "Overview",
              },
              {
                to: "build-blockchain/app-chain/components/validator-nodes",
                label: "Components",
              },
              {
                to: "build-blockchain/app-chain/step-by-step",
                label: "Start step-by-step",
              },
              {
                to: "build-blockchain/app-chain/bnb-sidechain/overview",
                label: "BNB Sidechain",
              },
            ],
          },
          {
            type: "dropdown",
            label: "🔨" + Array(2).fill("\xa0").join("") + "Build",
            position: "right",
            items: [
              {
                to: "build-blockchain/overview",
                label: "Overview",
              },
              {
                to: "build-blockchain/chains/v2/arbitrum",
                label: "Chains",
              },
              {
                to: "build-blockchain/concepts/pricing",
                label: "Pricing",
              },
              {
                to: "build-blockchain/guides/json-methods",
                label: "Guides",
              },
            ],
          },
          {
            type: "dropdown",
            label: "💰" + Array(2).fill("\xa0").join("") + "Staking",
            position: "right",
            items: [
              {
                to: "staking/overview/",
                label: "Overview",
              },
              {
                to: "staking/liquid-staking/overview",
                label: "Liquid Staking",
              },
              {
                to: "staking/defi/overview",
                label: "DeFi",
              },
              {
                to: "staking/bridge/overview",
                label: "Bridge",
              },
              {
                to: "staking/switch/overview",
                label: "Switch",
              },
              {
                to: "staking/liquid-crowdloan/overview",
                label: "Liquid Crowdloan",
              },
              {
                to: "staking/liquid-staking/oracles/overview",
                label: "Oracles",
              },
              {
                to: 'staking/sdk-overview',
                label: "Staking SDK",
              },
          ],
        },
        {
          type: 'dropdown',
          label: '🚀' + Array(2).fill('\xa0').join('') + 'Game',
          position: 'right',
          items: [
            {
              to: 'game/ankr-game',
              label: 'Overview',
            },
            {
              to: 'game/unity/about-unity',
              label: 'Unity SDK',
            },
            {
              to: 'game/unreal/about-unreal',
              label: 'Unreal SDK',
            },
          ],
        },
          {
            type: 'dropdown',
            label: "📚" + Array(2).fill("\xa0").join("") + 'Learn',
            position: "right",
            items: [
              {
                to: 'learn/tokens-governance/ankr-tokens',
                label: 'Tokens & Governance',
              },
              {
                to: 'learn/tutorials/tutorials',
                label: 'Tutorials',
              },
              {
                to: 'learn/extra/ankr-vision',
                label: 'Extra',
              },
            ],
          },
        ],
      },
    },
  }
);