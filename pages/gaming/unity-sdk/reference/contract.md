import { Callout } from "components";

## `Contract`

A class containing the methods to interact with smart contracts.

### Public methods

  * [`CallMethod`](#callmethod) — sends a transaction using your currently active session. Creates a transaction input with provided parameters.
  * [`Web3SendMethod`](#web3sendmethod) — same as the previous function but with the added benefit of being able to use a `TransactionEventHandler` to have access via these events to feedback during the transaction process.
  * [`GetEvents`](#getevents) — retrieves all events from the contract that match the filter specified.
  * [`GetEvents`](#getevents) — retrieves all events from the contract that match the filter specified.
  * [`GetData`](#getdata) — retrieves data from non-payable contract methods, fields, and mappings.
  * [`EstimateGas`](#estimategas) — retrieves the estimated gas for calling a smart contract method with the given parameters.

### `CallMethod`

#### Declaration

> `Task<string> CallMethod(string methodName, object[] arguments, string gas, string gasPrice, string nonce)`

**Parameters**:

  * `methodName` (string) — an ABI-specific contract's method name.
  * `arguments` (data object) — ABI-specific arguments to pass to the contract.
  * `gas` (string) — the maximum gas value provided for this transaction (gas limit).
  * `gasPrice` (string) — a gas price in WEI to use for this call transaction.
  * `nonce` (string) — a nonce number of the transaction.

#### Returns

  * `string` — a transaction hash.

<Callout type="warning">
Use only for methods that change a smart contract state. To return a contract state, contract field, and mappings, use [`GetData`](#getdata). To find out more on the difference between contract methods, see [Gas fees and gas-free methods](/gaming/extra/gas-fees-gas-free-methods/).
</Callout>

Makes a call to the contract method, and returns a transaction hash when that call applies to work. This method is asynchronous.

#### How to speed up a transaction

If you'd like to speed up a call that has already been applied to work but still hasn't been mined, you need to do the following:

1. Get a nonce of the mining transaction (using [GetTransaction](/gaming/unity-sdk/reference/eth-handler/#gettransaction)).
2. Call the method with the same arguments but set the `nonce` to the value you've received in Step 1.

#### Code example

```c plus
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

---

### `Web3SendMethod`

#### Declaration

> `Task Web3SendMethod(string methodName, object[] arguments, ITransactionEventHandler evController, string gas, string gasPrice, string nonce)`

**Parameters**:

  * `methodName` (string) — an ABI-specific contract's method name.
  * `arguments` (data object) — ABI-specific arguments to pass to the contract.
  * `evController` — an implementation instance of the `ITransactionEventHandler` interface.
  * `gas` (string) — the maximum gas provided for this transaction (gas limit).
  * `gasPrice` (string) — a gas price in WEI to use for this transaction.
  * `nonce` (string) — a nonce number of a transaction.

#### Returns

The method returns nothing specific, but instead it returns various values on various stages of a contract method execution:

  * `TransactionSendBegin` — returns [TransactionInput](https://github.com/Nethereum/Nethereum/blob/master/src/Nethereum.RPC/Eth/DTOs/TransactionInput.cs).
  * `TransactionSendEnd` — returns [TransactionInput](https://github.com/Nethereum/Nethereum/blob/master/src/Nethereum.RPC/Eth/DTOs/TransactionInput.cs).
  * `TransactionHashReceived` — returns a transaction hash.
  * `ErrorReceived` — returns an `Exception`.
  * `ReceiptReceived` — returns a [TransactionReceipt](https://github.com/Nethereum/Nethereum/blob/master/src/Nethereum.RPC/Eth/DTOs/TransactionReceipt.cs).

<Callout type="warning">
Use only for methods that change a smart contract state. Use [GetData](#getdata) for methods that return contract state, contract field, and mappings. To get more about difference between contract method please read the article.
</Callout>

In contrast with [CallMethod](#callmethod), this method provides the handlers for all the transaction lifecycle stages. 
To work with that method you need to implement the `ITransactionEventHandler` interface. 
The following implementation works with `EventHandler` to provide the most flexible experience to work with a transaction lifecycle.

```c plus
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

```c plus
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

To find out more on getting a transaction status or event, take a look at [GetTransactionReceipt](/gaming/unity-sdk/reference/eth-handler/#gettransactionreceipt).

#### Can't receive a receipt?

Pay attention to the gas you use for a transaction. If your gas value will be lover than the average in a network, then the time to mine a transaction can be undetermined. If you are not sure if you're using enough gas:

1. Add an event emitting to the contract method.
2. Use [Subscribe to events](/gaming/extra/events-and-subscriptions/#subscribe-to-events).

---

### `GetEvents`

#### Declaration

> `Task<List<EventLog<TEvDto>>> GetEvents<TEvDto>(EventFilterRequest<TEvDto> evFilter)` OR<br/>
> `Task<List<EventLog<TEvDto>>> GetEvents<TEvDto>(EventFilterData evFilter)`

**Parameters**:

  * `evFilter` — an object containing an event request.

#### Returns

  * `List<EventLog<TEvDto>>` — returns all the events complying with the request.

Retrieves a contract's past events.

Find out more on events and events requests in [Events and subscriptions](/gaming/extra/events-and-subscriptions/#event-nature).

```c plus
using AnkrSDK.Core.Infrastructure;
using AnkrSDK.Data;
using AnkrSDK.DTO;
using AnkrSDK.Examples.ERC20Example;
using AnkrSDK.Provider;
using AnkrSDK.UseCases;
using Cysharp.Threading.Tasks;
using Nethereum.RPC.Eth.DTOs;
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

	public async UniTaskVoid GetEvents()
	{
		var filtersRequest = new EventFilterRequest<TransferEventDTO>
		{
			FromBlock = BlockParameter.CreateEarliest(),
			ToBlock = BlockParameter.CreateLatest()
		};
		filtersRequest.AddTopic("To", await _eth.GetDefaultAccount());

		var events = await _contract.GetEvents(filtersRequest);

		foreach (var ev in events)
		{
			Debug.Log(ev.Event.Value);
		}
	}
}
```

---

### `GetData`

#### Declaration

> `Task<TReturnType> GetData<TFieldData, TReturnType>(TFieldData requestData)`

**Parameters**:

  * `requestData` — an object containing the arguments to pass to the contract.

#### Returns

  * `TReturnType` — the data from a contract's method, field, or mapping.

<Callout type="warning">
Use only for methods that return data, contract fields, and mappings. To change a contract state, use [CallMethod](#callmethod) or [Web3SendMethod](#web3sendmethod). To find out more on the difference between contract methods please, have a look at [Gas fees and gas-free methods](/gaming/extra/gas-fees-gas-free-methods/).
</Callout>

The method allows getting contract states from the contract methods, fields, and mappings.

To make data request you need to prepare `TFieldData` DTO to make request objects with arguments that take the contract method. When you request data from the contract field, you don’t need to make any fields in that DTO.

Let’s take a look at how the contract method corresponds to the `TFieldData` DTO. As an example method, let's take a look at `balanceOf` from the [ERC721](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/3aa7ff74b0ba3ea44fb4f55258f94595b93f8cd8/contracts/token/ERC721/ERC721.sol#L62) contract.

```c plus
function balanceOf(address owner) public view virtual override returns (uint256) {
...
}
```

The function name is `balanceOf`, it takes the `owner` argument of the `address` type, and returns a `uint256` value.

The same information you can get from the ABI:

```c plus
...
{
  "constant": true,
  "inputs": [
    {
      "internalType": "address",
      "name": "owner",
      "type": "address"
    }
  ],
  "name": "balanceOf",
  "outputs": [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}
...
```

Then the DTO will look as follows:

```c plus
using Nethereum.ABI.FunctionEncoding.Attributes;
using Nethereum.Contracts;

[Function("balanceOf", "uint256")]
public class BalanceOfMessage : FunctionMessage
{
	[Parameter("address", "_owner", 1)]
	public string Owner { get; set; }
}
```

Pay attention to that DTO should extend [FunctionMessage](https://github.com/Nethereum/Nethereum/blob/9c94c067a2e3c4bc2ec9c3fec6791e1c0d87a817/src/Nethereum.Contracts/FunctionMessage.cs).

To find out more information on how to convert Solidity types to C# types, take a look at [C# and Solidity comparison](/gaming/extra/csharp-to-solidity/).

When a `TFieldData` DTO is prepared, we can request data.

```c plus
using System.Numerics;
using AnkrSDK.Core.Infrastructure;
using AnkrSDK.Data.ContractMessages.ERC721;
using AnkrSDK.Provider;
using Cysharp.Threading.Tasks;
using UnityEngine;

public class ContractExample : MonoBehaviour
{
	private IContract _contract;
	private IEthHandler _eth;

	private void Start()
	{
		var ankrSDK = AnkrSDKFactory.GetAnkrSDKInstance("http://...");
		_contract = ankrSDK.GetContract("0x...", "...");
		_eth = ankrSDK.Eth;
	}

	public async UniTaskVoid GetBalance()
	{
		var balanceOfMessage = new BalanceOfMessage
		{
			Owner = await _eth.GetDefaultAccount()
		};
		var balance = await _contract.GetData<BalanceOfMessage, BigInteger>(balanceOfMessage);
		Debug.Log($"Balance: {balance}");
	}
}
```

---

### `EstimateGas`

#### Declaration

> `UniTask<HexBigInteger> EstimateGas(string methodName, object[] arguments, string gas, string gasPrice, string nonce)`

**Parameters**:

  * `methodName` (string) — an ABI-specific contract's method name.
  * `arguments` (data object) — ABI-specific arguments to pass to the contract.
  * `gas` (string) — the maximum gas value provided for this transaction (gas limit).
  * `gasPrice` (string) — a gas price (in WEI) to use for this transaction.
  * `nonce` (string) — a transaction's nonce number.

#### Returns

  * `HexBigInteger` — a gas value estimation for a transaction specified.

<Callout type="warning">
Use only for the contract methods that change a smart contract state. To find out more on the difference between the contract methods, have a look at [Gas fee and gas-free methods](/gaming/extra/gas-fees-gas-free-methods/).
</Callout>

Retrieves a gas value estimation for a contract method call specified.

#### Code example

```c plus
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
