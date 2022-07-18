---
title: GetContract
id: get-contract
---

# GetContract

## Declaration

`IContract GetContract(string contractAddress, string contractABI)`

## Parameters

| Parameter         | Description                                                              |
|-------------------|--------------------------------------------------------------------------|
| `contractAddress` | A string containing a contract address.                                  |
| `contractABI`     | A string containing an application binary interface (ABI) of a contract. |

## Returns

| Parameter   | Description                                                                  |
|-------------|------------------------------------------------------------------------------|
| `IContract` | Returns an instance of [Contract](/game/unity/api-reference/contract) class. |

## Description

Provides an instance of a contract with a platform-dependant provider.

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
