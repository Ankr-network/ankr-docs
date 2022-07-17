---
title: Disconnect
id: disconnect
---

# Disconnect

## Declaration

UniTask Disconnect(bool waitForNewSession)

## Parameters

| waitForNewSession | If true (by default) connection will be reestablished after disconnect. If false connection will be closed immediately. |

## Description

Removes a connection with wallet.

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
