module.exports =
{
  buildSidebar: [
    {
      Build: [
        'build-blockchain/overview',
        'build-blockchain/concepts/pricing',
        {
          'Products v2': [
            'build-blockchain/products/v2/public-rpc',
              {
                '02 - Premium Plan': [
                'build-blockchain/products/v2/premium-plan',
                'build-blockchain/products/v2/premium-endpoints',
                'build-blockchain/products/v2/hybrid-infra',
                'build-blockchain/products/v2/advanced-apis',
                ],
              },
            'build-blockchain/products/v2/scan',
          ],
        },
        {
          'Chains v2': [
            'build-blockchain/chains/v2/arbitrum',
            'build-blockchain/chains/v2/avalanche',
            'build-blockchain/chains/v2/binance-smart-chain',
            'build-blockchain/chains/v2/celo',
            'build-blockchain/chains/v2/ethereum',
            'build-blockchain/chains/v2/fantom',
            'build-blockchain/chains/v2/iotex',
            'build-blockchain/chains/v2/near',
            'build-blockchain/chains/v2/nervos',
            'build-blockchain/chains/v2/polygon',
            'build-blockchain/chains/v2/solana',
          ],
        },
        {
            'BSC Application Sidechain': [
            'build-blockchain/bas/overview',
            {
                'Architecture': [
                'build-blockchain/bas/architecture/overview',
                'build-blockchain/bas/architecture/circ-model-native-bridge',
                  'build-blockchain/bas/architecture/native-bridge',
                  'build-blockchain/bas/architecture/fast-finality-bls-crypto',
                  'build-blockchain/bas/architecture/sys-smart-contracts',
                  'build-blockchain/bas/architecture/governance',
                  'build-blockchain/bas/architecture/runtime-upgrades',
                ],
            },
            {
                'How to launch BAS': [
                 'build-blockchain/bas/how-to-launch/launch-bas',
                 'build-blockchain/bas/how-to-launch/deploy-erc20-token',
                 'build-blockchain/bas/how-to-launch/deploy-erc721-token',
                ],
            },
            'build-blockchain/bas/staking',
            'build-blockchain/bas/blockchain-security',
            'build-blockchain/bas/demo',
            'build-blockchain/bas/faq',
            'build-blockchain/bas/glossary',
          ],
        },
        {
            'Nodes': [
                {
                    'Algorand': [
                        'build-blockchain/nodes/algorand/overview',
                        'build-blockchain/nodes/algorand/endpoints',
                    ],
                },
                {
                    'Binance Chain': [
                        'build-blockchain/nodes/binance-chain/overview',
                    ],
                },
                {
                    'Binance Smart Chain': [
                        'build-blockchain/nodes/bsc/overview',
                        'build-blockchain/nodes/bsc/erigon-bsc-testnet',
                        'build-blockchain/nodes/bsc/run-bsc-node-on-erigon',
                    ],
                },
                {
                    'Bitcoin': [
                        'build-blockchain/nodes/bitcoin/overview',
                    ],
                },
                {
                    'Cardano': [
                        'build-blockchain/nodes/cardano/overview',
                    ],
                },
                {
                    'Celo': [
                        'build-blockchain/nodes/celo/overview',
                    ],
                },
                {
                    'Cosmos': [
                        'build-blockchain/nodes/cosmos/overview',
                    ],
                },
                {
                    'Covalent': [
                        'build-blockchain/nodes/covalent/overview',
                    ],
                },
                {
                    'Dash': [
                        'build-blockchain/nodes/dash/overview',
                    ],
                },
                {
                    'Decred': [
                        'build-blockchain/nodes/decred/overview',
                    ],
                },
                {
                    'Elastos': [
                        'build-blockchain/nodes/elastos/overview',
                    ],
                },
                {
                    'Eethreum 2': [
                        'build-blockchain/nodes/eth2/overview',
                        'build-blockchain/nodes/eth2/run-provider-nodes',
                        'build-blockchain/nodes/eth2/rewards-distribution',
                    ],
                },
                {
                    'Fantom': [
                        'build-blockchain/nodes/fantom/overview',
                        'build-blockchain/nodes/fantom/ftm-node-read-only',
                        'build-blockchain/nodes/fantom/ftm-node-full',
                    ],
                },
                {
                    'Vite': [
                        'build-blockchain/nodes/vite/supernode',
                        'build-blockchain/nodes/vite/full-node',
                    ],
                },
                {
                    'Harmony': [
                        'build-blockchain/nodes/harmony/overview',
                        'build-blockchain/nodes/harmony/run-staking-node-on-ankr',
                        'build-blockchain/nodes/harmony/faq',
                    ],
                },
                {
                    'Hathor': [
                        'build-blockchain/nodes/hathor/overview',
                        'build-blockchain/nodes/hathor/endpoints',
                    ],
                },
                {
                    'Hedera': [
                        'build-blockchain/nodes/hedera/overview',
                    ],
                },
                {
                    'Horizen': [
                        'build-blockchain/nodes/horizen/overview',
                        'build-blockchain/nodes/horizen/run-node',
                    ],
                },
                {
                    'Elrond': [
                        'build-blockchain/nodes/elrond/overview',
                        'build-blockchain/nodes/elrond/run-staking-node',
                    ],
                },
                {
                    'IOST': [
                        'build-blockchain/nodes/iost/overview',
                        'build-blockchain/nodes/iost/run-node',
                    ],
                },
                {
                    'LTO': [
                        'build-blockchain/nodes/lto/overview',
                        'build-blockchain/nodes/lto/run-node',
                        'build-blockchain/nodes/lto/faq',
                    ],
                },
                {
                    'Neo': [
                        'build-blockchain/nodes/neo/overview',
                    ],
                },
                {
                    'Near': [
                        'build-blockchain/nodes/near/overview',
                    ],
                },
                {
                    'Nervos': [
                        'build-blockchain/nodes/nervos/overview',
                        'build-blockchain/nodes/nervos/run-node',
                        'build-blockchain/nodes/nervos/endpoints',
                    ],
                },
                {
                    'NuCypher': [
                        'build-blockchain/nodes/nucypher/overview',
                        'build-blockchain/nodes/nucypher/run-node',
                    ],
                },
                {
                    'Nuls': [
                        'build-blockchain/nodes/nuls/overview',
                        'build-blockchain/nodes/nuls/endpoints',
                    ],
                },
                {
                    'OmiseGo': [
                        'build-blockchain/nodes/omisego/overview',
                        'build-blockchain/nodes/omisego/endpoints',
                    ],
                },
                {
                    'Pchain': [
                        'build-blockchain/nodes/pchain/overview',
                        'build-blockchain/nodes/pchain/run-node',
                        'build-blockchain/nodes/pchain/faq',
                    ],
                },
                {
                    'Polygon': [
                        'build-blockchain/nodes/polygon/overview',
                        'build-blockchain/nodes/polygon/run-node',
                    ],
                },
                {
                    'Stafi': [
                        'build-blockchain/nodes/stafi/overview',
                        'build-blockchain/nodes/stafi/run-node',
                    ],
                },
                {
                    'TomoX': [
                        'build-blockchain/nodes/tomochain/overview',
                        'build-blockchain/nodes/tomochain/run-node-master',
                        'build-blockchain/nodes/tomochain/run-node-tomox',
                    ],
                },
            ],
        },
        {
          'Guides': [
            'build-blockchain/guides/json-methods',
            'build-blockchain/guides/libraries',
            'build-blockchain/guides/websocket-premium',
            'build-blockchain/guides/rpcapi',
          ],
        },
                  {
              'Archive': [

                  {
                      'Products v1': [
                          'build-blockchain/products/v1/about-api-services',
                          'build-blockchain/products/v1/node-services'
                      ],
                  },
                  {
                      'Chains v1': [
                          'build-blockchain/chains/v1/arb-api',
                          'build-blockchain/chains/v1/avax-api',
                          'build-blockchain/chains/v1/bsc-api',
                          'build-blockchain/chains/v1/clover-api',
                          'build-blockchain/chains/v1/ethereum-api',
                          'build-blockchain/chains/v1/fantom-api',
                          'build-blockchain/chains/v1/huobi-api',
                          'build-blockchain/chains/v1/kusama-api',
                          'build-blockchain/chains/v1/oec-api',
                          'build-blockchain/chains/v1/polkadot-api',
                          'build-blockchain/chains/v1/polygon-api',
                          'build-blockchain/chains/v1/terra-api',
                          'build-blockchain/chains/v1/xdai-api',
                      ],
                  },
              ],
          },
        'build-blockchain/support/get-support',
      ],
    },
  ],
  earnSidebar: {
    'Staking': [
     'staking/overview',
        {
          'Liquid Staking': [
            'staking/liquid-staking/overview',
            {
              'AVAX': [
                'staking/liquid-staking/avax/overview',
                'staking/liquid-staking/avax/staking-mechanics',
                'staking/liquid-staking/avax/stake-avax',
                'staking/liquid-staking/avax/unstake-avax',
                'staking/liquid-staking/avax/faq',
              ],
            },
            {
              'BNB': [
                'staking/liquid-staking/bnb/overview',
                'staking/liquid-staking/bnb/staking-mechanics',
                'staking/liquid-staking/bnb/dev-details',
                'staking/liquid-staking/bnb/stake-bnb',
                'staking/liquid-staking/bnb/unstake-bnb',
                'staking/liquid-staking/bnb/faq',
              ],
            },
            {
              'DOT': [
               'staking/liquid-staking/dot/overview',
                'staking/liquid-staking/dot/staking-mechanics',
                'staking/liquid-staking/dot/stake-dot',
                'staking/liquid-staking/dot/unstake-dot',
                'staking/liquid-staking/dot/faq',
              ],
            },
            {
              'ETH': [
               'staking/liquid-staking/eth/overview',
                'staking/liquid-staking/eth/staking-mechanics',
                'staking/liquid-staking/eth/stake-eth',
                'staking/liquid-staking/eth/unstake-eth',
                'staking/liquid-staking/eth/faq',
              ],
            },
            {
              'FTM': [
                'staking/liquid-staking/ftm/overview',
                'staking/liquid-staking/ftm/staking-mechanics',
                'staking/liquid-staking/ftm/stake-ftm',
                'staking/liquid-staking/ftm/unstake-ftm',
                'staking/liquid-staking/ftm/faq',
              ],
            },
            {
              'KSM': [
               'staking/liquid-staking/ksm/overview',
                'staking/liquid-staking/ksm/staking-mechanics',
                'staking/liquid-staking/ksm/stake-ksm',
                'staking/liquid-staking/ksm/unstake-ksm',
                'staking/liquid-staking/ksm/faq',
              ],
            },
            {
              'MATIC': [
               'staking/liquid-staking/matic/overview',
                'staking/liquid-staking/matic/staking-mechanics',
                'staking/liquid-staking/matic/dev-details',
                'staking/liquid-staking/matic/stake-matic',
                'staking/liquid-staking/matic/unstake-matic',
                'staking/liquid-staking/matic/faq',
              ],
            },
          ],
        },
        {
           'DeFi': [
            'staking/defi/overview',
            'staking/defi/yield-farm',
            'staking/defi/provide-liquidity-to-dex'
          ],
        },
        {
          'Bridge': [
           'staking/bridge/overview',
           'staking/bridge/bridge-mechanics',
            'staking/bridge/bridge-tokens'
          ],
        },
        {
          'Switch': [
            'staking/switch/overview',
            'staking/switch/switch-mechanics'
          ],
        },
        {
          'Liquid Crowdloan': [
            'staking/liquid-crowdloan/overview',
          ],
        },
        {
          'Reference': [
            'staking/reference/staking-compatible-wallets',
            'staking/reference/ls-smart-contract-addresses-mn',
            'staking/reference/ls-smart-contract-addresses-tn',
            'staking/reference/micropools',
            'staking/reference/liquid-crowdloan-market-makers',
            'staking/reference/parachain-sdk',
            'staking/reference/brand-assets',
            'staking/reference/staking-glossary',
            'staking/reference/staking-principles',
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
          {
            'Setting up': [
              'game/unreal/setting-up-v4',
              'game/unreal/setting-up-v5',
            ],
          },
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
             {
                'Tokens': [
                    'learn/tokens-governance/ankr-tokens',
                    'learn/tokens-governance/buy-ankr-cex',
                    'learn/tokens-governance/buy-ankr-dex',
                ],
             },
             {
                'Governance': [
                 'learn/tokens-governance/governance',
                 'learn/tokens-governance/tokenomics',
                ],
             },

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
