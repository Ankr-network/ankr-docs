---
title: GetTransactionCount
id: get-transaction-count
---

# GetTransactionCount

## Declaration

`Task<BigInteger> GetTransactionCount(string hash)`

or

`Task<BigInteger> GetTransactionCount(BlockParameter block)`

## Parameters

| Parameter | Description                                                                                                 |
|-----------|-------------------------------------------------------------------------------------------------------------|
| `hash`    | A `string` containing a block hash.                                                                         |
| `block`   | A `BlockParameter` that can be either a number of blocks or the `earliest`, `latest`, or `pending` options. |

## Returns

| Parameter    | Description                                  |
|--------------|----------------------------------------------|
| `BigInteger` | A number of transactions in the given block. |

## Description

Gets a number of transactions on the given block.

## Code example

```C++
using AnkrSDK.Core.Infrastructure;
using AnkrSDK.Provider;
using Nethereum.RPC.Eth.DTOs;
using UnityEngine;

namespace DefaultNamespace
{
    public class GetTransactionCountExample : MonoBehaviour
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
            
            var blockTransactionsCountByHash = await _ankrSDKWrapper.Eth.GetTransactionCount(blockHash);
            var latestBlockTransactionsCount = await _ankrSDKWrapper.Eth.GetTransactionCount(BlockParameter.CreateLatest());
            var blockTransactionsCountByNumber = await _ankrSDKWrapper.Eth.GetTransactionCount(new BlockParameter(blockNumber));
        }
    }
}
```
