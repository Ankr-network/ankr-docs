---
title: GetBlockNumber
id: get-block-number
---

# GetBlockNumber

## Declaration

Task<BigInteger> GetBlockNumber()

## Returns

| `BigInteger` | Returns the number of the latest block. |

## Description

Returns a current block number.

## Code example

```C++
using AnkrSDK.Core.Infrastructure;
using AnkrSDK.Provider;
using Nethereum.Util;
using Nethereum.Web3;
using UnityEngine;

namespace DefaultNamespace
{
    public class GetBlockNumberExample : MonoBehaviour
    {
        private IAnkrSDK _ankrSDKWrapper;

        private void Start()
        {
            _ankrSDKWrapper = AnkrSDKFactory.GetAnkrSDKInstance("https://...");
        }

        public async void GetBalance()
        {
            var currentBlock = await _ankrSDKWrapper.Eth.GetBlockNumber();
        }
    }
}
```


