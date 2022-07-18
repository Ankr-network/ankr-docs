---
title: AnkrSDKFactory
id: ankr-sdk-factory
---

# AnkrSDKFactory

## Description

A class for SDK instance creation.

## Static methods

| Method               | Description                                       |
|----------------------|---------------------------------------------------|
| `GetAnkrSDKInstance` | Creates an instance of SDK with a given argument. | 

or

| Method        | Description                        |
|---------------|------------------------------------|
| `networkName` | An enum containing a network name. | 

## Returns

| Parameter  | Description                  |
|------------|------------------------------|
| `IAnkrSDK` | An instance of SDK provider. | 

## Description

Creates an SDK instance by a given provider URL or network name.

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