const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Ankr Docs',
  tagline: 'Your single-source-of-truth for all things Ankr',
  url: 'https://docs.ankr.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ankr-network', // Usually your GitHub org/user name.
  projectName: 'Ankr-docs', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Welcome to Ankr Docs',
        logo: {
          alt: 'Ankr Logo',
          src: 'img/ankr-logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'What-is-Ankr/About',
            position: 'left',
            label: 'About',
          },
          {
            type: 'doc',
            docId: 'What-is-Ankr/About',
            position: 'left',
            label: 'Resources',
          },
          {
            type: 'doc',
            docId: 'What-is-Ankr/About',
            position: 'left',
            label: 'Build',
          },
          {
            type: 'doc',
            docId: 'What-is-Ankr/About',
            position: 'left',
            label: 'Earn',
          },
          {
            type: 'doc',
            docId: 'What-is-Ankr/About',
            position: 'left',
            label: 'Enterprise',
          },
          {
            type: 'doc',
            docId: 'What-is-Ankr/About',
            position: 'left',
            label: 'Community',
          },
          {
            type: 'doc',
            docId: 'What-is-Ankr/About',
            position: 'left',
            label: 'Guides',
          },
       
          
        ],
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
