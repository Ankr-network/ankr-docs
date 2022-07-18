---
title: Sign
id: sign
---

# Sign

## Declaration

`Task<string> Sign(string messageToSign, string address)`

## Parameters

| Parameter       | Description                      |
|-----------------|----------------------------------|
| `messageToSign` | A message that has to be signed. |
| `address`       | An account address.              |

## Returns

| Parameter | Description                      |
|-----------|----------------------------------|
| `string`  | A string containing a signature. |

## Description

Signs the data using a specific account.

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


