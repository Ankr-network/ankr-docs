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
<<<<<<< HEAD

        // Optional: Typesense search parameters: https://typesense.org/docs/0.21.0/api/documents.md#search-parameters
        typesenseSearchParameters: {},

        // Optional
        contextualSearch: true,
      },
      colorMode: {
        disableSwitch: true,
      },
      navbar: {
        logo: {
          alt: "Ankr Documentation",
          src: "img/ankr-logo.svg",
=======
        colorMode: {
          defaultMode: 'light',
          disableSwitch: false,
          respectPrefersColorScheme: false,
>>>>>>> 941ebafeaec555321ff1fdcc0c3e7d53b55a70a1
        },
        items: [
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
                label: "Chains v2",
              },
              {
                to: "build-blockchain/bas/overview",
                label: "BSC Application Sidechain",
              },
              {
                to: "build-blockchain/guides/json-methods",
                label: "Guides",
              },
            ],
          },
          {
            type: "dropdown",
            label: "💰" + Array(2).fill("\xa0").join("") + "Earn",
            position: "right",
            items: [
              {
                to: "earn/overview/",
                label: "Overview",
              },
              {
                to: "earn/liquid-staking/overview",
                label: "Liquid Staking",
              },
              {
                to: "earn/defi/overview",
                label: "DeFi",
              },
              {
                to: "earn/bridge/overview",
                label: "Bridge",
              },
              {
                to: "earn/switch/overview",
                label: "Switch",
              },
              {
                to: "earn/liquid-crowdloan/overview",
                label: "Liquid Crowdloan",
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
                to: 'learn/tutorials/submit-tutorial',
                label: 'Tutorials',
              },
              {
                to: 'learn/reference/ankr-vision',
                label: 'Reference',
              },
            ],
          },
        ],
      },
    },
  }
);