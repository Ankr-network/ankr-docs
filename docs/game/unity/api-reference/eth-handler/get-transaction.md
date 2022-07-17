---
title: GetTransaction
id: get-transaction
---

# GetTransaction

## Declaration

Task<Transaction> GetTransaction(string transactionReceipt)

## Parameters

| transactionReceipt | String with hash of transaction. |

## Returns

`Transaction` — a transaction object.

## Description

Returns a transaction matching the given transaction hash.

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
