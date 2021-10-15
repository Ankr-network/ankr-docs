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
                "to": "docs/whatisankr/ankr-approach",
                "label": 'Ankr Principles',
              },
              {
                "to": "docs/whatisankr/ankr-vision",
                "label": 'Ankr Vision',
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
                "label": 'About API Services',
              },
              {
                "to": "docs/Build/dev-pricing-plans",
                "label": 'API Pricing Plans',
              },
              {
                "to": "docs/Build/getting-started/dev-get-started",
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
                "label": 'About StakeFi',
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
            label: 'Enterprise',
            position: 'left',
            items: [
              {
                "to": "docs/Enterprise/about-web3",
                "label": 'About Enterprise',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Community',
            position: 'left',
            items: [
              {
                "to": "docs/Community/about-ankr-tokens",
                "label": 'About ANKR Tokens',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Resources',
            position: 'left',
            items: [
              {
                "to": "docs/Resources/key-principles/key-principles",
                "label": 'Key Principles',
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
            type: 'dropdown',
            label: 'Protocol',
            position: 'left',
            items: [
              {
                "to": "docs/Protocol/about-protocol",
                "label": 'About Protocol',
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
