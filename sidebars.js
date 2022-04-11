module.exports = {
  buildSidebar: [
    {
      type: 'category',
      label: '🔨 Build',
      collapsible: false,
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'category',
          label: 'Concepts',
          link: {
            type: 'generated-index',
          },
          items: ['Build/Concepts/build-concepts'],
        },
        {
          type: 'category',
          label: 'Get Started',
          link: {
            type: 'generated-index',
          },
          items: ['Build/Get-Started/build-start', 'Build/Get-Started/pricing'],
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
            'Build/1V2/advanced-apis',
            'Build/1V2/add-endpoints',
            'Build/1V2/node-ops',
            'Build/1V2/scan',
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
          label: 'BSC Application Sidechain',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'Build/Bas/about-bas',
          },
          items: [
            {
              type: 'category',
              label: 'Architecture',
              collapsible: true,
              collapsed: true,
              link: {
                type: 'doc',
                id: 'Build/Bas/architecture/bas-architecture',
              },
              items: [
                'Build/Bas/architecture/bas-modules',
                'Build/Bas/architecture/bas-circ-model-native-bridge',
                'Build/Bas/architecture/bas-native-bridge',
                'Build/Bas/architecture/bas-fast-finality-bls-crypto',
                'Build/Bas/architecture/bas-sys-smart-contracts',
                'Build/Bas/architecture/bas-governance',
                'Build/Bas/architecture/bas-runtime-upgrades',
              ],
            },
            'Build/Bas/bas-how-to-launch',
            'Build/Bas/bas-demo',
            'Build/Bas/bas-faq',
            'Build/Bas/bas-glossary',
          ],
        },
        {
          type: 'category',
          label: 'V1 Products',
          link: {
            type: 'generated-index',
          },
          items: ['Build/2V1/about-api-services', 'Build/2V1/node-services'],
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
            'Build/Guides/rpcapi',
          ],
        },

        'Build/Support/get-support',
      ],
    },
  ],
  earnSidebar: [
    {
      type: 'category',
      label: '💰 Earn',
      collapsible: false,
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'doc',
          id: 'earn/earn-introduction',
          label: 'Introduction',
        },
        {
          type: 'category',
          label: 'Liquid Staking',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'earn/liquid-staking/liquid-staking',
          },
          items: [
            {
              type: 'category',
              label: 'AVAX',
              link: {
                type: 'doc',
                id: 'earn/liquid-staking/avax/avax-liquid-staking-introduction',
              },
              items: [
                'earn/liquid-staking/avax/avax-liquid-staking-mechanics',
                'earn/liquid-staking/avax/stake-avax',
                'earn/liquid-staking/avax/unstake-avax',
                'earn/liquid-staking/avax/avax-liquid-staking-faq',
              ],
            },
            {
              type: 'category',
              label: 'BNB',
              link: {
                type: 'doc',
                id: 'earn/liquid-staking/bnb/bnb-liquid-staking-introduction',
              },
              items: [
                'earn/liquid-staking/bnb/bnb-liquid-staking-mechanics',
                'earn/liquid-staking/bnb/stake-bnb',
                'earn/liquid-staking/bnb/unstake-bnb',
                'earn/liquid-staking/bnb/bnb-liquid-staking-faq',
              ],
            },
            {
              type: 'category',
              label: 'DOT',
              link: {
                type: 'doc',
                id: 'earn/liquid-staking/dot/dot-liquid-staking-introduction',
              },
              items: [
                'earn/liquid-staking/dot/dot-liquid-staking-mechanics',
                'earn/liquid-staking/dot/stake-dot',
                'earn/liquid-staking/dot/unstake-dot',
                'earn/liquid-staking/dot/dot-liquid-staking-faq',
              ],
            },
            {
              type: 'category',
              label: 'ETH',
              link: {
                type: 'doc',
                id: 'earn/liquid-staking/eth/eth-liquid-staking-introduction',
              },
              items: [
                'earn/liquid-staking/eth/eth-liquid-staking-mechanics',
                'earn/liquid-staking/eth/stake-eth',
                'earn/liquid-staking/eth/unstake-eth',
                'earn/liquid-staking/eth/eth-liquid-staking-faq',
              ],
            },
            {
              type: 'category',
              label: 'FTM',
              link: {
                type: 'doc',
                id: 'earn/liquid-staking/ftm/ftm-liquid-staking-introduction',
              },
              items: [
                'earn/liquid-staking/ftm/ftm-liquid-staking-mechanics',
                'earn/liquid-staking/ftm/stake-ftm',
                'earn/liquid-staking/ftm/unstake-ftm',
                'earn/liquid-staking/ftm/ftm-liquid-staking-faq',
              ],
            },
            {
              type: 'category',
              label: 'KSM',
              link: {
                type: 'doc',
                id: 'earn/liquid-staking/ksm/ksm-liquid-staking-introduction',
              },
              items: [
                'earn/liquid-staking/ksm/ksm-liquid-staking-mechanics',
                'earn/liquid-staking/ksm/stake-ksm',
                'earn/liquid-staking/ksm/unstake-ksm',
                'earn/liquid-staking/ksm/ksm-liquid-staking-faq',
              ],
            },
            {
              type: 'category',
              label: 'MATIC',
              link: {
                type: 'doc',
                id: 'earn/liquid-staking/matic/matic-liquid-staking-introduction',
              },
              items: [
                'earn/liquid-staking/matic/matic-liquid-staking-mechanics',
                'earn/liquid-staking/matic/stake-matic',
                'earn/liquid-staking/matic/unstake-matic',
                'earn/liquid-staking/matic/matic-liquid-staking-faq',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Liquid Crowdloan',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'earn/liquid-crowdloan/liquid-crowdloan',
          },
          items: [],
        },
        {
          type: 'category',
          label: 'DeFi',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'earn/defi/defi-introduction',
          },
          items: ['earn/defi/yield-farm', 'earn/defi/provide-liquidity-to-dex'],
        },
        {
          type: 'category',
          label: 'Bridge',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'earn/bridge/bridge-introduction',
          },
          items: ['earn/bridge/bridge-mechanics', 'earn/bridge/bridge-tokens'],
        },
        {
          type: 'category',
          label: 'Switch',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'earn/switch/switch-introduction',
          },
          items: ['earn/switch/switch-mechanics'],
        },
        {
          type: 'category',
          label: 'Reference',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'earn/reference/introduction',
          },
          items: [
            'earn/reference/earn-glossary',
            'earn/reference/earn-compatible-wallets',
            'earn/reference/earn-principles',
            'earn/reference/ls-smart-contract-addresses-mn',
            'earn/reference/ls-smart-contract-addresses-tn',
            'earn/reference/micropools',
            'earn/reference/liquid-crowdloan-market-makers',
            'earn/reference/parachain-sdk',
            'earn/reference/brand-assets',
          ],
        },
      ],
    },
  ],
  gameSidebar: {
    'Game': [
      'Game/ankr-game',
      {
        type: 'category',
        label: 'Ankr Unity SDK',
        link: {
            type: 'generated-index',
          },
        items: [
          'Game/Unity/about-unity',
          'Game/Unity/setting-up',
          {
            type: 'category',
            label: 'Get Started',
            link: {
              type: 'generated-index',
            },
            items: [
              'Game/Unity/getting-started/game-00',
              'Game/Unity/getting-started/game-01',
              'Game/Unity/getting-started/game-02',
              'Game/Unity/getting-started/game-03',
              'Game/Unity/getting-started/game-04',
            ],
          },
          {
            type: 'category',
            label: 'How to...',
            link: {
              type: 'generated-index',
            },
            items: ['Game/Unity/how-tos/wallet-game'],
          },
        ],
      },
      {
        type: 'category',
        label: 'Ankr Unreal SDK',
        link: {
          type: 'generated-index',
        },
        items: [
          'Game/Unreal/about-unreal',
          'Game/Unreal/setting-up-unreal',
          {
            type: 'category',
            label: 'Get Started',
            link: {
              type: 'generated-index',
            },
            items: [
              'Game/Unreal/getting-started/unreal-before',
              'Game/Unreal/getting-started/unreal-connect-wallet',
              'Game/Unreal/getting-started/unreal-send-retrieve',
              'Game/Unreal/getting-started/unreal-update-nft',
              'Game/Unreal/getting-started/unreal-mint-nft',
            ],
          },
        ],
      },
            {
              type: 'category',
              label: 'Reference',
              link: {
                type: 'generated-index',
              },
              items: ['Game/reference/game-reference'],
          },
        ],
      },
  governanceSidebar: [
    {
      type: 'category',
      label: '⚖️ Tokens+Governance',
      collapsible: false,
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'category',
          label: 'Governance',
          collapsed: false,
          link: {
            type: 'generated-index',
          },
          items: [
            'Tokens&Governance/about-ankr-tokens',
            'Tokens&Governance/governance',
            'Tokens&Governance/tokenomics',
          ],
        },
      ],
    },
  ],
  communitySidebar: [
    {
      type: 'category',
      label: '👥 Community',
      collapsible: false,
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'category',
          label: 'Community',
          collapsed: false,
          link: {
            type: 'generated-index',
          },
          items: ['Community/channels'],
        },
      ],
    },
  ],
  tutorialSidebar: [
    {
      type: 'category',
      label: '📚 Tutorials',
      collapsible: false,
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'category',
          label: 'Tutorials',
          collapsed: false,
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
            'Tutorials/connect-web3py',
          ],
        },
      ],
    },
  ],
}
