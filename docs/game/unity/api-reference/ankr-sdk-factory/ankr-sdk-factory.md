---
title: AnkrSDKFactory
id: ankr-sdk-factory
---

# AnkrSDKFactory

## Description

A class for SDK instance creation.

## Static methods

| GetAnkrSDKInstance | Create instance of SDK with given argument. |

or

| networkName | Enum with network name. |

## Returns

`IAnkrSDK` Instance of SDK provider.

## Description

Create an SDK instance by given provider URL or network name.

## Code example

```C++
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