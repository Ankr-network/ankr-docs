---
title: GetTransactionReceipt
id: get-transaction-receipt
---

# GetTransactionReceipt

## Declaration

Task<TransactionReceipt> GetTransactionReceipt(string transactionHash)

## Parameters

| transactionHash | String with hash of transaction. |

## Returns

`TransactionReceipt` — a transaction receipt object.

## Description

Returns the receipt of a transaction by transaction hash. Method resolves when transaction will is mined.

## How to get contract events from receipt

If contract method that you called emit event you can get it from [TransactionReceipt](https://github.com/Nethereum/Nethereum/blob/master/src/Nethereum.RPC/Eth/DTOs/TransactionReceipt.cs) on `ReceiptReceived` stage. But first you need to make [DTO corresponding to contract event](/game/unity/api-reference/contract/events-and-subscriptions#Event-nature).

```C++
public void HandleReceipt(object sender, TransactionReceipt receipt)
{
	var transferEventOutput = receipt.DecodeAllEvents<DTO>();
	transferEventOutput[0].Event./// Get all data what you need
}
```

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
		var successsStatus = 1;
		var transactionHash = await _contract.CallMethod("yourMethodName", Array.Empty<object>());

		var receipt = await _eth.GetTransactionReceipt(transactionHash);

		if (receipt.Status.Value.Equals(successsStatus))
		{
			Debug.Log("Transaction was successful");
		}
		else
		{
			Debug.Log("Transaction has failed");
		}
	}
}
```
