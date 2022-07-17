---
title: GetDefaultAccount
id: get-default-account
---

# GetDefaultAccount

## Declaration

Task<string> GetDefaultAccount()

## Returns

`string` — a string with account address.

## Description

Method returns address that your wallet provided. There is no way to change it from SDK because it has a pair private key stored at your wallet. To change default address you need to open wallet and change it manually.

## Code example

```C++
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


