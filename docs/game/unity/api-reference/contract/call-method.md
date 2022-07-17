---
title: CallMethod
id: call-method
---

# CallMethod

## Declaration

Task<string> CallMethod(string methodName, object[] arguments, string gas, string gasPrice, string nonce)

## Parameters

| `methodName` | A string containing a contract method name according to ABI.      |
| `arguments`  | Arguments that take contract method according to ABI.             |
| `gas`        | The maximum gas provided for this call “transaction” (gas limit). |
| `gasPrice`   | The gas price in WEI to use for this call “transaction”.          |
| `nonce`      | The nonce number of the transaction.                              |

## Returns

| `string` | A hash of the transaction. |

## Description

:::warning
Use only for methods that change a smart contract state. To return a contract state, contract field, and mappings, use [GetData](/game/unity/api-reference/contract/get-data). To find out more on the difference between contract methods, see [Gas fees and gas-free methods](/game/extra/gas-fees-gas-free-methods).
:::

Makes a call to the contract method, and returns a transaction hash when that call applies to work. This method is asynchronous.

## How to speed up a transaction

If you'd like to speed up a call that has already been applied to work but still hasn't been mined, you need to do the following:

1. Get a nonce of the mining transaction (using [GetTransaction](/game/unity/eth-handler/get-transaction)).
2. Call the method with the same arguments but set the `nonce` to the value you've received in Step 1.

## Code example

```C++
using System;
using AnkrSDK.Core.Infrastructure;
using AnkrSDK.Provider;
using UnityEngine;

public class ContractExample : MonoBehaviour
{
	private IContract _contract;
	private IEthHandler _eth;

	private void Start()
	{
		var ankrSDK = AnkrSDKFactory.GetAnkrSDKInstance("http://...");
		_contract = ankrSDK.GetContract("0x...","...");
		_eth = ankrSDK.Eth;
	}

	public async void Call()
	{
		var transactionHash = await _contract.CallMethod("yourMethodName", Array.Empty<object>());

		var trx = await _eth.GetTransaction(transactionHash);

		Debug.Log($"Nonce: {trx.Nonce}");
	}
}
```
