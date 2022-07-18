---
title: CreateSubscriber
id: create-subscriber
---

# CreateSubscriber

## Declaration

`IContractEventSubscriber CreateSubscriber(string wsUrl)`

## Parameters

| Parameter  | Description                                    |
|------------|------------------------------------------------|
| `wsUrl`    | A string containing an RPC WebSocket endpoint. |

## Returns

| Parameter                  | Description                              |
|----------------------------|------------------------------------------|
| `IContractEventSubscriber` | Returns an instance of subscriber class. |

## Description

Provides an instance of subscriber to make contract event subscriptions. See more on [Events and subscriptions](/game/extra/events-and-subscriptions).

## Code example

```C++
using AnkrSDK.Core.Infrastructure;
using AnkrSDK.Data;
using AnkrSDK.DTO;
using AnkrSDK.Examples.ERC20Example;
using AnkrSDK.Provider;
using AnkrSDK.UseCases;
using Cysharp.Threading.Tasks;
using UnityEngine;

namespace AnkrSDK.EventListenerExample
{
	public class EventListenerExample : UseCase
	{
		private IContractEventSubscriber _eventSubscriber;
		private IContractEventSubscription _subscription;
		private IEthHandler _eth;

		private void Start()
		{			
			var ankrSDK = AnkrSDKFactory.GetAnkrSDKInstance(ERC20ContractInformation.HttpProviderURL);
			_eth = ankrSDK.Eth;

			_eventSubscriber = ankrSDK.CreateSubscriber(ERC20ContractInformation.WsProviderURL);
			_eventSubscriber.ListenForEvents().Forget();
			_eventSubscriber.OnOpenHandler += UniTask.Action(SubscribeWithRequest);
		}

		// If you know topic position then you can use EventFilterData
		public async UniTaskVoid SubscribeWithTopics()
		{
			var filters = new EventFilterData
			{
				FilterTopic2 = new object[] { await _eth.GetDefaultAccount() }
			};

			_subscription = await _eventSubscriber.Subscribe(
				filters,
				ERC20ContractInformation.ContractAddress, 
				(TransferEventDTO t) => ReceiveEvent(t)
			);
		}
		
		// If you know only topic name then you can use EventFilterRequest
		public async UniTaskVoid SubscribeWithRequest()
		{
			var filtersRequest = new EventFilterRequest<TransferEventDTO>();
			filtersRequest.AddTopic("To", await _eth.GetDefaultAccount());

			_subscription = await _eventSubscriber.Subscribe(
				filtersRequest,
				ERC20ContractInformation.ContractAddress, 
				ReceiveEvent
			);
		}

		private void ReceiveEvent(TransferEventDTO contractEvent)
		{
			Debug.Log($"{contractEvent.From} - {contractEvent.To} - {contractEvent.Value}");
		}

		public void Unsubscribe()
		{
			_eventSubscriber.Unsubscribe(_subscription.SubscriptionId).Forget();
		}

		private void OnDestroy()
		{
			_eventSubscriber.StopListen();
		}
	}
}
```
