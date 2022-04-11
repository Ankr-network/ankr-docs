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
          items: ['build-blockchain/concepts/build-concepts'],
        },
        {
          type: 'category',
          label: 'Get Started',
          link: {
            type: 'generated-index',
          },
          items: ['build-blockchain/get-started/build-start', 'build-blockchain/get-started/pricing'],
        },
        {
          type: 'category',
          label: 'V2 Product Suite',
          link: {
            type: 'generated-index',
          },
          items: [
            'build-blockchain/1V2/protocol',
            'build-blockchain/1V2/public-rpc',
            'build-blockchain/1V2/premium-rpc',
            'build-blockchain/1V2/advanced-apis',
            'build-blockchain/1V2/add-endpoints',
            'build-blockchain/1V2/node-ops',
            'build-blockchain/1V2/scan',
          ],
        },
        {
          type: 'category',
          label: 'Chains V2',
          link: {
            type: 'generated-index',
          },
          items: [
            'build-blockchain/chains/arbitrum',
            'build-blockchain/chains/avalanche',
            'build-blockchain/chains/binance-smart-chain',
            'build-blockchain/chains/celo',
            'build-blockchain/chains/ethereum',
            'build-blockchain/chains/fantom',
            'build-blockchain/chains/iotex',
            'build-blockchain/chains/near',
            'build-blockchain/chains/nervos',
            'build-blockchain/chains/polygon',
            'build-blockchain/chains/solana',
          ],
        },
        {
          type: 'category',
          label: 'BSC Application Sidechain',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'build-blockchain/bas/introduction',
          },
          items: [
            {
              type: 'category',
              label: 'Architecture',
              collapsible: true,
              collapsed: true,
              link: {
                type: 'doc',
                id: 'build-blockchain/bas/architecture/architecture',
              },
              items: [
                'build-blockchain/bas/architecture/modules',
                'build-blockchain/bas/architecture/circ-model-native-bridge',
                'build-blockchain/bas/architecture/native-bridge',
                'build-blockchain/bas/architecture/fast-finality-bls-crypto',
                'build-blockchain/bas/architecture/sys-smart-contracts',
                'build-blockchain/bas/architecture/governance',
                'build-blockchain/bas/architecture/runtime-upgrades',
              ],
            },
            'build-blockchain/bas/how-to-launch',
            'build-blockchain/bas/demo',
            'build-blockchain/bas/faq',
            'build-blockchain/bas/glossary',
          ],
        },
        {
          type: 'category',
          label: 'V1 Products',
          link: {
            type: 'generated-index',
          },
          items: ['build-blockchain/2V1/about-api-services', 'build-blockchain/2V1/node-services'],
        },

        {
          type: 'category',
          label: '⛓ Chains V1',
          link: {
            type: 'generated-index',
          },
          items: [
            'build-blockchain/chains/arb-api',
            'build-blockchain/chains/avax-api',
            'build-blockchain/chains/bsc-api',
            'build-blockchain/chains/clover-api',
            'build-blockchain/chains/ethereum-api',
            'build-blockchain/chains/fantom-api',
            'build-blockchain/chains/huobi-api',
            'build-blockchain/chains/kusama-api',
            'build-blockchain/chains/oec-api',
            'build-blockchain/chains/polkadot-api',
            'build-blockchain/chains/polygon-api',
            'build-blockchain/chains/terra-api',
            'build-blockchain/chains/xdai-api',
          ],
        },

        {
          type: 'category',
          label: 'Guides',
          link: {
            type: 'generated-index',
          },
          items: [
            'build-blockchain/guides/json-methods',
            'build-blockchain/guides/libraries',
            'build-blockchain/guides/websocket-premium',
            'build-blockchain/guides/rpcapi',
          ],
        },

        'build-blockchain/support/get-support',
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
          id: 'earn/introduction',
          label: 'Introduction',
        },
        {
          type: 'category',
          label: 'Liquid Staking',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'earn/liquid-staking/introduction',
          },
          items: [
            {
              type: 'category',
              label: 'AVAX',
              link: {
                type: 'doc',
                id: 'earn/liquid-staking/avax/introduction',
              },
              items: [
                'earn/liquid-staking/avax/staking-mechanics',
                'earn/liquid-staking/avax/stake-avax',
                'earn/liquid-staking/avax/unstake-avax',
                'earn/liquid-staking/avax/faq',
              ],
            },
            {
              type: 'category',
              label: 'BNB',
              link: {
                type: 'doc',
                id: 'earn/liquid-staking/bnb/introduction',
              },
              items: [
                'earn/liquid-staking/bnb/staking-mechanics',
                'earn/liquid-staking/bnb/stake-bnb',
                'earn/liquid-staking/bnb/unstake-bnb',
                'earn/liquid-staking/bnb/faq',
              ],
            },
            {
              type: 'category',
              label: 'DOT',
              link: {
                type: 'doc',
                id: 'earn/liquid-staking/dot/introduction',
              },
              items: [
                'earn/liquid-staking/dot/staking-mechanics',
                'earn/liquid-staking/dot/stake-dot',
                'earn/liquid-staking/dot/unstake-dot',
                'earn/liquid-staking/dot/faq',
              ],
            },
            {
              type: 'category',
              label: 'ETH',
              link: {
                type: 'doc',
                id: 'earn/liquid-staking/eth/introduction',
              },
              items: [
                'earn/liquid-staking/eth/staking-mechanics',
                'earn/liquid-staking/eth/stake-eth',
                'earn/liquid-staking/eth/unstake-eth',
                'earn/liquid-staking/eth/faq',
              ],
            },
            {
              type: 'category',
              label: 'FTM',
              link: {
                type: 'doc',
                id: 'earn/liquid-staking/ftm/introduction',
              },
              items: [
                'earn/liquid-staking/ftm/staking-mechanics',
                'earn/liquid-staking/ftm/stake-ftm',
                'earn/liquid-staking/ftm/unstake-ftm',
                'earn/liquid-staking/ftm/faq',
              ],
            },
            {
              type: 'category',
              label: 'KSM',
              link: {
                type: 'doc',
                id: 'earn/liquid-staking/ksm/introduction',
              },
              items: [
                'earn/liquid-staking/ksm/staking-mechanics',
                'earn/liquid-staking/ksm/stake-ksm',
                'earn/liquid-staking/ksm/unstake-ksm',
                'earn/liquid-staking/ksm/faq',
              ],
            },
            {
              type: 'category',
              label: 'MATIC',
              link: {
                type: 'doc',
                id: 'earn/liquid-staking/matic/introduction',
              },
              items: [
                'earn/liquid-staking/matic/staking-mechanics',
                'earn/liquid-staking/matic/stake-matic',
                'earn/liquid-staking/matic/unstake-matic',
                'earn/liquid-staking/matic/faq',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'DeFi',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'earn/defi/introduction',
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
            id: 'earn/bridge/introduction',
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
            id: 'earn/switch/introduction',
          },
          items: ['earn/switch/switch-mechanics'],
        },
        {
          type: 'category',
          label: 'Liquid Crowdloan',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'earn/liquid-crowdloan/introduction',
          },
          items: [],
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
      'game/ankr-game',
      {
        type: 'category',
        label: 'Ankr Unity SDK',
        link: {
            type: 'generated-index',
          },
        items: [
          'game/unity/about-unity',
          'game/unity/setting-up',
          {
            type: 'category',
            label: 'Get Started',
            link: {
              type: 'generated-index',
            },
            items: [
              'game/unity/getting-started/game-00',
              'game/unity/getting-started/game-01',
              'game/unity/getting-started/game-02',
              'game/unity/getting-started/game-03',
              'game/unity/getting-started/game-04',
            ],
          },
          {
            type: 'category',
            label: 'How to...',
            link: {
              type: 'generated-index',
            },
            items: ['game/unity/how-tos/wallet-game'],
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
          'game/unreal/about-unreal',
          'game/unreal/setting-up-unreal',
          {
            type: 'category',
            label: 'Get Started',
            link: {
              type: 'generated-index',
            },
            items: [
              'game/unreal/getting-started/unreal-before',
              'game/unreal/getting-started/unreal-connect-wallet',
              'game/unreal/getting-started/unreal-send-retrieve',
              'game/unreal/getting-started/unreal-update-nft',
              'game/unreal/getting-started/unreal-mint-nft',
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
              items: ['game/reference/game-reference'],
          },
        ],
      },
  governanceSidebar: [
    {
      type: 'category',
      label: '🏦 Tokens & Governance',
          collapsible: true,
          collapsed: true,
      link: {
        type: 'doc',
        id: 'learn/tokens-governance/about-ankr-tokens',
      },
      items: [
            'learn/tokens-governance/governance',
            'learn/tokens-governance/tokenomics',
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
            'learn/tutorials/submit-tutorial',
            'learn/tutorials/create-voting-system/movie-voting-web3',
            'learn/tutorials/create-eth-app-tutorial/create-eth-app',
            'learn/tutorials/simple-truffle',
            'learn/tutorials/connect-web3js',
            'learn/tutorials/erigon-bsc-tutorial/erigon-bsc',
            'learn/tutorials/connect-web3py',
          ],
        },
      ],
    },
  ],
}
