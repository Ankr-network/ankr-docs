---
title: AnkrSDKWrapper
id: ankr-sdk-wrapper
---

# AnkrSDKWrapper

## Description

AnkrSDKWrapper provides support for all platform-dependent features. Implements IAnkrSDK.

## Parameters


| Parameter       | Description                            |
|-----------------|----------------------------------------|
| `NetworkHelper` | Provides an `INetworkHelper` instance. |
| `Eth`           | Provides an `IEthHandler` instance.    |

## Public methods

| Method                                                                           | Description                                    |
|----------------------------------------------------------------------------------|------------------------------------------------|
| [GetContract](/game/unity/api-reference/ankr-sdk-wrapper/get-contract)           | Makes an instance of a contract to interact with a smart contract. |
| [CreateSubscriber](/game/unity/api-reference/ankr-sdk-wrapper/create-subscriber) | Makes subscribers for the real-time contract event subscriptions. |
| [Disconnect](/game/unity/api-reference/ankr-sdk-wrapper/disconnect)              | Closes a connection with the wallet. |



