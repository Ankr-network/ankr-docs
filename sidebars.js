module.exports = {
  aboutSidebar: {
  'About Ankr': [
    'Whatisankr/about', 
    'Whatisankr/ankr-approach', 
    'Whatisankr/ankr-vision', 
    'Whatisankr/ankr-solutions'
  ],
},
  buildSidebar: {
  'Build': [
    {
        type: 'category',
        label: 'Concepts',
        link: {
          type: 'generated-index',
        },
        items: [
          'Build/Concepts/build-concepts',
          'Build/Concepts/foundations',
          'Build/Concepts/architecture'
        ]
    },
    {
        type: 'category',
        label: 'Get Started',
        link: {
          type: 'generated-index',
        },
        items: [
          'Build/Get-Started/build-start',
        {
          type: 'category',
          label: 'V2 Ankr Protocol',
          link: {
            type: 'generated-index',
          },
          items: [
            'Build/Get-Started/ankr-protocol/about-ankr-protocol/protocol',
            'Build/Get-Started/ankr-protocol/about-ankr-protocol/public-rpc',
            'Build/Get-Started/ankr-protocol/about-ankr-protocol/premium-rpc',
            'Build/Get-Started/ankr-protocol/about-ankr-protocol/node-ops',
            'Build/Get-Started/ankr-protocol/about-ankr-protocol/scan'
          ],
        },
        ],
      },
      {
        type: 'category',
        label: 'V1 Products',
        link: {
          type: 'generated-index',
        },
        items: [
          'Build/about-api-services',
          'Build/Get-Started/ankr-protocol/about-ankr-protocol/protocol',
          'Build/Get-Started/ankr-protocol/about-ankr-protocol/public-rpc',
          'Build/Get-Started/ankr-protocol/about-ankr-protocol/premium-rpc',
          'Build/Get-Started/ankr-protocol/about-ankr-protocol/node-ops',
          'Build/Get-Started/ankr-protocol/about-ankr-protocol/scan'
        ],
      },
      {
        type: 'category',
        label: 'Chains V2',
        link: {
          type: 'generated-index',
        },
        items: [
          'Build/Chains/acala',
          'Build/Chains/algorand',
          'Build/Chains/ankr-eth2',
          'Build/Chains/arbitrum',
          'Build/Chains/astar',
          'Build/Chains/avalanche',
          'Build/Chains/bifrost',
          'Build/Chains/binance-chain',
          'Build/Chains/binance-smart-chain',
          'Build/Chains/celo',
          'Build/Chains/clover',
          'Build/Chains/cosmos',
          'Build/Chains/darwinia',
          'Build/Chains/dash',
          'Build/Chains/decred',
          'Build/Chains/elastos',
          'Build/Chains/elrond',
          'Build/Chains/enecuum',
          'Build/Chains/ethereum-2',
          'Build/Chains/ethereum-classic',
          'Build/Chains/ethereum',
          'Build/Chains/fantom',
          'Build/Chains/hathor',
          'Build/Chains/hedera',
          'Build/Chains/huobi',
          'Build/Chains/icon',
          'Build/Chains/kusama',
          'Build/Chains/lto',
          'Build/Chains/near',
          'Build/Chains/neo',
          'Build/Chains/nervos',
          'Build/Chains/nucypher',
          'Build/Chains/nuls',
          'Build/Chains/okex',
          'Build/Chains/omisego',
          'Build/Chains/ontology',
          'Build/Chains/optimism',
          'Build/Chains/polkadot',
          'Build/Chains/polygon',
          'Build/Chains/qtum',
          'Build/Chains/reddcoin',
          'Build/Chains/sifchain',
          'Build/Chains/solana',
          'Build/Chains/stafi',
          'Build/Chains/terra',
          'Build/Chains/tezos',
          'Build/Chains/tron',
          'Build/Chains/vitae',
          'Build/Chains/xdai',
          'Build/Chains/zcash'
              ],
      },

      {
        type: 'category',
        label: 'Guides',
        link: {
          type: 'generated-index',
        },
        items: [
          'Build/Guides/libraries',
          'Build/Guides/rpcapi'
        ],
      },
    
    'Build/Support/get-support'
  ]
},
  

  
  

  earnSidebar: 
    {
  'Earn': ['Earn/about-earn', 'Earn/liquidity-tokens', 'Earn/micropools'],  
},

  
  governanceSidebar: 
    {
  'Tokens & Governance': ['Tokens&Governance/about-ankr-tokens', 'Tokens&Governance/governance','Tokens&Governance/tokenomics'],
},


  communitySidebar: 
  {
  'Community': ['Community/channels', 'Community/contribute', 'Community/grants']
  },


  resourcesSidebar: {
    'Resources': ['Resources/glossary', 'Resources/help']
    },
};