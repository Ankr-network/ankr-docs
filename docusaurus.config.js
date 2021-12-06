const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Ankr Docs',
  tagline: 'Your single-source-of-truth for all things Ankr',
  url: 'https://docs.ankr.com',
  baseUrl: "/",
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ankr-network', // Usually your GitHub org/user name.
  projectName: 'Ankr-docs', // Usually your repo name.
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Raleway|Source+Code+Pro',
    'https://at-ui.github.io/feather-font/css/iconfont.css'
                ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/ankr-network/ankr-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    (
      {
      navbar: {
        title: 'Ankr Docs',
        logo: {
          alt: 'Ankr Logo',
          src: 'img/ankr-logo.png',
        },
        items: [
          {
            type: 'dropdown',
            label: 'About',
            position: 'left',
            items: [
              {
                "to": "docs/whatisankr/about",
                "label": 'About Ankr',
              },
              {
                "to": "docs/whatisankr/ankr-vision",
                "label": 'Ankr Vision',
              },
              {
                "to": "docs/whatisankr/ankr-vision",
                "label": 'Ankr Solutions',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Build',
            position: 'left',
            items: [
              {
                "to": "docs/Build/about-api-services",
                "label": 'About Developer Services',
              },
              {
                "to": "docs/Build/dev-pricing-plans",
                "label": 'API Pricing Plans',
              },
              {
                "to": "docs/Build/dev-get-started",
                "label": 'Getting Started',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Earn',
            position: 'left',
            items: [
              {
                "to": "docs/Earn/about-stakefi",
                "label": 'About Earn',
              },
              {
                "to": "docs/Earn/micropools",
                "label": 'Pooled Staking',
              },
              {
                "to": "docs/Earn/liquidity-tokens",
                "label": 'Liquidity Tokens',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Chains & Ecosystems',
            position: 'left',
            items: [
              {
                "to": "docs/Build/public-rpcs/acala",
                "label": 'Acala',
              },
              {
                "to": "docs/Build/public-rpcs/algorand",
                "label": 'Algorand',
              },
              {
                "to": "docs/Build/public-rpcs/ankreth2",
                "label": 'Ankr ETH2',
              },
              {
                "to": "docs/Build/public-rpcs/arbitrum",
                "label": 'Arbitrum',
              },
              {
                "to": "docs/Chains/avalanche",
                "label": 'Avalanche',
              },
              {
                "to": "docs/Build/public-rpcs/bifrost",
                "label": 'Bifrost',
              },
              {
                "to": "docs/Build/public-rpcs/binancechain",
                "label": 'Binance Chain',
              },
              {
                "to": "docs/Build/public-rpcs/binancesmartchain",
                "label": 'Binance Smart Chain',
              },
              {
                "to": "docs/Build/public-rpcs/bitcoin",
                "label": 'Bitcoin',
              },
              {
                "to": "docs/Build/public-rpcs/blockstack",
                "label": 'Blockstack',
              },
              {
                "to": "docs/Build/public-rpcs/celo",
                "label": 'Celo',
              },
              {
                "to": "docs/Build/public-rpcs/clover",
                "label": 'Clover',
              },
              {
                "to": "docs/Build/public-rpcs/cosmos",
                "label": 'Cosmos',
              },
              {
                "to": "docs/Build/public-rpcs/darwinia",
                "label": 'Darwinia',
              },
              {
                "to": "docs/Build/public-rpcs/dash",
                "label": 'Dash',
              },
              {
                "to": "docs/Build/public-rpcs/decred",
                "label": 'Decred',
              },
              {
                "to": "docs/Build/public-rpcs/elastosela",
                "label": 'Elastos ELA',
              },
              {
                "to": "docs/Build/public-rpcs/elrond",
                "label": 'Elrond',
              },
              {
                "to": "docs/Build/public-rpcs/enecuum",
                "label": 'Enecuum',
              },
              {
                "to": "docs/Build/public-rpcs/ethereum",
                "label": 'Ethereum',
              },
              {
                "to": "docs/Build/public-rpcs/ethereum2",
                "label": 'Ethereum 2.0',
              },
              {
                "to": "docs/Build/public-rpcs/ethereum-classic",
                "label": 'Ethereum Classic',
              },
              {
                "to": "docs/Build/public-rpcs/fantom",
                "label": 'Fantom',
              },
              {
                "to": "docs/Build/public-rpcs/hathor",
                "label": 'Hathor',
              },
              {
                "to": "docs/Build/public-rpcs/hedera-hashgraph",
                "label": 'Hedera Hashgraph',
              },
              {
                "to": "docs/Build/public-rpcs/huobi-HECO",
                "label": 'Huobi HECO',
              },
              {
                "to": "docs/Build/public-rpcs/icon-citizen",
                "label": 'Icon Citizen',
              },
              {
                "to": "docs/Build/public-rpcs/kusama",
                "label": 'Kusama',
              },
              {
                "to": "docs/Build/public-rpcs/lto-network",
                "label": 'LTO Network',
              },
              {
                "to": "docs/Build/public-rpcs/near",
                "label": 'Near',
              },
              {
                "to": "docs/Build/public-rpcs/neo",
                "label": 'Neo',
              },
              {
                "to": "docs/Build/public-rpcs/nervos",
                "label": 'Nervos',
              },
              {
                "to": "docs/Build/public-rpcs/nucypher",
                "label": 'Nucypher',
              },
              {
                "to": "docs/Build/public-rpcs/nuls",
                "label": 'Nuls',
              },
              {
                "to": "docs/Build/public-rpcs/okexchain",
                "label": 'OKexChain',
              },
              {
                "to": "docs/Build/public-rpcs/omisego",
                "label": 'Omisego',
              },
              {
                "to": "docs/Build/public-rpcs/ontology-sync",
                "label": 'Ontology Sync',
              },
              {
                "to": "docs/Build/public-rpcs/optimism",
                "label": 'Optimism',
              },
              {
                "to": "docs/Build/public-rpcs/plasm",
                "label": 'Plasm',
              },
              {
                "to": "docs/Build/public-rpcs/polkadot",
                "label": 'Polkadot',
              },
              {
                "to": "docs/Build/public-rpcs/polygno",
                "label": 'Polygon',
              },
              {
                "to": "docs/Build/public-rpcs/qtum-staking",
                "label": 'Qtum Staking',
              },
              {
                "to": "docs/Build/public-rpcs/qtum-reddcoin",
                "label": 'Reddcoin',
              },
              {
                "to": "docs/Build/public-rpcs/sifchain",
                "label": 'Sifchain',
              },
              {
                "to": "docs/Build/public-rpcs/stafi-validator",
                "label": 'Stafi',
              },
              {
                "to": "docs/Build/public-rpcs/terra",
                "label": 'Terra',
              },
              {
                "to": "docs/Build/public-rpcs/tezos",
                "label": 'Tezos',
              },
              {
                "to": "docs/Build/public-rpcs/tron",
                "label": 'Tron',
              },
              {
                "to": "docs/Build/public-rpcs/vitae",
                "label": 'Vitae',
              },
              {
                "to": "docs/Build/public-rpcs/xdai",
                "label": 'XDai',
              },
              {
                "to": "docs/Build/public-rpcs/Zcash",
                "label": 'Zcash',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Tokens & Governance',
            position: 'left',
            items: [
              {
                "to": "docs/Tokens&Governance/about-ankr-tokens",
                "label": 'ANKR Tokens',
              },
              {
                "to": "docs/Tokens&Governance/governance",
                "label": 'Governance',
              },
            ],
          },
        
          {
            type: 'dropdown',
            label: 'Community',
            position: 'left',
            items: [
              {
                "to": "docs/Resources/key-principles/key-principles",
                "label": 'Channels',
              },
              {
                "to": "docs/Resources/guides/guides",
                "label": 'Guides',
              },
              {
                "to": "docs/Resources/glossary",
                "label": 'Glossary',
              },
            ],
          },
          {
            type: 'search',
            position: 'right',
          },
        ]
      }, 
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/What-is-Ankr/About',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://medium.com/ankr-network',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
