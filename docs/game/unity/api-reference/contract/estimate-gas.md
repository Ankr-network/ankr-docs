---
title: EstimateGas
id: estimate-gas
---

# EstimateGas

## Declaration

UniTask<HexBigInteger> EstimateGas(string methodName, object[] arguments, string gas, string gasPrice, string nonce)

## Parameters

| `methodName` | A string with contract method name according to ABI.              |
| `arguments`  | Arguments that take contract method according to ABI.             |
| `gas`        | The maximum gas provided for this call “transaction” (gas limit). |
| `gasPrice`   | The gas price in wei to use for this call “transaction”.          |
| `nonce`      | The nonce number of a transaction.                                |

## Returns

| `HexBigInteger` | A gas estimation for a transaction. |

## Description

:::warning
Use only for the contract methods that change a smart contract state. To find out more on the difference between the contract methods, have a look at [Gas fee and gas-free methods](/game/extra/gas-fee-gas-free-methods).
:::

Requests a gas estimation for a contract method call.

## Code example

```C++
using System;
using System.Numerics;
using AnkrSDK.Core.Infrastructure;
using AnkrSDK.Provider;
using AnkrSDK.UseCases;
using Cysharp.Threading.Tasks;
using UnityEngine;

public class ContractExample : MonoBehaviour
{
	private IContract _contract;

	private void Start()
	{
		var ankrSDK = AnkrSDKFactory.GetAnkrSDKInstance("http://...");
		_contract = ankrSDK.GetContract("0x...", "...");
	}

	public async UniTaskVoid CallMint()
	{
		var method = "yourMethodName";
		var arguments = Array.Empty<object>();
		var additionalGas = 100;

		var gasEstimation = await _contract.EstimateGas(method, arguments);
		var gas = gasEstimation.Value + new BigInteger(additionalGas);
		var receipt = await _contract.CallMethod(method, arguments, gas: gas.ToString());

		Debug.Log($"Receipt: {receipt}");
	}
}
```

