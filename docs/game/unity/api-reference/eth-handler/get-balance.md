---
title: GetBalance
id: get-balance
---

# GetBalance

## Declaration

`Task<BigInteger> GetBalance(string address)`

## Parameters

| Parameter   | Description                                                                                              |
|-------------|----------------------------------------------------------------------------------------------------------|
| `address`   | An account address. The method returns the default account's balance if the parameter hasn't been given. |

## Returns

| Parameter    | Description                |
|--------------|----------------------------|
| `BigInteger` | An account balance in WEI. |

## Description

Gets an address's balance in ETH currency.

The method returns balance info in WEI units. To convert balance into other units, use [Web3.Convert](https://github.com/Nethereum/Nethereum/blob/master/src/Nethereum.Util/UnitConversion.cs).

To find more info on the currency units, have a look at the [Currency Units](/game/extra/currency-units) section.

## Code example

```C++
using AnkrSDK.Core.Infrastructure;
using AnkrSDK.Provider;
using Nethereum.Util;
using Nethereum.Web3;
using UnityEngine;

namespace DefaultNamespace
{
    public class GetBalanceExample : MonoBehaviour
    {
        private IAnkrSDK _ankrSDKWrapper;

        private void Start()
        {
            _ankrSDKWrapper = AnkrSDKFactory.GetAnkrSDKInstance("https://...");
        }

        public async void GetBalance()
        {
            var balanceInWei = await _ankrSDKWrapper.Eth.GetBalance();
            var etherAmount = Web3.Convert.FromWei(balanceInWei);
            var gweiAmount = Web3.Convert.FromWei(balanceInWei, UnitConversion.EthUnit.Gwei);
        }
    }
}
```
