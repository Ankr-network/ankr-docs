---
title: Sign
id: sign
---

# Sign

## Declaration

Task<string> Sign(string messageToSign, string address)

## Parameters

| messageToSign | Message that should be signed. |
| address       | Account address.               |

## Returns

`string` — a string with a signature.

## Description

Signs data using a specific account.

## Code example

```C++
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


