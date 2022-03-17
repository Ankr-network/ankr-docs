module.exports = {
  aboutSidebar: [
    {
      type: 'doc',
      id: 'About/about-ankr',
      label: '⚓️ About Ankr',
    },
    ],
  buildSidebar: {
  'Build': [
    {
        type: 'category',
        label: 'Concepts',
        link: {
          type: 'generated-index',
        },
        items: [
          'Build/Concepts/build-concepts'
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
          'Build/Get-Started/pricing',
        ],
      },
      {
          type: 'category',
          label: 'V2 Product Suite',
          link: {
            type: 'generated-index',
          },
          items: [
            'Build/1V2/protocol',
            'Build/1V2/public-rpc',
            'Build/1V2/premium-rpc',
            'Build/1V2/node-ops',
            'Build/1V2/scan'
          ],
        },
        {
          type: 'category',
          label: 'Chains V2',
          link: {
            type: 'generated-index',
          },
          items: [
            'Build/Chains/arbitrum',
            'Build/Chains/avalanche',
            'Build/Chains/binance-smart-chain',
            'Build/Chains/celo',
            'Build/Chains/ethereum',
            'Build/Chains/fantom',
            'Build/Chains/iotex',
            'Build/Chains/near',
            'Build/Chains/nervos',
            'Build/Chains/polygon',
            'Build/Chains/solana',
                ],
        },
      {
        type: 'category',
        label: 'V1 Products',
        link: {
          type: 'generated-index',
        },
        items: [
          'Build/2V1/about-api-services',
          'Build/2V1/node-services'
        ],
      },
      

      {
        type: 'category',
        label: '⛓ Chains V1',
        link: {
          type: 'generated-index',
        },
        items: [
          'Build/Chains/arb-api',
          'Build/Chains/avax-api',
          'Build/Chains/bsc-api',
          'Build/Chains/clover-api',
          'Build/Chains/ethereum-api',
          'Build/Chains/fantom-api',
          'Build/Chains/huobi-api',
          'Build/Chains/kusama-api',
          'Build/Chains/oec-api',
          'Build/Chains/polkadot-api',
          'Build/Chains/polygon-api',
          'Build/Chains/terra-api',
          'Build/Chains/xdai-api',
              ],
      },

      {
        type: 'category',
        label: 'Guides',
        link: {
          type: 'generated-index',
        },
        items: [
          'Build/Guides/json-methods',
          'Build/Guides/libraries',
          'Build/Guides/websocket-premium',
          'Build/Guides/rpcapi'
        ],
      },
    
    'Build/Support/get-support'
  ]
},
earnSidebar: {
  'Earn': [
    {
      type: 'doc',
      id: 'Earn/earn-introduction',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Liquid Staking',
      collapsible: true,
      collapsed: true,
      link: {
        type: 'doc',
        id: 'Earn/liquid-staking/liquid-staking',
      },
      items: [
      {
      type: 'category',
      label: 'AVAX',
      link: {
        type: 'doc',
        id: 'Earn/liquid-staking/avax/avax-liquid-staking-introduction',
      },
      items: [
        'Earn/liquid-staking/avax/avax-liquid-staking-mechanics',
        'Earn/liquid-staking/avax/stake-avax',
      ]
    },
      {
      type: 'category',
      label: 'BNB',
      link: {
        type: 'doc',
        id: 'Earn/liquid-staking/bnb/bnb-liquid-staking-introduction',
      },
      items: [
        'Earn/liquid-staking/bnb/bnb-liquid-staking-mechanics',
        'Earn/liquid-staking/bnb/stake-bnb',
        'Earn/liquid-staking/bnb/unstake-bnb',
      ]
    },
    {
      type: 'category',
      label: 'DOT',
      link: {
        type: 'doc',
        id: 'Earn/liquid-staking/dot/dot-liquid-staking-introduction',
      },
      items: [
        'Earn/liquid-staking/dot/dot-liquid-staking-mechanics',
        'Earn/liquid-staking/dot/stake-dot',
        'Earn/liquid-staking/dot/unstake-dot',
      ]
    },
         {
      type: 'category',
      label: 'ETH',
      link: {
        type: 'doc',
        id: 'Earn/liquid-staking/eth/eth-liquid-staking-introduction',
      },
      items: [
        'Earn/liquid-staking/eth/eth-liquid-staking-mechanics',
        'Earn/liquid-staking/eth/stake-eth',
        'Earn/liquid-staking/eth/unstake-eth',
      ]
    },
   {
      type: 'category',
      label: 'FTM',
      link: {
        type: 'doc',
        id: 'Earn/liquid-staking/ftm/ftm-liquid-staking-introduction',
      },
      items: [
        'Earn/liquid-staking/ftm/ftm-liquid-staking-mechanics',
        'Earn/liquid-staking/ftm/stake-ftm',
        'Earn/liquid-staking/ftm/unstake-ftm',
      ]
    },
    {
      type: 'category',
      label: 'KSM',
      link: {
        type: 'doc',
        id: 'Earn/liquid-staking/ksm/ksm-liquid-staking-introduction',
      },
      items: [
        'Earn/liquid-staking/ksm/ksm-liquid-staking-mechanics',
        'Earn/liquid-staking/ksm/stake-ksm',
        'Earn/liquid-staking/ksm/unstake-ksm',
      ]
    },
       {
      type: 'category',
      label: 'MATIC',
      link: {
        type: 'doc',
        id: 'Earn/liquid-staking/matic/matic-liquid-staking-introduction',
      },
      items: [
        'Earn/liquid-staking/matic/matic-liquid-staking-mechanics',
        'Earn/liquid-staking/matic/stake-matic',
        'Earn/liquid-staking/matic/unstake-matic',
      ]
    },
      ]
    },
    {
      type: 'category',
      label: 'Liquid Crowdloans',
      collapsible: true,
      collapsed: true,
      link: {
        type: 'doc',
        id: 'Earn/liquid-crowdloans/liquid-crowdloans',
      },
      items: [
      ]
    },
    {
      type: 'category',
      label: 'DeFi',
      collapsible: true,
      collapsed: true,
      link: {
        type: 'doc',
        id: 'Earn/defi/defi-introduction',
      },
      items: [
          'Earn/defi/yeld-farm',
          'Earn/defi/provide-liquidity-dex',
      ]
    },
    {
      type: 'category',
      label: 'Bridge',
      collapsible: true,
      collapsed: true,
      link: {
        type: 'doc',
        id: 'Earn/bridge/bridge-introduction',
      },
      items: [
          'Earn/bridge/bridge-mechanics',
          'Earn/bridge/bridge-tokens',
      ]
    },
/*    {
      type: 'category',
      label: 'Switch',
      collapsible: true,
      collapsed: true,
      link: {
        type: 'doc',
        id: 'Earn/switch/switch-introduction',
      },
      items: [
      ]
    }, */
        {
      type: 'category',
      label: 'Reference',
      collapsible: true,
      collapsed: true,
      link: {
        type: 'generated-index',
        keywords: ['reference, wallets, token, addresses, tokens, micropools, makers, sdk, principles'],
      },
      items: [
          'Earn/reference/earn-compatible-wallets',
          'Earn/reference/earn-principles',
          'Earn/reference/liquid-staking-token-addresses',
          'Earn/reference/micropools',
          'Earn/reference/liquid-crowdloan-market-makers',
          'Earn/reference/parachain-sdk',
      ]
    },
      ],
    },       
  governanceSidebar: {
    'Tokens+Governance': [
      {
        type: 'category',
        label: '⚖️ Governance',
        link: {
            type: 'generated-index',
          },
        items: [
          'Tokens&Governance/about-ankr-tokens', 
          'Tokens&Governance/governance',
          'Tokens&Governance/tokenomics'
        ],
    },
  ],
}, 
  communitySidebar: {
  'Community': [
    {
      type: 'category',
      label: '👥 Community',
      link: {
        type: 'generated-index',
      },
      items: [
        'Community/channels'
      ],
  },
 ],
},
  tutorialSidebar: {
    'Tutorials': [
      {
        type: 'category',
        label: '🎓 Tutorials',
        link: {
            type: 'generated-index',
          },
        items: [
        'Tutorials/submit-tutorial',
        'Tutorials/create-voting-system/movie-voting-web3',
        'Tutorials/create-eth-app-tutorial/create-eth-app',
        'Tutorials/simple-truffle', 
        'Tutorials/connect-web3js',
        'Tutorials/erigon-bsc-tutorial/erigon-bsc',
        'Tutorials/connect-web3py'
      ],
    },
  ],
},
}

