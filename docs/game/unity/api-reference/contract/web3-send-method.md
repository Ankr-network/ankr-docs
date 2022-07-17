---
title: Web3SendMethod
id: web3-send-method
---

# Web3SendMethod

## Declaration

Task Web3SendMethod(string methodName, object[] arguments, ITransactionEventHandler evController, string gas, string gasPrice, string nonce)

## Parameters

| `methodName`   | A string containing a contract method name according to the ABI.         |
| `arguments`    | Arguments that take contract method according to the ABI.                |
| `evController` | And implementation instance of the `ITransactionEventHandler` interface. |
| `gas`          | The maximum gas provided for this call “transaction” (gas limit).        |
| `gasPrice`     | The gas price in WEI to use for this call “transaction”.                 |
| `nonce`        | A nonce number of a transaction.                                         |

## Returns

The method returns nothing specific, but instead it returns various values on various stages of a contract method execution:

| `TransactionSendBegin`    | Returns [TransactionInput](https://github.com/Nethereum/Nethereum/blob/master/src/Nethereum.RPC/Eth/DTOs/TransactionInput.cs). |
| `TransactionSendEnd`      | Returns [TransactionInput](https://github.com/Nethereum/Nethereum/blob/master/src/Nethereum.RPC/Eth/DTOs/TransactionInput.cs). |
| `TransactionHashReceived` | Returns a `string`. |
| `ErrorReceived`           | Returns an `Exception`. |
| `ReceiptReceived`         | Returns a [TransactionReceipt](https://github.com/Nethereum/Nethereum/blob/master/src/Nethereum.RPC/Eth/DTOs/TransactionReceipt.cs). |

## Description

:::warning
Use only for methods that change a smart contract state. Use [GetData](/game/unity/api-reference/contract/get-data) for methods that return contract state, contract field, and mappings. To get more about difference between contract method please read the article.

In contrast with [CallMethod](/game/unity/api-reference/contract/call-method), this method provides the handlers for all the transaction lifecycle stages. To work with that method you need to implement the `ITransactionEventHandler` interface. The following implementation works with `EventHandler` to provide the most flexible experience to work with a transaction lifecycle.

```C++
using System;
using AnkrSDK.Core.Infrastructure;
using Nethereum.RPC.Eth.DTOs;

public class TransactionEventDelegator : ITransactionEventHandler
{
	public event EventHandler<TransactionInput> OnTransactionSendBegin;
	public event EventHandler<TransactionInput> OnTransactionSendEnd;
	public event EventHandler<string> OnTransactionHashReceived;
	public event EventHandler<TransactionReceipt> OnReceiptReceived;
	public event EventHandler<Exception> OnError;

	public void TransactionSendBegin(TransactionInput transactionInput)
	{
		OnTransactionSendBegin?.Invoke(this, transactionInput);
	}

	public void TransactionSendEnd(TransactionInput transactionInput)
	{
		OnTransactionSendEnd?.Invoke(this, transactionInput);
	}

	public void TransactionHashReceived(string transactionHash)
	{
		OnTransactionHashReceived?.Invoke(this, transactionHash);
	}

	public void ErrorReceived(Exception exception)
	{
		OnError?.Invoke(this, exception);
	}

	public void ReceiptReceived(TransactionReceipt receipt)
	{
		OnReceiptReceived?.Invoke(this, receipt);
	}
}
```

Let’s look at all the methods and how they relate to a transaction lifecycle:

* `TransactionSendBegin` is called before sending a transaction.
* `TransactionSendEnd` is called when a transaction has been sent to an Ethereum node.
* `TransactionHashReceived` is called when a transaction has been applied to mining.
* `ErrorReceived` is called when a user or the Ethereum node has rejected a transaction.
* `ReceiptReceived` is called when a transaction has been mined.

```C++
using System;
using AnkrSDK.Core.Infrastructure;
using AnkrSDK.EventListenerExample;
using AnkrSDK.Provider;
using AnkrSDK.UseCases;
using Nethereum.RPC.Eth.DTOs;
using UnityEngine;

public class ERC20Example : UseCase
{
	private IContract _contract;

	private void Start()
	{
		var ankrSDK = AnkrSDKFactory.GetAnkrSDKInstance("http://...");
		_contract = ankrSDK.GetContract("0x...","...");
	}

	public void SendMint()
	{
		var evController = new TransactionEventDelegator();
		evController.OnTransactionSendBegin += HandleSending;
		evController.OnTransactionSendEnd += HandleSent;
		evController.OnTransactionHashReceived += HandleTransactionHash;
		evController.OnReceiptReceived += HandleReceipt;
		evController.OnError += HandleError;

		_contract.Web3SendMethod("yourMethodName", Array.Empty<object>(), evController);
	}

	private static void HandleSent(object sender, TransactionInput transaction)
	{
		Debug.Log("Transaction sent");
	}

	private static void HandleSending(object sender, TransactionInput transaction)
	{
		Debug.Log("Transaction is sending");
	}

	private static void HandleTransactionHash(object sender, string transactionHash)
	{
		Debug.Log($"TransactionHash: {transactionHash}");
	}

	private static void HandleError(object sender, Exception exception)
	{
		Debug.LogError("Error: " + exception.Message);
	}

	private static void HandleReceipt(object sender, TransactionReceipt receipt)
	{
		Debug.Log("Receipt: " + receipt.Status);
	}
}
```

To find out more on getting a transaction status or event, take a look at [GetTransactionReceipt](/game/unity/api-reference/eth-handler/get-transaction-receipt).

## Can't receive a receipt?

Pay attention to the gas you use for a transaction. If your gas value will be lover than the average in a network, then the time to mine a transaction can be undetermined. If you are not sure if you're using enough gas:

1. Add an event emitting to the contract method.
2. Use [subscribe to events](/game/unity/api-reference/ankr-sdk-wrapper/events-and-subscriptions#subscribe-to-events).
