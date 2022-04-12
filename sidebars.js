module.exports =
{
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
          type: 'doc',
          id: 'build-blockchain/overview',
          label: 'Overview',
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
  earnSidebar: {
    'Earn': [
     'earn/overview',
        {
          'Liquid Staking': [
            'earn/liquid-staking/overview',
            {
              'AVAX': [
                'earn/liquid-staking/avax/overview',
                'earn/liquid-staking/avax/staking-mechanics',
                'earn/liquid-staking/avax/stake-avax',
                'earn/liquid-staking/avax/unstake-avax',
                'earn/liquid-staking/avax/faq',
              ],
            },
            {
              'BNB': [
                'earn/liquid-staking/bnb/overview',
                'earn/liquid-staking/bnb/staking-mechanics',
                'earn/liquid-staking/bnb/stake-bnb',
                'earn/liquid-staking/bnb/unstake-bnb',
                'earn/liquid-staking/bnb/faq',
              ],
            },
            {
              'DOT': [
               'earn/liquid-staking/dot/overview',
                'earn/liquid-staking/dot/staking-mechanics',
                'earn/liquid-staking/dot/stake-dot',
                'earn/liquid-staking/dot/unstake-dot',
                'earn/liquid-staking/dot/faq',
              ],
            },
            {
              'ETH': [
               'earn/liquid-staking/eth/overview',
                'earn/liquid-staking/eth/staking-mechanics',
                'earn/liquid-staking/eth/stake-eth',
                'earn/liquid-staking/eth/unstake-eth',
                'earn/liquid-staking/eth/faq',
              ],
            },
            {
              'FTM': [
                'earn/liquid-staking/ftm/overview',
                'earn/liquid-staking/ftm/staking-mechanics',
                'earn/liquid-staking/ftm/stake-ftm',
                'earn/liquid-staking/ftm/unstake-ftm',
                'earn/liquid-staking/ftm/faq',
              ],
            },
            {
              'KSM': [
               'earn/liquid-staking/ksm/overview',
                'earn/liquid-staking/ksm/staking-mechanics',
                'earn/liquid-staking/ksm/stake-ksm',
                'earn/liquid-staking/ksm/unstake-ksm',
                'earn/liquid-staking/ksm/faq',
              ],
            },
            {
              'MATIC': [
               'earn/liquid-staking/matic/overview',
                'earn/liquid-staking/matic/staking-mechanics',
                'earn/liquid-staking/matic/stake-matic',
                'earn/liquid-staking/matic/unstake-matic',
                'earn/liquid-staking/matic/faq',
              ],
            },
          ],
        },
        {
           'DeFi': [
            'earn/defi/overview',
            'earn/defi/yield-farm',
            'earn/defi/provide-liquidity-to-dex'
          ],
        },
        {
          'Bridge': [
           'earn/bridge/overview',
           'earn/bridge/bridge-mechanics',
            'earn/bridge/bridge-tokens'
          ],
        },
        {
          'Switch': ['earn/switch/overview',
            'earn/switch/switch-mechanics'
          ],
        },
        {
          'Liquid Crowdloan': [
            'earn/liquid-crowdloan/overview',
          ],
        },
        {
          'Reference': [
            'earn/reference/earn-compatible-wallets',
            'earn/reference/ls-smart-contract-addresses-mn',
            'earn/reference/ls-smart-contract-addresses-tn',
            'earn/reference/micropools',
            'earn/reference/liquid-crowdloan-market-makers',
            'earn/reference/parachain-sdk',
            'earn/reference/brand-assets',
            'earn/reference/earn-glossary',
            'earn/reference/earn-principles',
          ],
        },
     ],
  },
  gameSidebar: {
    'Game': [
      'game/ankr-game',
      {
        'Ankr Unity SDK': [
          'game/unity/about-unity',
          'game/unity/setting-up',
          {
             'Get Started': [
              'game/unity/getting-started/game-00',
              'game/unity/getting-started/game-01',
              'game/unity/getting-started/game-02',
              'game/unity/getting-started/game-03',
              'game/unity/getting-started/game-04',
            ],
          },
          {
             'How to...': [
              'game/unity/how-tos/wallet-game'
            ],
          },
        ],
      },
      {
        'Ankr Unreal SDK': [
          'game/unreal/about-unreal',
          'game/unreal/setting-up-unreal',
          {
              'Get Started': [
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
        'Reference': [
          'game/reference/game-reference'
        ],
      },
    ],
  },
    learnSidebar: {
    'Learn': [
      {
         'Tokens & Governance': [
          'learn/tokens-governance/ankr-tokens',
          'learn/tokens-governance/governance',
          'learn/tokens-governance/tokenomics',
        ],
      },
     {
         'Tutorials': [
          'learn/tutorials/submit-tutorial',
          'learn/tutorials/create-voting-system/movie-voting-web3',
          'learn/tutorials/create-eth-app-tutorial/create-eth-app',
          'learn/tutorials/simple-truffle',
          'learn/tutorials/connect-web3js',
          'learn/tutorials/erigon-bsc-tutorial/erigon-bsc',
          'learn/tutorials/connect-web3py',
        ],
      },
     {
         'Reference': [
          'learn/reference/ankr-vision',
        ],
      },
    ],
  },
}
