---
title: Setting Up
id: setting-up
---

# Setting up

## Installation

1. Download ```AnkrSDK.unitypackage``` from the latest [release](https://github.com/Ankr-network/game-unity-sdk/releases).

2. In your Unity project, locate the ***Assets*** folder. 

3. Drag the ```AnkrSDK.unitypackage``` into this folder.

4. Select '*Import all*' to have access to all SDK capabilities.

![Install SDK](@site/static/img/install-sdk.png)


## What's inside

The SDK is designed to make it super easy to get started with game development by enabling connection and interaction across different blockchains.

• Contains a huge range of examples, scripts and plugins for a variety of use cases.

• Nethereum libraries provide support for web requests using RPC over Http.

• Ankr RPC network infrastructure provides fast and easy connection to multiple chains.

<iframe width="600" height="330" src="https://www.youtube.com/embed/nuU-OvP1p1E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## SDK Detailed description

### IAnkrSDK
After you finished connecting your wallet via WalletConnect you can access SDK Functionallity. First of all you should get an sdk Instance:

```js
var ankrSDK = AnkrSDKWrapper.GetSDKInstance("<etherium_node_url>");
```

### EthHandler
Use ```EthHandler``` via get-only property from sdk instance.

```c
_eth = ankrSDK.Eth;
```

### IContract
IContract is a contract handler that gives easier access to web3 by handling low-level transformations.

```c
_contract = ankrSDKWrapper.GetContract("<contractAddress>", "<contractABI>");
```

After you have IContract instance for your smart-contract you are now eligible to work with your contract deployed on blockchain

### CallMethodAsync

```c
Task<string> CallMethodAsync(string methodName, object[] arguments = null,
    string gas = null, string gasPrice = null,
    string nonce = null);
```

Sends a message via socket-established connection via json-rpc. Method name is "eth_sendTransaction" Input:

* methodName: contract method name to call. Contract ABI should contain methodName.

* arguments: an array of arguments for contract call. Contract ABI should contain ABIType for passed arguments.

* gas: The amount of gas to use for the transaction (unused gas is refunded).

* gasPrice: The price of gas for this transaction in wei.

* nonce: Integer of the nonce. This allows to overwrite your own pending transactions that use the same nonce.

Output:

* returns transaction hash

Example:

```c
_contract.CallMethodAsync(rentOutMethodName, 
    new object[]
        {
            renter,
            tokenId,
            expiresAt
        })
```

### Web3SendMethodAsync

```c
Task Web3SendMethodAsync(string methodName, object[] arguments,
			string gas = null, string gasPrice = null, string nonce = null,
			ITransactionEventHandler eventHandler = null);
```

Input:

* methodName: contract method name to call. Contract ABI should contain methodName.
* arguments: an array of arguments for contract call. Contract ABI should contain ABIType for passed arguments.
* gas: The amount of gas to use for the transaction (unused gas is refunded).
* gasPrice: The price of gas for this transaction in wei,
* nonce: Integer of the nonce. This allows to overwrite your own pending transactions that use the same nonce.
* eventHandler: event handler which allows you to track every step of your transaction.

Output:

* void
To get a receipt using **Web3SendMethodAsync** you can subscribe to ITransactionEventHandler

```c
void ReceiptReceived(TransactionReceipt receipt);
```

### ITransactionEventHandler callback:

* Transaction Begin - is called right after transaction input was created
* Transaction End - is called after transaction was requested, but still pending
* Transaction Hash - is called in case if task was not faulted and hash was received
* Transaction Error - is called if there was a error during transaction execution
* Transaction Receipt - receipt is requested in case if transaction was successful via EthHandler and is passed to Receipt callback.

#### GetAllChanges

```c
Task<List<EventLog<TEvDto>>> GetAllChanges<TEvDto>(EventFilterData evFilter) where TEvDto : IEventDTO, new()
```

Input:

* evFilter:EventFilterData is a simple data holder which allows you to filter events. 

Output:
* List of event logs filled with supplied DTO.

EventFilterData allows you to filter event by topics (3 max) and "To Block" with "From Block"

#### GetData

```c
Task<TReturnType> GetData<TFieldData, TReturnType>(TFieldData requestData = null)
            where TFieldData : FunctionMessage, new()
```

Queries a request to get data from contract

#### EstimateGas

Makes a call or transaction, which won't be added to the blockchain and returns the used gas, which can be used for estimating the used gas.

```c
Task<HexBigInteger> EstimateGas(string methodName, object[] arguments = null,
			string gas = null, string gasPrice = null,
			string nonce = null)
```

Input:

* methodName: contract method name to estimate. Contract ABI should contain methodName.
* arguments: an array of arguments for contract call. Contract ABI should contain ABIType for passed arguments.
* gas: The amount of gas to use for the transaction (unused gas is refunded).
* gasPrice: The price of gas for this transaction in wei,
* nonce: Integer of the nonce. This allows to overwrite your own pending transactions that use the same nonce.

Output:

* estimated gas price for transaction