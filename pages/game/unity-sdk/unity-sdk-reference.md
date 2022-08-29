import Callout from "nextra-theme-docs/callout";

## AnkrSDKFactory

### Description

A class for SDK instance creation.

### Static methods

| Method               | Description                                       |
|----------------------|---------------------------------------------------|
| [GetAnkrSDKInstance](#getankrsdkinstance) | Creates an instance of SDK with a given argument. | 

or

| Method        | Description                        |
|---------------|------------------------------------|
| `networkName` | An enum containing a network name. | 

### Returns

| Parameter  | Description                  |
|------------|------------------------------|
| `IAnkrSDK` | An instance of SDK provider. | 

### Description

Creates an SDK instance by a given provider URL or network name.

### Code example

```
using AnkrSDK.Data;
using AnkrSDK.Provider;
using UnityEngine;

public class CreateSDKExample : MonoBehaviour
{
	private void Start()
	{
		var ankrSDKByProvider = AnkrSDKFactory.GetAnkrSDKInstance("http://...");
		// or
		var ankrSDKByNetwork = AnkrSDKFactory.GetAnkrSDKInstance(NetworkName.Ethereum);
	}
}
```

### GetAnkrSDKInstance

#### Declaration

`IAnkrSDK GetAnkrSDKInstance(string providerURI)`

or

`IAnkrSDK GetAnkrSDKInstance(NetworkName networkName)`

#### Parameters

| Parameter     | Description                          |
|---------------|--------------------------------------|
| `providerURI` | A string containing an RPC endpoint. | 

--------------------------------------------------

## AnkrSDKWrapper

### Description

AnkrSDKWrapper provides support for all platform-dependent features. Implements IAnkrSDK.

### Parameters


| Parameter       | Description                            |
|-----------------|----------------------------------------|
| `NetworkHelper` | Provides an `INetworkHelper` instance. |
| `Eth`           | Provides an `IEthHandler` instance.    |

### Public methods

| Method                                                                           | Description                                    |
|----------------------------------------------------------------------------------|------------------------------------------------|
| [GetContract](#getcontract)           | Makes an instance of a contract to interact with a smart contract. |
| [CreateSubscriber](#createsubscriber) | Makes subscribers for the real-time contract event subscriptions. |
| [Disconnect](#disconnect)              | Closes a connection with the wallet. |


### GetContract

#### Declaration

`IContract GetContract(string contractAddress, string contractABI)`

#### Parameters

| Parameter         | Description                                                              |
|-------------------|--------------------------------------------------------------------------|
| `contractAddress` | A string containing a contract address.                                  |
| `contractABI`     | A string containing an application binary interface (ABI) of a contract. |

#### Returns

| Parameter   | Description                                                                  |
|-------------|------------------------------------------------------------------------------|
| `IContract` | Returns an instance of [Contract](/game/unity/api-reference/contract) class. |

#### Description

Provides an instance of a contract with a platform-dependant provider.

#### Code example

```
using AnkrSDK.Core.Infrastructure;
using AnkrSDK.Provider;
using UnityEngine;

public class ContractExample : MonoBehaviour
{
	private IContract _contract;

	private void Start()
	{
		var ankrSDK = AnkrSDKFactory.GetAnkrSDKInstance("http://...");
		_contract = ankrSDK.GetContract("0x...","...");
	}
}
```

### CreateSubscriber

#### Declaration

`IContractEventSubscriber CreateSubscriber(string wsUrl)`

#### Parameters

| Parameter  | Description                                    |
|------------|------------------------------------------------|
| `wsUrl`    | A string containing an RPC WebSocket endpoint. |

#### Returns

| Parameter                  | Description                              |
|----------------------------|------------------------------------------|
| `IContractEventSubscriber` | Returns an instance of subscriber class. |

#### Description

Provides an instance of subscriber to make contract event subscriptions. See more on [Events and subscriptions](/game/extra/events-and-subscriptions).

#### Code example

```
using AnkrSDK.Core.Infrastructure;
using AnkrSDK.Data;
using AnkrSDK.DTO;
using AnkrSDK.Examples.ERC20Example;
using AnkrSDK.Provider;
using AnkrSDK.UseCases;
using Cysharp.Threading.Tasks;
using UnityEngine;

namespace AnkrSDK.EventListenerExample
{
	public class EventListenerExample : UseCase
	{
		private IContractEventSubscriber _eventSubscriber;
		private IContractEventSubscription _subscription;
		private IEthHandler _eth;

		private void Start()
		{			
			var ankrSDK = AnkrSDKFactory.GetAnkrSDKInstance(ERC20ContractInformation.HttpProviderURL);
			_eth = ankrSDK.Eth;

			_eventSubscriber = ankrSDK.CreateSubscriber(ERC20ContractInformation.WsProviderURL);
			_eventSubscriber.ListenForEvents().Forget();
			_eventSubscriber.OnOpenHandler += UniTask.Action(SubscribeWithRequest);
		}

		// If you know topic position then you can use EventFilterData
		public async UniTaskVoid SubscribeWithTopics()
		{
			var filters = new EventFilterData
			{
				FilterTopic2 = new object[] { await _eth.GetDefaultAccount() }
			};

			_subscription = await _eventSubscriber.Subscribe(
				filters,
				ERC20ContractInformation.ContractAddress, 
				(TransferEventDTO t) => ReceiveEvent(t)
			);
		}
		
		// If you know only topic name then you can use EventFilterRequest
		public async UniTaskVoid SubscribeWithRequest()
		{
			var filtersRequest = new EventFilterRequest<TransferEventDTO>();
			filtersRequest.AddTopic("To", await _eth.GetDefaultAccount());

			_subscription = await _eventSubscriber.Subscribe(
				filtersRequest,
				ERC20ContractInformation.ContractAddress, 
				ReceiveEvent
			);
		}

		private void ReceiveEvent(TransferEventDTO contractEvent)
		{
			Debug.Log($"{contractEvent.From} - {contractEvent.To} - {contractEvent.Value}");
		}

		public void Unsubscribe()
		{
			_eventSubscriber.Unsubscribe(_subscription.SubscriptionId).Forget();
		}

		private void OnDestroy()
		{
			_eventSubscriber.StopListen();
		}
	}
}
```

### Disconnect

#### Declaration

`UniTask Disconnect(bool waitForNewSession)`

#### Parameters

| Parameter           | Description                                                                         |
|---------------------|-------------------------------------------------------------------------------------|
| `waitForNewSession` | If true (by default), a connection will be reestablished after disconnect. If false, connection will be closed immediately. |

#### Description

Removes a wallet connection.

### Code example

```
using AnkrSDK.Core.Infrastructure;
using AnkrSDK.Provider;
using UnityEngine;

public class DisconnectExample : MonoBehaviour
{
	private IAnkrSDK _sdk;

	private void Start()
	{
		_sdk = AnkrSDKFactory.GetAnkrSDKInstance("http://...");
	}

	private void OnDisable()
	{
		_sdk.Disconnect(false);
	}
}
```
--------------------------------------------------
## EthHandler

### Description

A class containing the methods for making transactions, estimating transactions fee, and getting data on that.

### Public methods

| Method                                                                                                     | Description                                                                        |
|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [GetDefaultAccount](#getdefaultaccount)                             | Returns the address of the account currently logged in via the third-party wallet. |
| [GetBalance](#getbalance)                                            | Get the balance of an address.                                                     |
| [GetBlockNumber](#getblocknumber)                                   | Returns the current block number.                                                  |
| [GetTransaction](#gettransaction)                                    | Returns a Transaction from the given transaction hash.                             |
| [GetTransactionReceipt](#gettransactionreceipt)                     | Returns a TransactionReceipt for the given transaction hash.                       |
| [GetTransactionCount](#gettransactioncount)                         | Get the number of transactions in a given block.                                   |
| [GetBlockWithTransactions](#getblockwithtransactions)              | Returns a block with transactions matching the block number or block hash.         |
| [GetBlockWithTransactionsHashes](#getblockwithtransactionshashes) | Returns a block with transactions hashes matching the block number or block hash.  |
| [EstimateGas](#estimategas2)                                        | Returns the estimated gas cost.                                                    |
| [Sign](#sign)                                                         | Signs data using a specific account address.                                       |
| [SendTransaction](#sendtransaction)                                  | Sends a transaction to the network.                                                |


### GetDefaultAccount

#### Declaration

`Task<string> GetDefaultAccount()`

#### Returns

| Parameter | Description                             |
|-----------|-----------------------------------------|
| `string`  | A string containing an account address. |

#### Description

The method returns address that your wallet provided. There is no way to change it from SDK because it has a pair private key stored in your wallet. To change a default address, open your wallet and change it manually.

#### Code example

```
using AnkrSDK.Core.Infrastructure;
using AnkrSDK.Provider;
using Cysharp.Threading.Tasks;
using UnityEngine;

public class GetAddressExample : MonoBehaviour
{
	private IEthHandler _eth;

	private void Start()
	{
		var ankrSDK = AnkrSDKFactory.GetAnkrSDKInstance("http://...");
		_eth = ankrSDK.Eth;
	}

	public async UniTaskVoid GetAddress()
	{
		var address = await _eth.GetDefaultAccount();
	}
}
```

### GetBalance

#### Declaration

`Task<BigInteger> GetBalance(string address)`

#### Parameters

| Parameter   | Description                                                                                              |
|-------------|----------------------------------------------------------------------------------------------------------|
| `address`   | An account address. The method returns the default account's balance if the parameter hasn't been given. |

#### Returns

| Parameter    | Description                |
|--------------|----------------------------|
| `BigInteger` | An account balance in WEI. |

#### Description

Gets an address's balance in ETH currency.

The method returns balance info in WEI units. To convert balance into other units, use [Web3.Convert](https://github.com/Nethereum/Nethereum/blob/master/src/Nethereum.Util/UnitConversion.cs).

To find more info on the currency units, have a look at the [Currency Units](/game/extra/currency-units) section.

#### Code example

```
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

### GetBlockNumber

#### Declaration

`Task<BigInteger> GetBlockNumber()`

#### Returns

| Parameter    | Description                           |
|--------------|---------------------------------------|
| `BigInteger` | Returns a number of the latest block. |

#### Description

Returns a current block number.

#### Code example

```
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

### GetTransaction

#### Declaration

`Task<Transaction> GetTransaction(string transactionReceipt)`

#### Parameters

| Parameter            | Description                                |
|----------------------|--------------------------------------------|
| `transactionReceipt` | A string containing a hash of transaction. |

#### Returns

| Parameter     | Description                   |
|---------------|-------------------------------|
| `Transaction` | Returns a transaction object. |

#### Description

Returns a transaction matching the given transaction hash.

#### Code example

```
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

### GetTransactionReceipt

#### Declaration

`Task<TransactionReceipt> GetTransactionReceipt(string transactionHash)`

#### Parameters

| Parameter         | Description                               |
|-------------------|-------------------------------------------|
| `transactionHash` | A string containing a transaction's hash. |

#### Returns

| Parameter            | Description                   |
|----------------------|-------------------------------|
| `TransactionReceipt` | A transaction receipt object. |

#### Description

Returns the receipt of a transaction by transaction hash. Method resolves when transaction will is mined.

#### How to get contract events from receipt

If contract method that you called emit event you can get it from [TransactionReceipt](https://github.com/Nethereum/Nethereum/blob/master/src/Nethereum.RPC/Eth/DTOs/TransactionReceipt.cs) on `ReceiptReceived` stage. But first you need to create a [DTO corresponding to contract event](/game/extra/events-and-subscriptions#Event-nature).

```
public void HandleReceipt(object sender, TransactionReceipt receipt)
{
	var transferEventOutput = receipt.DecodeAllEvents<DTO>();
	transferEventOutput[0].Event./// Get all data what you need
}
```

#### Code example

```
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

### GetTransactionCount

#### Declaration

`Task<BigInteger> GetTransactionCount(string hash)`

or

`Task<BigInteger> GetTransactionCount(BlockParameter block)`

#### Parameters

| Parameter | Description                                                                                                 |
|-----------|-------------------------------------------------------------------------------------------------------------|
| `hash`    | A `string` containing a block hash.                                                                         |
| `block`   | A `BlockParameter` that can be either a number of blocks or the `earliest`, `latest`, or `pending` options. |

#### Returns

| Parameter    | Description                                  |
|--------------|----------------------------------------------|
| `BigInteger` | A number of transactions in the given block. |

#### Description

Gets a number of transactions on the given block.

#### Code example

```
using AnkrSDK.Core.Infrastructure;
using AnkrSDK.Provider;
using Nethereum.RPC.Eth.DTOs;
using UnityEngine;

namespace DefaultNamespace
{
    public class GetTransactionCountExample : MonoBehaviour
    {
        private IAnkrSDK _ankrSDKWrapper;

        private void Start()
        {
            _ankrSDKWrapper = AnkrSDKFactory.GetAnkrSDKInstance("https://...");
        }

        public async void GetBalance()
        {
            var blockHash = "0x...";
            ulong blockNumber = 99999;
            
            var blockTransactionsCountByHash = await _ankrSDKWrapper.Eth.GetTransactionCount(blockHash);
            var latestBlockTransactionsCount = await _ankrSDKWrapper.Eth.GetTransactionCount(BlockParameter.CreateLatest());
            var blockTransactionsCountByNumber = await _ankrSDKWrapper.Eth.GetTransactionCount(new BlockParameter(blockNumber));
        }
    }
}
```

### GetBlockWithTransactions

#### Declaration

`Task<BlockWithTransactions> GetBlockWithTransactions(string hash)`

or

`Task<BlockWithTransactions> GetBlockWithTransactions(BlockParameter block)`

#### Parameters

| Parameter  | Description                           |
|------------|---------------------------------------|
| `hash`     | A `string` containing a block's hash. |

or

| Parameter  | Description                           |
|------------|---------------------------------------|
| `block`    | A `BlockParameter` that can be either a number of blocks or the `earliest`, `latest`, or `pending` options. |

#### Returns

| Parameter               | Description                                      |
|-------------------------|--------------------------------------------------|
| `BlockWithTransactions` | A block object containing transactions objects.  |

#### Code sample

```
using AnkrSDK.Core.Infrastructure;
using AnkrSDK.Provider;
using Nethereum.RPC.Eth.DTOs;
using UnityEngine;

namespace DefaultNamespace
{
    public class GetBlockWithTransactionsExample : MonoBehaviour
    {
        private IAnkrSDK _ankrSDKWrapper;

        private void Start()
        {
            _ankrSDKWrapper = AnkrSDKFactory.GetAnkrSDKInstance("https://...");
        }

        public async void GetBalance()
        {
            var blockHash = "0x...";
            ulong blockNumber = 99999;
            
            var blockByHash = await _ankrSDKWrapper.Eth.GetBlockWithTransactions(blockHash);
            var latestBlock = await _ankrSDKWrapper.Eth.GetBlockWithTransactions(BlockParameter.CreateLatest());
            var blockByNumber = await _ankrSDKWrapper.Eth.GetBlockWithTransactions(new BlockParameter(blockNumber));
        }
    }
}
```

### GetBlockWithTransactionsHashes

#### Declaration

`Task<BlockWithTransactionHashes> GetBlockWithTransactionsHashes(string hash)`

or

`Task<BlockWithTransactionHashes> GetBlockWithTransactionsHashes(BlockParameter block)`

#### Parameters

| Parameter | Description                           |
|-----------|---------------------------------------|
| `hash`    | A `string` containing the block hash. |

or

| Parameter | Description                                    |
|-----------|------------------------------------------------|
| `block`   | A `BlockParameter` that can be either a number of blocks or the `earliest`, `latest`, or `pending` options. |

#### Returns

| Parameter                    | Description                                    |
|------------------------------|------------------------------------------------|
| `BlockWithTransactionHashes` | A block object containing transactions hashes. |

### Description

Returns a block matching a block number or block hash.

#### Code example

```
using AnkrSDK.Core.Infrastructure;
using AnkrSDK.Provider;
using Nethereum.RPC.Eth.DTOs;
using UnityEngine;

namespace DefaultNamespace
{
    public class GetBlockWithTransactionsHashesExample : MonoBehaviour
    {
        private IAnkrSDK _ankrSDKWrapper;

        private void Start()
        {
            _ankrSDKWrapper = AnkrSDKFactory.GetAnkrSDKInstance("https://...");
        }

        public async void GetBalance()
        {
            var blockHash = "0x...";
            ulong blockNumber = 99999;
            
            var blockByHash = await _ankrSDKWrapper.Eth.GetBlockWithTransactionsHashes(blockHash);
            var latestBlock = await _ankrSDKWrapper.Eth.GetBlockWithTransactionsHashes(BlockParameter.CreateLatest());
            var blockByNumber = await _ankrSDKWrapper.Eth.GetBlockWithTransactionsHashes(new BlockParameter(blockNumber));
        }
    }
}
```

### EstimateGas 2

#### Declaration

`Task<HexBigInteger> EstimateGas(string from, string to, string data, string value, string gas, string gasPrice, string nonce)`

or

`Task<HexBigInteger> EstimateGas(TransactionInput transactionInput)`

#### Parameters

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

#### Returns

| Parameter       | Description                                                     |
|-----------------|-----------------------------------------------------------------|
| `HexBigInteger` | Returns the gas amount used for the simulated call/transaction. |

#### Description

Executes a message call or transaction and returns the amount of the gas used.

#### Code example

```
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

### Sign

#### Declaration

`Task<string> Sign(string messageToSign, string address)`

#### Parameters

| Parameter       | Description                      |
|-----------------|----------------------------------|
| `messageToSign` | A message that has to be signed. |
| `address`       | An account address.              |

#### Returns

| Parameter | Description                      |
|-----------|----------------------------------|
| `string`  | A string containing a signature. |

#### Description

Signs the data using a specific account.

#### Code example

```
using AnkrSDK.Core.Infrastructure;
using AnkrSDK.Provider;
using UnityEngine;

public class SignExample : MonoBehaviour
{
	private IEthHandler _eth;

	private void Start()
	{
		var ankrSDK = AnkrSDKFactory.GetAnkrSDKInstance("http://...");
		_eth = ankrSDK.Eth;
	}

	public async void SignMessage()
	{
		var address = await _eth.GetDefaultAccount();
		
		var message = "Hello world!";
		var signature = await _eth.Sign(message, address);
		
		Debug.Log($"Signature: {signature}");
	}
}
```

### SendTransaction

#### Declaration

`Task<string> SendTransaction(string from, string to, string data, string value, string gas, string gasPrice, string nonce)`

#### Parameters

| Parameter  | Description                                                                                                          |
|------------|----------------------------------------------------------------------------------------------------------------------|
| `from`     | The address for the sending account.                                                                                 |
| `to`       | The destination address of the message.                                                                              |
| `data`     | String containing the data of the function call on a contract (optional).                                            |
| `value`    | The value transferred for the transaction in wei (optional).                                                         |
| `gas`      | The maximum gas provided for this call “transaction” (gas limit) (optional).                                         |
| `gasPrice` | The gas price in wei to use for this call “transaction” (optional).                                                  |
| `nonce`    | An integer value of the nonce. Allows to overwrite your own pending transactions that use the same nonce. (optional) |

#### Returns

| Parameter | Description                          |
|-----------|--------------------------------------|
| `string`  | Returns a 32 bytes transaction hash. |

#### Description

Sends a transaction to the network.

#### Code example

```
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

## Contract

### Description

A class containing the method to interact with smart contracts.

### Public methods

| Method                                                       | Description                                    |
|--------------------------------------------------------------|------------------------------------------------|
| [CallMethod](#callmethod) | Sends a transaction using your currently active session. Creates a transaction input with provided parameters. |
| [Web3SendMethod](#web3sendmethod) | Same as the previous function above but with the added benefit of being able to use a `TransactionEventHandler` to have access via these events to feedback during the transaction process. |
| [GetEvents](#getevents) | Gets all events from the contract that match the specified filter requirements. |
| [GetData](#getdata) | Gets data from non-payable contract methods, fields, and mappings. |
| [EstimateGas](#estimategas) | Returns the estimated gas for calling a smart contract method with the given parameters. |


### CallMethod

#### Declaration

`Task<string> CallMethod(string methodName, object[] arguments, string gas, string gasPrice, string nonce)`

#### Parameters

| Parameter    | Description                                                       |
|--------------|-------------------------------------------------------------------|
| `methodName` | A string containing a contract method name according to ABI.      |
| `arguments`  | Arguments that take contract method according to ABI.             |
| `gas`        | The maximum gas provided for this call “transaction” (gas limit). |
| `gasPrice`   | The gas price in WEI to use for this call “transaction”.          |
| `nonce`      | A nonce number of the transaction.                                |

#### Returns

| Parameter    | Description                |
|--------------|----------------------------|
| `string`     | A hash of the transaction. |

#### Description

<Callout type="warning" emoji="❗">
Use only for methods that change a smart contract state. To return a contract state, contract field, and mappings, use [GetData](/game/unity/api-reference/contract/get-data). To find out more on the difference between contract methods, see [Gas fees and gas-free methods](/game/extra/gas-fees-gas-free-methods).
</Callout>

Makes a call to the contract method, and returns a transaction hash when that call applies to work. This method is asynchronous.

#### How to speed up a transaction

If you'd like to speed up a call that has already been applied to work but still hasn't been mined, you need to do the following:

1. Get a nonce of the mining transaction (using [GetTransaction](/game/unity/api-reference/eth-handler/get-transaction)).
2. Call the method with the same arguments but set the `nonce` to the value you've received in Step 1.

#### Code example

```
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

### Web3SendMethod

#### Declaration

`Task Web3SendMethod(string methodName, object[] arguments, ITransactionEventHandler evController, string gas, string gasPrice, string nonce)`

#### Parameters

| Parameter      | Description                                                              |
|----------------|--------------------------------------------------------------------------|
| `methodName`   | A string containing a contract method name according to the ABI.         |
| `arguments`    | Arguments that take contract method according to the ABI.                |
| `evController` | And implementation instance of the `ITransactionEventHandler` interface. |
| `gas`          | The maximum gas provided for this call “transaction” (gas limit).        |
| `gasPrice`     | The gas price in WEI to use for this call “transaction”.                 |
| `nonce`        | A nonce number of a transaction.                                         |

#### Returns

The method returns nothing specific, but instead it returns various values on various stages of a contract method execution:

| Parameter                 | Description                                                              |
|---------------------------|--------------------------------------------------------------------------|
| `TransactionSendBegin`    | Returns [TransactionInput](https://github.com/Nethereum/Nethereum/blob/master/src/Nethereum.RPC/Eth/DTOs/TransactionInput.cs). |
| `TransactionSendEnd`      | Returns [TransactionInput](https://github.com/Nethereum/Nethereum/blob/master/src/Nethereum.RPC/Eth/DTOs/TransactionInput.cs). |
| `TransactionHashReceived` | Returns a `string`. |
| `ErrorReceived`           | Returns an `Exception`. |
| `ReceiptReceived`         | Returns a [TransactionReceipt](https://github.com/Nethereum/Nethereum/blob/master/src/Nethereum.RPC/Eth/DTOs/TransactionReceipt.cs). |

#### Description

<Callout type="warning" emoji="❗">
Use only for methods that change a smart contract state. Use [GetData](/game/unity/api-reference/contract/get-data) for methods that return contract state, contract field, and mappings. To get more about difference between contract method please read the article.
</Callout>

In contrast with [CallMethod](/game/unity/api-reference/contract/call-method), this method provides the handlers for all the transaction lifecycle stages. To work with that method you need to implement the `ITransactionEventHandler` interface. The following implementation works with `EventHandler` to provide the most flexible experience to work with a transaction lifecycle.

```
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

```
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

#### Can't receive a receipt?

Pay attention to the gas you use for a transaction. If your gas value will be lover than the average in a network, then the time to mine a transaction can be undetermined. If you are not sure if you're using enough gas:

1. Add an event emitting to the contract method.
2. Use [subscribe to events](/game/extra/events-and-subscriptions#subscribe-to-events).


### GetEvents

#### Declaration

`Task<List<EventLog<TEvDto>>> GetEvents<TEvDto>(EventFilterRequest<TEvDto> evFilter)`

or

`Task<List<EventLog<TEvDto>>> GetEvents<TEvDto>(EventFilterData evFilter)`

#### Parameters

| Parameter  | Description                            |
|------------|----------------------------------------|
| `evFilter` | An object containing an event request. |

#### Returns

| Parameter                | Description                                        |
|--------------------------|----------------------------------------------------|
| `List<EventLog<TEvDto>>` | Returns all the events complying with the request. |

#### Description

Gets a contract's past events.

Find out more on events and events requests in [Events and subscriptions](/game/extra/events-and-subscriptions#event-nature).

```
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

### GetData

#### Declaration

`Task<TReturnType> GetData<TFieldData, TReturnType>(TFieldData requestData)`

#### Parameters

| Parameter     | Description                                                       |
|---------------|-------------------------------------------------------------------|
| `requestData` | An object containing the arguments that take the contract method. |

#### Returns

| Parameter     | Description                                       |
|---------------|---------------------------------------------------|
| `TReturnType` | Data from a contract's method, field, or mapping. |

#### Description

<Callout type="warning" emoji="❗">
Use only for methods that return data, contract fields, and mappings. To change a contract state, use [CallMethod](/game/unity/api-reference/contract/call-method) or [Web3SendMethod](/game/unity/api-reference/contract/web3-send-method). To find out more on the difference between contract methods please, have a look at [Gas fees and gas-free methods](/game/extra/gas-fees-gas-free-methods).
</Callout>

The method allows getting contract states from the contract methods, fields, and mappings.

To make data request you need to prepare `TFieldData` DTO to make request objects with arguments that take the contract method. When you request data from the contract field, you don’t need to make any fields in that DTO.

Let’s take a look at how the contract method corresponds to the `TFieldData` DTO. As an example method, let's take a look at `balanceOf` from the [ERC721](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/3aa7ff74b0ba3ea44fb4f55258f94595b93f8cd8/contracts/token/ERC721/ERC721.sol#L62) contract.

```
function balanceOf(address owner) public view virtual override returns (uint256) {
...
}
```

The function name is `balanceOf`, it takes the `owner` argument of the `address` type, and returns a `uint256` value.

The same information you can get from the ABI:

```
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

```
using Nethereum.ABI.FunctionEncoding.Attributes;
using Nethereum.Contracts;

[Function("balanceOf", "uint256")]
public class BalanceOfMessage : FunctionMessage
{
	[Parameter("address", "_owner", 1)]
	public string Owner { get; set; }
}
```

Pay attention that DTO should extend [FunctionMessage](https://github.com/Nethereum/Nethereum/blob/9c94c067a2e3c4bc2ec9c3fec6791e1c0d87a817/src/Nethereum.Contracts/FunctionMessage.cs).

To find out more information on how to convert Solidity types to C# types, take a look at [C# and Solidity comparison](/game/extra/csharp-to-solidity).

When a `TFieldData` DTO is prepared, we can request data.

```
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

### EstimateGas

#### Declaration

`UniTask<HexBigInteger> EstimateGas(string methodName, object[] arguments, string gas, string gasPrice, string nonce)`

#### Parameters

| Parameter    | Description                                                       |
|--------------|-------------------------------------------------------------------|
| `methodName` | A string with contract method name according to ABI.              |
| `arguments`  | Arguments that take contract method according to ABI.             |
| `gas`        | The maximum gas provided for this call “transaction” (gas limit). |
| `gasPrice`   | The gas price in wei to use for this call “transaction”.          |
| `nonce`      | The nonce number of a transaction.                                |

#### Returns

| Parameter       | Description                         |
|-----------------|-------------------------------------|
| `HexBigInteger` | A gas estimation for a transaction. |

#### Description

<Callout type="warning" emoji="❗">
Use only for the contract methods that change a smart contract state. To find out more on the difference between the contract methods, have a look at [Gas fee and gas-free methods](/game/extra/gas-fees-gas-free-methods).
</Callout>

Requests a gas estimation for a contract method call.

#### Code example

```
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

## ContractEventSubscriber

### Description

A class contains methods for making real-time subscriptions for contracts' events.

### Constructors

| Component                                                                                  | Description                               |
|--------------------------------------------------------------------------------------------|-------------------------------------------|
| [ContractEventSubscriber](#constructor) | Constructs a new ContractEventSubscriber. |

### Parameters

| Parameter        | Description                       |
|------------------|-----------------------------------|
| `RequestHeaders` | A dictionary of specific headers. |

### Events

| Event            | Description                              |
|------------------|------------------------------------------|
| `OnOpenHandler`  | Fires when a connection to a node opens  |
| `OnErrorHandler` | Fires when a connection fails.           |
| `OnCloseHandler` | Fires when a connection closes.          |

### Public methods

| Method                                                                                   | Description                                                   |
|------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [Subscribe](#subscribe)               | Subscribes to an event with the given parameters.             |
| [ListenForEvents](#listenforevents) | Opens a connection to a node and starts listening for events. |
| [Unsubscribe](#unsubscribe)           | Unsubscribes from events by a subscription ID.                |
| [StopListen](#stoplisten)            | Closes a connection to a node.                                |

### Code example

```
using AnkrSDK.Core.Infrastructure;
using AnkrSDK.Data;
using AnkrSDK.DTO;
using AnkrSDK.Examples.ERC20Example;
using AnkrSDK.Provider;
using AnkrSDK.UseCases;
using Cysharp.Threading.Tasks;
using UnityEngine;

namespace AnkrSDK.EventListenerExample
{
	public class EventListenerExample : UseCase
	{
		private IContractEventSubscriber _eventSubscriber;
		private IContractEventSubscription _subscription;
		private IEthHandler _eth;
		
		public override void ActivateUseCase()
		{
			base.ActivateUseCase();
			

			var ankrSDK = AnkrSDKFactory.GetAnkrSDKInstance("https://");
			_eth = ankrSDK.Eth;

			_eventSubscriber = ankrSDK.CreateSubscriber("wss://");
			_eventSubscriber.ListenForEvents().Forget();
			_eventSubscriber.OnOpenHandler += UniTask.Action(SubscribeWithRequest);
		}

		// If you know topic position then you can use EventFilterData
		public async UniTaskVoid SubscribeWithTopics()
		{
			var filters = new EventFilterData
			{
				FilterTopic2 = new object[] { await _eth.GetDefaultAccount() }
			};

			_subscription = await _eventSubscriber.Subscribe(
				filters,
				ERC20ContractInformation.ContractAddress, 
				(TransferEventDTO t) => ReceiveEvent(t)
			);
		}
		
		// If you know only topic name then you can use EventFilterRequest
		public async UniTaskVoid SubscribeWithRequest()
		{
			var filtersRequest = new EventFilterRequest<TransferEventDTO>();
			filtersRequest.AddTopic("To", await _eth.GetDefaultAccount());

			_subscription = await _eventSubscriber.Subscribe(
				filtersRequest,
				ERC20ContractInformation.ContractAddress, 
				ReceiveEvent
			);
		}

		private void ReceiveEvent(TransferEventDTO contractEvent)
		{
			Debug.Log($"{contractEvent.From} - {contractEvent.To} - {contractEvent.Value}");
		}

		public void Unsubscribe()
		{
			_eventSubscriber.Unsubscribe(_subscription.SubscriptionId).Forget();
		}

		public override void DeActivateUseCase()
		{
			base.DeActivateUseCase();
			_eventSubscriber.StopListen();
		}
	}
}
```

### Constructor

#### Declaration

`ContractEventSubscriber(string wsUrl)`

#### Parameters

| Parameter  | Description                                   |
|------------|-----------------------------------------------|
| `wsUrl`    | A string containing a WebSocket RPC endpoint. |


### Subscribe

#### Declaration

`UniTask<IContractEventSubscription> Subscribe<TEventType>(EventFilterData evFilter, string contractAddress, Action<TEventType> handler)`

or

`UniTask<IContractEventSubscription> Subscribe<TEventType>(EventFilterRequest<TEventType> evFilter, string contractAddress, Action<TEventType> handler)`

#### Parameters

| Parameter         | Description                                   |
|-------------------|-----------------------------------------------|
| `evFilter`        | An object containing request parameters.      |
| `contractAddress` | An address of the contract that emits events. |
| `handler`         | An action that handles received events.       |

#### Returns

| Parameter                    | Description            |
|------------------------------|------------------------|
| `IContractEventSubscription` | A subscription object. |

#### Description

Subscribes to events with specific request parameters. Use it only to subscribe for events emitted after a subscription start, the method doesn’t return past events.

To find out more info on events and subscriptions, have a look at [Events and subscriptions](/game/extra/events-and-subscriptions).

#### Code example

```
var filtersRequest = new EventFilterRequest<TransferEventDTO>();
filtersRequest.AddTopic("To", await _eth.GetDefaultAccount());

var subscription = await _eventSubscriber.Subscribe(
	filtersRequest,
	"0x...", 
	contractEvent => Debug.Log($"{contractEvent.From} - {contractEvent.To} - {contractEvent.Value}")
);
```

The full code example lives [here](/game/unity/api-reference/contract-event-subscriber#code-example).


### ListenForEvents

#### Declaration

`UniTask ListenForEvents()`

#### Description

Connects to a given endpoint and starts listening for events.


### Unsubscribe

#### Declaration

`UniTask Unsubscribe(string subscriptionId)`

#### Parameters

| Parameter        | Description                      |
|------------------|----------------------------------|
| `subscriptionId` | An identifier of a subscription. |

#### Description

Unsubscribes from the events with a given identifier.

#### Code example

```
var filtersRequest = new EventFilterRequest<TransferEventDTO>();
filtersRequest.AddTopic("To", await _eth.GetDefaultAccount());

var subscription = await _eventSubscriber.Subscribe(
	filtersRequest,
	"0x...", 
	contractEvent => Debug.Log($"{contractEvent.From} - {contractEvent.To} - {contractEvent.Value}")
);

await _eventSubscriber.Unsubscribe(subscription.SubscriptionId);
```

### StopListen

#### Declaration

`void StopListen()`

#### Description

Closes a WebSocket connection, unsubscribes from all subscriptions.