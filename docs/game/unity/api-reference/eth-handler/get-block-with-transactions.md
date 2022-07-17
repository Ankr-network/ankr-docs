---
title: GetBlockWithTransactions
id: get-block-with-transactions
---

# GetBlockWithTransactions

## Declaration

Task<BlockWithTransactions> GetBlockWithTransactions(string hash);

or

Task<BlockWithTransactions> GetBlockWithTransactions(BlockParameter block);

## Parameters

| `hash` | A `string` containing the block hash. |

or

| `block` | A `BlockParameter` that can be either a number of blocks or the `earliest`, `latest`, or `pending` options. |

## Returns

| `BlockWithTransactions` | A block object containing transactions objects. |

## Code sample

```C++
using AnkrSDK.Core.Infrastructure;
using AnkrSDK.Provider;
using Nethereum.RPC.Eth.DTOs;
using UnityEngine;

namespace DefaultNamespace
{
    public class GetBlockWithTransactionsExample : MonoBehaviour
    {
        private IAnkrSDK _ankrSDKWrapper;

        private void Start()
        {
            _ankrSDKWrapper = AnkrSDKFactory.GetAnkrSDKInstance("https://...");
        }

        public async void GetBalance()
        {
            var blockHash = "0x...";
            ulong blockNumber = 99999;
            
            var blockByHash = await _ankrSDKWrapper.Eth.GetBlockWithTransactions(blockHash);
            var latestBlock = await _ankrSDKWrapper.Eth.GetBlockWithTransactions(BlockParameter.CreateLatest());
            var blockByNumber = await _ankrSDKWrapper.Eth.GetBlockWithTransactions(new BlockParameter(blockNumber));
        }
    }
}
```