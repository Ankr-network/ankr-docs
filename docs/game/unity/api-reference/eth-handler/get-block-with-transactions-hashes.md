---
title: GetBlockWithTransactionsHashes
id: get-block-with-transactions-hashes
---

# GetBlockWithTransactionsHashes

## Declaration

`Task<BlockWithTransactionHashes> GetBlockWithTransactionsHashes(string hash)`

or

`Task<BlockWithTransactionHashes> GetBlockWithTransactionsHashes(BlockParameter block)`

## Parameters

| Parameter | Description                           |
|-----------|---------------------------------------|
| `hash`    | A `string` containing the block hash. |

or

| Parameter | Description                                    |
|-----------|------------------------------------------------|
| `block`   | A `BlockParameter` that can be either a number of blocks or the `earliest`, `latest`, or `pending` options. |

## Returns

| Parameter                    | Description                                    |
|------------------------------|------------------------------------------------|
| `BlockWithTransactionHashes` | A block object containing transactions hashes. |

## Description

Returns a block matching a block number or block hash.

## Code example

```C++
using AnkrSDK.Core.Infrastructure;
using AnkrSDK.Provider;
using Nethereum.RPC.Eth.DTOs;
using UnityEngine;

namespace DefaultNamespace
{
    public class GetBlockWithTransactionsHashesExample : MonoBehaviour
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
            
            var blockByHash = await _ankrSDKWrapper.Eth.GetBlockWithTransactionsHashes(blockHash);
            var latestBlock = await _ankrSDKWrapper.Eth.GetBlockWithTransactionsHashes(BlockParameter.CreateLatest());
            var blockByNumber = await _ankrSDKWrapper.Eth.GetBlockWithTransactionsHashes(new BlockParameter(blockNumber));
        }
    }
}
```

