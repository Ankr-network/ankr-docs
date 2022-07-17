---
title: GetContract
id: get-contract
---

# GetContract

## Declaration

IContract GetContract(string contractAddress, string contractABI)

## Parameters

| contractAddress | String with contract address.                               |
| contractABI     | String with application binary interface (ABI) of contract. |

## Returns

`IContract` instance of [Contract](/game/unity/api-reference/contract/contract) class.

## Description

Provide an instance of a contract with a platform-dependant provider.

## Code example

```C++
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
