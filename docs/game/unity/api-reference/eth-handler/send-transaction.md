---
title: SendTransaction
id: send-transaction
---

# SendTransaction

## Declaration

`Task<string> SendTransaction(string from, string to, string data, string value, string gas, string gasPrice, string nonce)`

## Parameters

| Parameter  | Description                                                                                                          |
|------------|----------------------------------------------------------------------------------------------------------------------|
| `from`     | The address for the sending account.                                                                                 |
| `to`       | The destination address of the message.                                                                              |
| `data`     | String containing the data of the function call on a contract (optional).                                            |
| `value`    | The value transferred for the transaction in wei (optional).                                                         |
| `gas`      | The maximum gas provided for this call “transaction” (gas limit) (optional).                                         |
| `gasPrice` | The gas price in wei to use for this call “transaction” (optional).                                                  |
| `nonce`    | An integer value of the nonce. Allows to overwrite your own pending transactions that use the same nonce. (optional) |

## Returns

| Parameter | Description                          |
|-----------|--------------------------------------|
| `string`  | Returns a 32 bytes transaction hash. |

## Description

Sends a transaction to the network.

## Code example

```C++
using AnkrSDK.Core.Infrastructure;
using AnkrSDK.Provider;
using Cysharp.Threading.Tasks;
using UnityEngine;

public class SendTransactionExample : MonoBehaviour
{
	private IEthHandler _eth;

	private void Start()
	{
		var ankrSDK = AnkrSDKFactory.GetAnkrSDKInstance("http://...");
		_eth = ankrSDK.Eth;
	}

	public async UniTaskVoid SendTransaction()
	{
		var sender = "0x...";
		var receiver = "0x...";
		var value = "1"; // in Wei
		var trxHash = await _eth.SendTransaction(sender, receiver, value: value);
	}
}
```
