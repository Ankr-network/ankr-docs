---
title: GetData
id: get-data
---

# GetData

## Declaration

`Task<TReturnType> GetData<TFieldData, TReturnType>(TFieldData requestData)`

## Parameters

| Parameter     | Description                                                       |
|---------------|-------------------------------------------------------------------|
| `requestData` | An object containing the arguments that take the contract method. |

## Returns

| Parameter     | Description                                       |
|---------------|---------------------------------------------------|
| `TReturnType` | Data from a contract's method, field, or mapping. |

## Description

:::warning
Use only for methods that return data, contract fields, and mappings. To change a contract state, use [CallMethod](/game/unity/api-reference/contract/call-method) or [Web3SendMethod](/game/unity/api-reference/contract/web3-send-method). To find out more on the difference between contract methods please, have a look at [Gas fees and gas-free methods](/game/extra/gas-fees-gas-free-methods).
:::

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

```json
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

```C++
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

