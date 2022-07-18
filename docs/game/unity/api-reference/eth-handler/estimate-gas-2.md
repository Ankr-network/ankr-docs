---
title: EstimateGas 2
id: estimate-gas-2
---

# EstimateGas 2

## Declaration

`Task<HexBigInteger> EstimateGas(string from, string to, string data, string value, string gas, string gasPrice, string nonce)`

or

`Task<HexBigInteger> EstimateGas(TransactionInput transactionInput)`

## Parameters

| Parameter   | Description                                                                                                      |
|-------------|------------------------------------------------------------------------------------------------------------------|
| `from`      | An address for the sending account.                                                                              |
| `to`        | The destination address of the message.                                                                          |
| `data`      | String containing the data of the function call on a contract. (optional)                                        |
| `value`     | The value transferred for the transaction in wei. (optional)                                                     |
| `gas`       | The maximum gas provided for this call “transaction” (gas limit). (optional)                                     |
| `gasPrice`  | The gas price in wei to use for this call “transaction”. (optional)                                              |
| `nonce`     | Integer of the nonce. This allows to overwrite your own pending transactions that use the same nonce. (optional) |

or

| Parameter          | Description                                  |
|--------------------|----------------------------------------------|
| `transactionInput` | An object containing transaction parameters. |

## Returns

| Parameter       | Description                                                     |
|-----------------|-----------------------------------------------------------------|
| `HexBigInteger` | Returns the gas amount used for the simulated call/transaction. |

## Description

Executes a message call or transaction and returns the amount of the gas used.

## Code example

```C++
using AnkrSDK.Core.Infrastructure;
using AnkrSDK.Provider;
using Cysharp.Threading.Tasks;
using UnityEngine;

public class EstimateGasExample : MonoBehaviour
{
	private IEthHandler _eth;

	private void Start()
	{
		var ankrSDK = AnkrSDKFactory.GetAnkrSDKInstance("http://...");
		_eth = ankrSDK.Eth;
	}

	public async UniTaskVoid EstimateGas()
	{
		var sender = "0x...";
		var receiver = "0x...";
		var value = "1"; // in Wei
		var gas = await _eth.EstimateGas(sender, receiver, value: value);
		
	}
}
```
