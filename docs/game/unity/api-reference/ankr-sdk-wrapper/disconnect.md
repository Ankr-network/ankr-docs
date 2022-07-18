---
title: Disconnect
id: disconnect
---

# Disconnect

## Declaration

`UniTask Disconnect(bool waitForNewSession)`

## Parameters

| Parameter           | Description                                                                         |
|---------------------|-------------------------------------------------------------------------------------|
| `waitForNewSession` | If true (by default), a connection will be reestablished after disconnect. If false, connection will be closed immediately. |

## Description

Removes a wallet connection.

## Code example

```C++
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
