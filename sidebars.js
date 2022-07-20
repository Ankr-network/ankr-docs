module.exports =
{
  appchainSidebar: [
      {
          'App Chains': [
              'build-blockchain/app-chain/overview',
              {
                  'Components': [
                      'build-blockchain/app-chain/components/validator-nodes',
                      'build-blockchain/app-chain/components/rpc-endpoints',
                      'build-blockchain/app-chain/components/block-explorer',
                      'build-blockchain/app-chain/components/testnet-faucet',
                      'build-blockchain/app-chain/components/staking-ui',
                  ],
              },
              'build-blockchain/app-chain/exchange-readiness',
              'build-blockchain/app-chain/step-by-step',

          ],
      },
   ],
  buildSidebar: [
    {
      Build: [
          {
              type: 'category',
              label: 'Getting Started',
              items: [
                      'build-blockchain/overview',
                     ],
          },
        {
          'Products': [
              {
                  'RPC Services': [
                      'build-blockchain/products/v2/public-rpc',
                      {
                          'Premium Tier': [
                              'build-blockchain/products/v2/premium-plan',
                              'build-blockchain/products/v2/premium-endpoints',
                              'build-blockchain/products/v2/hybrid-infra',
                          ],
                      },
                      {
                          'Chains': [
                              'build-blockchain/chains/v2/arbitrum',
                              'build-blockchain/chains/v2/avalanche',
                              'build-blockchain/chains/v2/binance-smart-chain',
                              'build-blockchain/chains/v2/celo',
                              {
                                  'Ethereum': [
                                      'build-blockchain/chains/v2/ethereum/about-ethereum',
                                      {
                                          'How to': [
                                              'build-blockchain/chains/v2/ethereum/how-to/connect-ethereum',
                                              'build-blockchain/chains/v2/ethereum/how-to/ethereum-requests',
                                              'build-blockchain/chains/v2/ethereum/how-to/ethereum-transactions',
                                              'build-blockchain/chains/v2/ethereum/how-to/build-eth-project',
                                          ],
                                      },
                                  ],
                              },
                              'build-blockchain/chains/v2/fantom',
                              'build-blockchain/chains/v2/gnosis',
                              'build-blockchain/chains/v2/harmony',
                              'build-blockchain/chains/v2/iotex',
                              'build-blockchain/chains/v2/moonbeam',
                              'build-blockchain/chains/v2/near',
                              'build-blockchain/chains/v2/nervos',
                              'build-blockchain/chains/v2/polygon',
                              {
                                  'Syscoin': [
                                      'build-blockchain/chains/v2/syscoin/about-syscoin',
                                  ],
                              },
                              'build-blockchain/chains/v2/solana',
                          ]
                      },
                      'build-blockchain/concepts/pricing',
                  ],
              },
              {
                  'Advanced APIs': [
                      'build-blockchain/products/v2/advanced-apis',
                      'build-blockchain/products/v2/scan',
                  ],
              },
                  {
                     'BNB Sidechain': [
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
                             'Security': [
                                 'build-blockchain/bas/security/blockchain-evm',
                                 'build-blockchain/bas/security/smart-contracts',
                                 'build-blockchain/bas/security/on-chain',
                                 'build-blockchain/bas/security/off-chain',
                             ],
                         },
                         {
                             'How to launch BNB Sidechain': [
                                 'build-blockchain/bas/how-to-launch/launch-bas',
                                 'build-blockchain/bas/how-to-launch/deploy-erc20-token',
                                 'build-blockchain/bas/how-to-launch/deploy-erc721-token',
                             ],
                         },
                         'build-blockchain/bas/staking',
                         'build-blockchain/bas/demo',
                         'build-blockchain/bas/faq',
                         'build-blockchain/bas/glossary',
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
              'Legacy': [

                  {
                      'Products': [
                          'build-blockchain/products/v1/about-api-services',
                          'build-blockchain/products/v1/node-services'
                      ],
                  },
                  {
                      'Chains': [
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
              ],
          },
          {
            'Support': [
        'build-blockchain/support/get-support',
        'build-blockchain/support/errors'
            ],
          },
      ],
    },
  ],
  earnSidebar: {
    'Staking': [
     'staking/overview',
    {
    'For Stakers': [

        {
          'Liquid Staking': [
            'staking/liquid-staking/overview',
            {
              'AVAX': [
                'staking/liquid-staking/avax/overview',
                'staking/liquid-staking/avax/stake-avax',
                'staking/liquid-staking/avax/unstake-avax',
                'staking/liquid-staking/avax/faq',
              ],
            },
            {
              'BNB': [
                'staking/liquid-staking/bnb/overview',
                'staking/liquid-staking/bnb/stake-bnb',
                'staking/liquid-staking/bnb/unstake-bnb',
                'staking/liquid-staking/bnb/faq',
              ],
            },
            {
              'DOT': [
                'staking/liquid-staking/dot/overview',
                'staking/liquid-staking/dot/stake-dot',
                'staking/liquid-staking/dot/unstake-dot',
                'staking/liquid-staking/dot/faq',
              ],
            },
            {
              'ETH': [
                'staking/liquid-staking/eth/overview',
                'staking/liquid-staking/eth/stake-eth',
                'staking/liquid-staking/eth/unstake-eth',
                'staking/liquid-staking/eth/faq',
              ],
            },
            {
              'FTM': [
                'staking/liquid-staking/ftm/overview',
                'staking/liquid-staking/ftm/stake-ftm',
                'staking/liquid-staking/ftm/unstake-ftm',
                'staking/liquid-staking/ftm/faq',
              ],
            },
            {
              'KSM': [
                'staking/liquid-staking/ksm/overview',
                'staking/liquid-staking/ksm/stake-ksm',
                'staking/liquid-staking/ksm/unstake-ksm',
                'staking/liquid-staking/ksm/faq',
              ],
            },
            {
              'MATIC': [
                'staking/liquid-staking/matic/overview',
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
           'staking/bridge/bridge-tokens'
          ],
        },
        {
          'Switch': [
            'staking/switch/overview',
          ],
        },
        {
          'Liquid Crowdloan': [
            'staking/liquid-crowdloan/overview',
          ],
        },
          ],
        },
        {
         'For Integrators': [
            {
            'Oracles': [
               'staking/liquid-staking/oracles/overview',
               'staking/liquid-staking/oracles/pancakeswap',
                ],
            },
            {
             'API': [
               'staking/api-overview',
               'staking/liquid-staking/avax/api',
               'staking/liquid-staking/bnb/api',
               'staking/liquid-staking/eth/api',
               'staking/liquid-staking/ftm/api',
               'staking/liquid-staking/matic/api',
               'staking/extra/staking-metrics',
                 ],
             },
            {
             'SDK': [
                'staking/sdk-overview',
                'staking/liquid-crowdloan/sdk',
                'staking/liquid-staking/bnb/sdk',
                'staking/liquid-staking/eth/sdk',
                'staking/liquid-staking/matic/sdk',
                 ],
             },
             {
             'Development details': [
               'staking/liquid-staking/avax/staking-mechanics',
               'staking/liquid-staking/bnb/staking-mechanics',
               'staking/liquid-staking/eth/staking-mechanics',
               'staking/liquid-staking/dot/staking-mechanics',
               'staking/liquid-staking/ftm/staking-mechanics',
               'staking/liquid-staking/ksm/staking-mechanics',
               'staking/liquid-staking/matic/staking-mechanics',
               'staking/switch/switch-mechanics',
               'staking/bridge/bridge-mechanics',
               ],
             },
           ],
        },
        {
        'Extra': [
            'staking/extra/glossary',
            'staking/extra/principles',
            'staking/extra/audit-reports',
            'staking/extra/ankr-validators',
            'staking/extra/liquid-staking-fees',
            'staking/extra/ls-smart-contract-addresses-mn',
            'staking/extra/ls-smart-contract-addresses-tn',
            'staking/extra/switch-aethc-binance',
            'staking/extra/compatible-wallets',
            'staking/extra/micropools',
            'staking/extra/liquid-crowdloan-market-makers',
            'staking/extra/brand-assets',
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
             'Getting Started': [
              'game/unity/getting-started/before-you-start',
              'game/unity/getting-started/connect-wallet',
            ],
          },
          {
             'Interacting with Blockchain': [
              'game/unity/interacting-with-blockchain/avialable-interfaces',
              'game/unity/interacting-with-blockchain/interact-with-smart-contract',
              'game/unity/interacting-with-blockchain/mint-nft',
              'game/unity/interacting-with-blockchain/read-nft',
              'game/unity/interacting-with-blockchain/update-nft',
            ],
          },
          {
             'How to': [
              'game/unity/how-tos/subscribe-game',
              'game/unity/how-tos/switch-to-webgl',
            ],
          },
            {
                'API Reference': [
                    {
                        'AnkrSDKFactory': [
                            'game/unity/api-reference/ankr-sdk-factory/ankr-sdk-factory',
                            'game/unity/api-reference/ankr-sdk-factory/get-ankr-sdk-instance',
                        ],
                    },
                    {
                        'AnkrSDKWrapper': [
                            'game/unity/api-reference/ankr-sdk-wrapper/ankr-sdk-wrapper',
                            'game/unity/api-reference/ankr-sdk-wrapper/get-contract',
                            'game/unity/api-reference/ankr-sdk-wrapper/create-subscriber',
                            'game/unity/api-reference/ankr-sdk-wrapper/disconnect',
                        ],
                    },
                    {
                        'EthHandler': [
                            'game/unity/api-reference/eth-handler/eth-handler',
                            'game/unity/api-reference/eth-handler/get-transaction',
                            'game/unity/api-reference/eth-handler/get-transaction-receipt',
                            'game/unity/api-reference/eth-handler/get-default-account',
                            'game/unity/api-reference/eth-handler/sign',
                            'game/unity/api-reference/eth-handler/send-transaction',
                            'game/unity/api-reference/eth-handler/estimate-gas-2',
                            'game/unity/api-reference/eth-handler/get-balance',
                            'game/unity/api-reference/eth-handler/get-block-number',
                            'game/unity/api-reference/eth-handler/get-transaction-count',
                            'game/unity/api-reference/eth-handler/get-block-with-transactions',
                            'game/unity/api-reference/eth-handler/get-block-with-transactions-hashes',
                        ],
                    },
                    {
                        'Contract': [
                            'game/unity/api-reference/contract/contract',
                            'game/unity/api-reference/contract/call-method',
                            'game/unity/api-reference/contract/web3-send-method',
                            'game/unity/api-reference/contract/get-events',
                            'game/unity/api-reference/contract/get-data',
                            'game/unity/api-reference/contract/estimate-gas',
                        ],
                    },
                    {
                        'ContractEventSubscriber': [
                            'game/unity/api-reference/contract-event-subscriber/contract-event-subscriber',
                            'game/unity/api-reference/contract-event-subscriber/constructor',
                            'game/unity/api-reference/contract-event-subscriber/subscribe',
                            'game/unity/api-reference/contract-event-subscriber/listen-for-events',
                            'game/unity/api-reference/contract-event-subscriber/unsubscribe',
                            'game/unity/api-reference/contract-event-subscriber/stop-listen',
                        ],
                    },
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
        'Extra': [
          'game/extra/game-reference',
            'game/extra/events-and-subscriptions',
            'game/extra/gas-fees-gas-free-methods',
            'game/extra/currency-units',
            'game/extra/csharp-to-solidity',
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
          'learn/tutorials/tutorials',
          'learn/tutorials/create-voting-system/movie-voting-web3',
          'learn/tutorials/create-eth-app-tutorial/create-eth-app',
          'learn/tutorials/simple-truffle',
          'learn/tutorials/connect-web3js',
          'learn/tutorials/erigon-bsc-tutorial/erigon-bsc',
          'learn/tutorials/connect-web3py',
        ],
      },
     {
         'Extra': [
          'learn/extra/ankr-vision',
          'learn/extra/51-attacks',
        ],
      },
    ],
  },
}
